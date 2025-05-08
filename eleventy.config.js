import path, { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import childProcess from "child_process";
import fs from "fs";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import { load as yamlLoad } from "js-yaml";
import {
  CALLOUT_TYPE,
  CALLOUT_TYPE_MAP,
  HAZARD_TYPE,
  HAZARD_TYPE_MAP,
  STEP_INFO_ICON,
  STEP_RESULT_ICON,
} from "./defs.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isPreview = process.env.PREVIEW_BUILD || process.argv.includes("--serve");

const languageDisplayNames = new Intl.DisplayNames(["en"], {
  type: "language",
});
const currentGitSha = childProcess
  .execSync(`git log -1 --format=format:%H`)
  .toString()
  .trim();

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("../_includes");
  eleventyConfig.setIncludesDirectory("../_partials");
  eleventyConfig.setDataDirectory("../_data");
  eleventyConfig.addGlobalData(
    "layout",
    isPreview ? "preview.njk" : "base.njk"
  );

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // Add ids to headings
  eleventyConfig.addTransform(
    "add-heading-ids",
    function (content, outputPath) {
      if (outputPath.endsWith(".html")) {
        return content.replace(
          /<h([1-6])>([^<]+)<\/h[1-6]>/g,
          function (match, level, text) {
            const id = text
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");
            return `<h${level} id="${id}">${text}</h${level}>`;
          }
        );
      }
      return content;
    }
  );

  eleventyConfig.addCollection("zendeskSections", function (collection) {
    const data = {};
    const sections = collection
      .getAll()
      .filter((item) => item.data.zendesk && item.data.zendesk.section_id)
      .sort((a, b) => a.data.zendesk.position - b.data.zendesk.position);
    const articles = collection
      .getAll()
      .filter((item) => item.data.zendesk && item.data.zendesk.article_id)
      .sort((a, b) => a.data.zendesk.position - b.data.zendesk.position);
    for (const section of sections) {
      const sectionBasePath = section.inputPath
        .split("/")
        .slice(0, -1)
        .join("/");
      data[section.data.zendesk.section_id] = {
        ...section.data.zendesk,
        section,
        articles: articles.filter((article) =>
          article.inputPath.startsWith(sectionBasePath)
        ),
      };
    }
    return data;
  });

  eleventyConfig.addFilter("languageDisplayName", function (code) {
    return languageDisplayNames.of(code);
  });

  eleventyConfig.addCollection("zendeskCategories", function (collection) {
    const data = {};
    const sectionsData = {};

    const categories = collection
      .getAll()
      .filter((item) => item.data.zendesk && item.data.zendesk.category_id)
      .sort((a, b) => a.data.zendesk.position - b.data.zendesk.position);

    const sections = collection
      .getAll()
      .filter((item) => item.data.zendesk && item.data.zendesk.section_id)
      .sort((a, b) => a.data.zendesk.position - b.data.zendesk.position);

    const articles = collection
      .getAll()
      .filter((item) => item.data.zendesk && item.data.zendesk.article_id)
      .sort((a, b) => a.data.zendesk.position - b.data.zendesk.position);

    for (const section of sections) {
      const sectionBasePath = section.inputPath
        .split("/")
        .slice(0, -1)
        .join("/");
      sectionsData[section.data.zendesk.section_id] = {
        ...section.data.zendesk,
        section,
        articles: articles.filter((article) =>
          article.inputPath.startsWith(sectionBasePath)
        ),
      };
    }
    for (const category of categories) {
      const categoryBasePath = category.inputPath
        .split("/")
        .slice(0, -1)
        .join("/");
      data[category.data.zendesk.category_id] = {
        ...category.data.zendesk,
        category,
        sections: Object.values(sectionsData).filter((section) =>
          section.section.inputPath.startsWith(categoryBasePath)
        ),
      };
    }
    return data;
  });

  // Make external links open in a new tab
  eleventyConfig.addTransform("external-links", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      return content.replace(
        /<a href="(http[s]:\/\/)(?!support\.nabucasa\.com)([^"]+)"/g,
        '<a href="$1$2" target="_blank" rel="noreferrer"'
      );
    }
    return content;
  });

  eleventyConfig.addShortcode("zendeskCategoryId", function (page) {
    const [_, __, categoryName] = page.inputPath.split("/");
    if (!categoryName) {
      return "";
    }

    const targetPath = resolve(
      eleventyConfig.dir.input,
      "src",
      categoryName,
      "_category.md"
    );

    if (!fs.existsSync(targetPath)) {
      return "";
    }

    const content = fs
      .readFileSync(targetPath, { encoding: "utf-8" })
      .toString()
      .split("---")[1];

    return yamlLoad(content, { json: true }).zendesk.category_id;
  });

  eleventyConfig.addShortcode("zendeskSectionId", function (page) {
    const [_, __, categoryName, sectionName] = page.inputPath.split("/");
    if (!sectionName) {
      return "";
    }

    const targetPath = resolve(
      eleventyConfig.dir.input,
      "src",
      categoryName,
      sectionName,
      "_section.md"
    );

    if (!fs.existsSync(targetPath)) {
      return "";
    }

    const content = fs
      .readFileSync(targetPath, { encoding: "utf-8" })
      .toString()
      .split("---")[1];

    return yamlLoad(content, { json: true }).zendesk.section_id;
  });

  let currentStep = 0;
  eleventyConfig.addPairedShortcode("steps", function (content) {
    currentStep = 0; // reset step number
    let html = `<div class="steps">`; // open steps
    html += content;
    html += `</div>`; // close steps

    return html;
  });

  eleventyConfig.addPairedShortcode("step", function (content, title) {
    let html = `<div class="step">`; // open step

    html += `<div class="step-header">`; // open header
    html += `<div class="step-number">Step ${++currentStep}</div>`; // add step number
    if (title) {
      html += `<div class="step-title">${title}</div>`; // add step title
    }
    html += `</div>`; // close header

    html += `<div class="step-content-wrapper">`; // open content
    html += content;
    html += `</div>`; // close content

    html += `</div>`; // close step

    return html;
  });

  eleventyConfig.addPairedShortcode("stepContent", function (content) {
    let html = `<div class="step-content">`; // open content
    html += content;
    html += `</div>`; // close content

    return html;
  });

  eleventyConfig.addShortcode("image", function (src, alt) {
    if (!src) {
      throw new Error("Image shortcode requires a src parameter");
    }

    if (!alt) {
      throw new Error("Image shortcode requires an alt parameter");
    }

    return `<img src="${src}" alt="${alt}"/>`;
  });

  eleventyConfig.addShortcode("hazard", function (type, content) {
    // if type not in array of strings
    if (!Object.values(HAZARD_TYPE).includes(type)) {
      throw new Error(
        `Hazard shortcode requires a valid type parameter: ${Object.values(
          HAZARD_TYPE
        ).join(", ")}`
      );
    }

    const hazardKey = Object.keys(HAZARD_TYPE).find(
      (key) => HAZARD_TYPE[key] === type
    );
    const hazardMap = HAZARD_TYPE_MAP[hazardKey];

    if (!hazardMap) {
      throw new Error(`Hazard type ${type} not found in hazard map`);
    }

    if (!content) {
      throw new Error("Hazard shortcode requires content");
    }

    return `<div class="hazard ${type}"><div class="hazard-prefix">${hazardMap.icon} ${hazardMap.text}</div><div class="hazard-content">${content}</div></div>`;
  });

  eleventyConfig.addShortcode("callout", function (type, content) {
    // if type not in array of strings
    if (!Object.values(CALLOUT_TYPE).includes(type)) {
      throw new Error(
        `Callout shortcode requires a valid type parameter: ${Object.values(
          CALLOUT_TYPE
        ).join(", ")}`
      );
    }

    const calloutKey = Object.keys(CALLOUT_TYPE).find(
      (key) => CALLOUT_TYPE[key] === type
    );
    const calloutMap = CALLOUT_TYPE_MAP[calloutKey];

    if (!calloutMap) {
      throw new Error(`Callout type ${type} not found in callout map`);
    }

    if (!content) {
      throw new Error("Callout shortcode requires content");
    }

    return `<div class="callout ${type}"><div class="callout-prefix">${calloutMap.icon} ${calloutMap.text}:</div><div class="callout-content">${content}</div></div>`;
  });

  eleventyConfig.addShortcode("stepInfo", function (content) {
    // if type not in array of strings
    if (!content) {
      throw new Error("Step info shortcode requires content");
    }

    return `<div class="step-info"><div class="step-info-prefix">${STEP_INFO_ICON} Info:</div><div>${content}</div></div>`;
  });

  eleventyConfig.addShortcode("stepResult", function (content) {
    // if type not in array of strings
    if (!content) {
      throw new Error("Step result shortcode requires content");
    }

    return `<div class="step-result"><div class="step-result-prefix">${STEP_RESULT_ICON} Result:</div><div>${content}</div></div>`;
  });

  eleventyConfig.addShortcode("zendeskData", function (zendeskFrontmatter) {
    return `<!-- ${JSON.stringify({ zendesk: zendeskFrontmatter })} -->`;
  });

  eleventyConfig.addShortcode("currentGitSha", function () {
    return currentGitSha;
  });

  eleventyConfig.addShortcode("partial", function (filename, data) {
    // if no extension in filename, default to .md
    if (filename.split(".").length === 1) {
      filename = `${filename}.md`;
    }

    const partialPath = path.join(__dirname, "./_partials", filename);

    if (!fs.existsSync(partialPath)) {
      return `Partial not found: ${partialPath}`;
    }

    return fs.readFileSync(partialPath, "utf-8");
  });

  if (isPreview) {
    // Additional changes required for preview build
    eleventyConfig.setServerOptions({
      messageOnStart: ({ options }) =>
        `Server started at http://127.0.0.1:${options.port}/`,
    });

    eleventyConfig.addGlobalData("permalink", () => {
      return (data) => {
        if (data?.zendesk?.article_id) {
          return `/articles/${data.zendesk.article_id}.${data.page.outputFileExtension}`;
        }
        if (data?.zendesk?.section_id) {
          return `/sections/${data.zendesk.section_id}.${data.page.outputFileExtension}`;
        }
        if (data?.zendesk?.category_id) {
          return `/categories/${data.zendesk.category_id}.${data.page.outputFileExtension}`;
        }
        return `${data.page.filePathStem}.${data.page.outputFileExtension}`;
      };
    });

    eleventyConfig.addPassthroughCopy("static");

    eleventyConfig.addTransform(
      "external-links",
      function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
          return content.replace(
            /="\/hc\/en-us\/(categories|articles|sections)\/(\w+).*"/g,
            '="/$1/$2"'
          );
        }
        return content;
      }
    );
  } else {
    eleventyConfig.addTransform(
      "replace-static-links",
      function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
          return content.replace(
            /(href|src)="\/static/g,
            '$1="https://raw.githubusercontent.com/NabuCasa/support/refs/heads/main/static'
          );
        }
        return content;
      }
    );
  }
}
