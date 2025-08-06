#!/bin/sh
# -----------------------------------------------------------------------------
# Script to create a standard project directory structure and initial markdown files.
# Usage: ./create-project-structure.sh <project>
#   <project> - The name of the project to create directories and files for.
# Example:
#   ./create-project-structure.sh my-new-project
# -----------------------------------------------------------------------------
cd "$(dirname "$(readlink -f "$0")")/.."
project="$1"
if [ -z "$project" ]; then
    echo "Usage: $0 <project>"
    exit 1
fi
start_ms=$(date +%s%3N)
# Create directories
mkdir -p "./src/${project}/about-the-device" \
         "./src/${project}/getting-started" \
         "./src/${project}/faq-about-the-product" \
         "./src/${project}/resources" \
         "./src/${project}/troubleshooting"
echo "---
zendesk:
  category_id:
  position: 99
  name: ${project}
  description: ${project}
---
" > "./src/${project}/_category.md"
echo "---
zendesk:
  section_id:
  position: 20
  name: About the device
---
" > "./src/${project}/about-the-device/_section.md"
echo "---
zendesk:
  section_id:
  position: 50
  name: FAQ - About the product
---
" > "./src/${project}/faq-about-the-product/_section.md"
echo "---
zendesk:
  section_id:
  position: 60
  name: Resources
---
" > "./src/${project}/resources/_section.md"
echo "---
zendesk:
  section_id:
  position: 10
  name: Getting started
---
" > "./src/${project}/getting-started/_section.md"
echo "---
zendesk:
  section_id:
  position: 40
  name: Troubleshooting
---
" > "./src/${project}/troubleshooting/_section.md"
echo "---
---
zendesk:
  article_id:
  name: Datasheet
  position: 40
  labels: resources
---
" > "./src/${project}/resources/datasheet.md"
echo "---
zendesk:
  article_id:
  name: Declaration of Conformity for EU
  position: 30
  labels: resources
---
" > "./src/${project}/resources/eu-declaration-of-conformity.md"
echo "---
zendesk:
  article_id:
  name: Quick Start Guide
  position: 10
  labels: resources
---
" > "./src/${project}/resources/quick-start-guide.md"
echo "---
zendesk:
  article_id:
  name: Warranty and Safety Information
  position: 20
  labels: resources
---
" > "./src/${project}/resources/warranty-and-safety-information.md"
echo "---
zendesk:
  article_id:
  name:  About the device
  position: 10
  labels: about-the-device
---" > "./src/${project}/about-the-device/about.md"
echo "---
zendesk:
  article_id:
  name: Does it support Wi-Fi?
  position: 10
  labels: faq
---
" > "./src/${project}/faq-about-the-product/does-it-support-wi-fi.md"
echo "---
zendesk:
  article_id:
  name: Enable debug logging
  position: 20
  labels: troubleshooting
---" > "./src/${project}/troubleshooting/enable-debug-logging.md"
end_ms=$(date +%s%3N)
elapsed_ms=$((end_ms - start_ms))
echo "Project structure for '${project}'created successfully in ${elapsed_ms} ms."
exit 0