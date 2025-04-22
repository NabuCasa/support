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
  name: Getting started # Required. The name of the section in Zendesk
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

# Creating / deleting content

This repo does not create or delete content in Zendesk. It only updates the content of existing articles, sections, and categories. There are a few things to note:

## Creating content

Before creating new content, you must first create the content structure in Zendesk.
1. In Zendesk, creating the category, section, and article(s). You do not need to populate any content in these objects.

2. Once created, obtain the ID for each object. 
    - To do this, "preview" the article/section/category in Zendesk and copy the ID from the URL.
    - For example, if the URL is `https://support.nabucasa.com/hc/en-us/articles/24737667232413-Setting-up-the-device`, the ID is `24737667232413`. 
3. Paste this ID into the metadata header of that object.

## Deleting articles, sections, or categories

This repo can delete content of an article in Zendesk, but not an entire article, section, or category. If you want to delete these, you must do this in Zendesk. Once deleted, remove the relevant files from this repo to avoid errors.

# Deployment

The deployment process handles the validation and deployment of content to Zendesk. The log of this process is output to the console and can be viewed in the GitHub Actions logs.

## Validation step

The first step of the deployment is to validate that all the metadata is correct. This includes checking that all the required fields are present and that the values are valid. If any errors are found, the deployment will fail and the errors will be output to the console. It will also check for duplicate article IDs and section IDs. If any duplicates are found, these will be skipped and a note with the conflicting IDs will be output to the console.

The log may look like the following:

```bash
[A][✔] ---- Using the console on the HDMI display
[C][✘] index.html - Invalid meta
[C][✔] Home Assistant Voice Preview Edition
[S][✔] -- About the device
[A][✔] ---- About Home Assistant Voice Preview Edition
[A][✔] ---- Device overview
```

The key for the line format is
`[A] = Article, [C] = Category, [S] = Section, [✔] = Valid, [✘] = Invalid`

## Deployment step

The second step of the deployment is to deploy the content to Zendesk. This includes updating the category, section, and article in Zendesk. It will only process the valid content from the previous step. An example of the log output is as follows:

```bash
[C][✔] Home Assistant Cloud
[A][✔] ---- Downloading a backup from Home Assistant Cloud
[A][✔] ---- Deleting the backup stored on Home Assistant Cloud
[A][✔] ---- How can I use Home Assistant Cloud on older Android devices?
[A][✔] ---- Can I use remote access with any Home Assistant installation method?
[A][T][✔] ---- Can I use remote access with any Home Assistant installation method?
[A][T][✔] ---- Can I use a single account for multiple Home Assistant installations?
[A][✔] ---- I want my VAT number to be attached on the invoice
[A][T][✔] ---- I want my VAT number to be attached on the invoice
[C][T][✔] Home Assistant Cloud
[S][✔] -- Home Assistant Cloud backup
[S][✔] -- FAQ - Home Assistant Cloud
[A][✔] ---- Enabling Home Assistant Cloud
```

The key for the line format is
`[A] = Article, [C] = Category, [S] = Section, [T] = Translation (content update), [✔] = Valid, [✘] = Invalid`

For each category and article, 2 requests are made to the Zendesk API. The first request is to update the metadata of the article/category and the second request is to update the content of the article/category. Articles that update the content will contain the same keys in the log file but with a `[T]` to indicate it is a translation update (which is content).

# Static assets

GitHub is used to serve the static assets shown on Zendesk. These assets are located under the `static` folder at the root of this repo. When referencing static assets, use them as follows:

```markdown
For an image:
![Clip showing the 3 LEDS on Home Assistant Green](/static/img/green/green_yellow_led_heartbeat.webp)
For a link:
[Datasheet](/static/docs/connect-zbt-1/Home-Assistant-Connect-ZBT-1_Datasheet_v2_0.pdf)
```

Upon build, Eleventy will replace all the static assets with the correct URL for the asset. This allows for easy referencing of static assets in the content.

# Internal linking

If you need to link to other articles within Zendesk, use a relative URL without the domain. For example, if I want to link to this article: https://support.nabucasa.com/hc/en-us/articles/24737667232413-Setting-up-the-device, I would use the following markdown:

```markdown
Correct link:
[Setting up the device](/hc/en-us/articles/24737667232413)
Incorrect link (using slug after the article ID):
[Setting up the device](/hc/en-us/articles/24737667232413-Setting-up-the-device)
Incorrect link (missing starting slash in URL):
[Setting up the device](hc/en-us/articles/24737667232413)
Incorrect link (using URL domain):
[Setting up the device](https://support.nabucasa.com/hc/en-us/articles/24737667232413)
```

Notice how the slug of the article is not included in the link. (e.g. use `/hc/en-us/articles/24737667232413` instead of `/hc/en-us/articles/24737667232413-Setting-up-the-device`). This is because Zendesk uses the title of the object as the slug which is subject to change with future updates. Conveniently, going to the URL without the slug will redirect to the correct URL with the slug. This will allow for easy linking to other articles without worrying about the slug changing in the future.

# How to contribute

- Clone this repo into a docker container volume.
- Create a `.env` file at the root of the project, copying the contents of `.env.example`, replacing the values with your own.
- Run `npm run start` to start the Zendesk theme compiler and the preview server on port 8080.
- Make changes to the content in the `src/` folder.
- Make sure to run `npm run build` to build the content before pushing.
- Raise a PR to the main branch.
- Once the PR is merged, the content will be deployed to Zendesk.
