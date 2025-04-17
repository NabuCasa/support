# Nabu Casa Support Content

This repo provides the content for the [Nabu Casa Zendesk support site](https://support.nabucasa.com/hc/en-us/). Each push to main will deploy the content to Zendesk.

## How does it work?

A deploy script runs via GitHub Actions and uploads the content via the Zendesk REST API. Each PR builds a preview of on a replica of the Zendesk theme, which is then deployed to a preview URL via Netlify. This allows for easy review of changes before they are merged into the main branch.

# Content structure

This is a custom implementation of using version control to manage content for Zendesk.

All `.md` files within the `src/` folder will be treated as something that relates to a Zendesk object. Metadata is defined using frontmatter syntax. The folder structure under `/src` is as follows:

- `{category}/` - Used to group sections together. Purely for organisation in the repo
  - `_category.md` - (required) Metadata that describes the category for Zendesk
  - `{section}/` - Used to group articles together. Purely for organisation in the repo
    - `_section.md` - (required) Metadata that describes the section for Zendesk
    - `{article}.md` - The article that will be sent to Zendesk. It also contains metadata for the article

## Metadata

There are some required and optional fields for each of the metadata files. The required fields are used to reference the Zendesk object, while the optional fields are used to populate the content or metadata for the object.

### Category (`_category.md`)

```yaml
---
zendesk:
  category_id: 24638797677853 # Required. The ID of the category in Zendesk
  name: Home Assistant Green # Required. The name of the category in Zendesk
  position: 1 # Optional. Defaults to 0
  description: The affordable Home Assistant Green is the... # Optional. The description of the category in Zendesk
---
```

### Section (`_section.md`)

```yaml
---
zendesk:
  section_id: 24737097675549 # Required. The ID of the section in Zendesk
  name: Getting Started # Required. The name of the section in Zendesk
  position: 1 # Optional. The position of the section in Zendesk in relation to other sections
  description: All the things to get you started... # Optional. The description of the section in Zendesk
---
```

### Article (`_<article-slug>.md`)

```yaml
---
zendesk:
  article_id: 24737667232413 # Required. The ID of the article in Zendesk
  name: Getting started with Home Assistant Green # Required. The name of the article in Zendesk
  position: 2 # Optional. The position of the article in Zendesk in relation to other articles
---
```

# How to contribute

- Clone this repo into a docker container volume
- Create a `.env` file at the root of the project, copying the contents of `.env.example`, replacing the values with your own
- Run `npm run start` to start the Zendesk theme compiler and the preview server on port 8080
- Make changes to the content in the `src/` folder
- Make sure to run `npm run build` to build the content before pushing
- Raise a PR to the main branch
- Once the PR is merged, the content will be deployed to Zendesk
