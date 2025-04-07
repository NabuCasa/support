# Nabu Casa Support

This repo provides the theme, content and assets for Zendesk support for Nabu Casa. It allows anyone to contribute to the support documentation in one place and have it automatically deployed to Zendesk.

## How does it work?

There are a few moving parts to this repository:

- Zendesk - Uses this repo as the theme for the Nabu Casa support website
- GitHub Actions - Responsible for deploying content to Zendesk via the REST API and uploading static assets to Cloudflare R2

# Folder structure

## Zendesk theme

The Zendesk theme is stored in the root of the repository as per the [requirements of Zendesk](https://support.zendesk.com/hc/en-us/articles/4408832476698-Setting-up-the-GitHub-integration-with-your-Guide-theme#topic_i3v_kyk_chb).

## Content

This is a custom implementation of using version control to manage content for Zendesk. The goal is to use DITA as the publishing architecture with the [Markdown flavour](https://www.dita-ot.org/dev/reference/markdown/markdown-dita-syntax).

Upon a push to the `main` branch, the GitHub Action will validate the DITA syntax, convert the Markdown to HTML and upload the content to Zendesk via the REST API.

Since we want to manage all content in Zendesk (including categories and sections), there is a specific structure to the `/content` folder.

All `.md` files within the `content/` folder will be treated as something that relates to a Zendesk object. Metadata is defined using frontmatter syntax. The folder structure under `/content` is as follows:

- `{category}/` - Used to group sections together. Purely for organisation in the repo
  - `_category.md` - (required) Metadata that describes the category for Zendesk
  - `{section}/` - Used to group articles together. Purely for organisation in the repo
    - `_section.md` - (required) Metadata that describes the section for Zendesk
    - `{article}.md` - The article that will be sent to Zendesk. It also contains metadata for the article

# Local development

- Clone this repo into a docker container volume
- Create a `.env` file at the root of the project, copying the contents of `.env.example`, replacing the values with your own
- Run `npm run start` to start the Zendesk theme compiler and the preview server

## Content preview

To ease content creation, a preview is available. Keep in mind that is just a preview to help visualize content, some features are not working (search engine for example). To run it:

- open the devcontainer in Visual Studio Code
- the task `Content preview` (or run `npm run zendesk-content-preview`)
- visit `http://127.0.0.1:8080`