# Nabu Casa Support Content

This repo provides the content for the Nabu Casa Zendesk support site. It allows anyone to contribute to the support documentation and have it automatically deployed to Zendesk. It's built using Eleventy allowing the use of Markdown to build the content.

## How does it work?

GitHub Actions is responsible for deploying content to Zendesk via the REST API and uploading static assets to Cloudflare R2. Each PR builds a preview of on a replica of the Zendesk theme, which is then deployed to a preview URL. This allows for easy review of changes before they are merged into the main branch.

# Content structure

This is a custom implementation of using version control to manage content for Zendesk.

Upon a push to the `main` branch, the GitHub Action will build the Eleventy content and upload it to Zendesk via the REST API.

Since we want to manage all content in GitHub (including categories and sections), there is a specific structure to this repo.

All `.md` files within the `src/` folder will be treated as something that relates to a Zendesk object. Metadata is defined using frontmatter syntax. The folder structure under `/src` is as follows:

- `{category}/` - Used to group sections together. Purely for organisation in the repo
  - `_category.md` - (required) Metadata that describes the category for Zendesk
  - `{section}/` - Used to group articles together. Purely for organisation in the repo
    - `_section.md` - (required) Metadata that describes the section for Zendesk
    - `{article}.md` - The article that will be sent to Zendesk. It also contains metadata for the article

# Local development

TODO: Update this section

- Clone this repo into a docker container volume
- Create a `.env` file at the root of the project, copying the contents of `.env.example`, replacing the values with your own
- Run `npm run start` to start the Zendesk theme compiler and the preview server

## Content preview

To ease content creation, a preview is available. Keep in mind that is just a preview to help visualize content, some features are not working (search engine for example). To run it:

- open the devcontainer in Visual Studio Code
- the task `Content preview` (or run `npm run start`)
- visit `http://127.0.0.1:8080`
