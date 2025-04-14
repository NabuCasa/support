import path, { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import { load as yamlLoad } from "js-yaml";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isPreview = process.env.PREVIEW_BUILD || process.argv.includes("--serve");

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setIncludesDirectory("../_includes");
  eleventyConfig.setDataDirectory("../_data");
  eleventyConfig.addGlobalData(
    "layout",
    isPreview ? "preview.njk" : "base.njk"
  );

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addTransform(
    "replace-static-links",
    function (content, outputPath) {
      if (outputPath.endsWith(".html")) {
        return content.replace(
          /(href|src)="\/static/g,
          '$1="https://raw.githubusercontent.com/NabuCasa/support/refs/heads/static'
        );
      }
      return content;
    }
  );

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

  eleventyConfig.addShortcode("zendeskData", function (zendeskFrontmatter) {
    return `<!-- ${JSON.stringify({ zendesk: zendeskFrontmatter })} -->`;
  });

  eleventyConfig.addShortcode("timestamp", function (zendeskFrontmatter) {
    return new Date().setUTCHours(0, 0, 0, 0);
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
  }
}
