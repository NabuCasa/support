import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { EleventyRenderPlugin } from "@11ty/eleventy";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setIncludesDirectory("../_includes");
  eleventyConfig.setDataDirectory("../_data");
  eleventyConfig.addGlobalData("layout", "base.njk");

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

  eleventyConfig.addShortcode("zendeskData", function (zendeskFrontmatter) {
    return `<!-- ${JSON.stringify({ zendesk: zendeskFrontmatter })} -->`;
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
}
