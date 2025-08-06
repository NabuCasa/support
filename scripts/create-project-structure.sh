#!/bin/sh
# -----------------------------------------------------------------------------
# Script to create a standard project directory structure and initial markdown files.
# Usage: ./create-project-structure.sh <project>
#   <project> - The name of the project to create directories and files for.
# Example:
#   ./create-project-structure.sh my-new-project
# -----------------------------------------------------------------------------
# Change to the parent directory of the script location to ensure relative paths are correct
cd "$(dirname "$0")/.."

project="$1"

if ! echo "$project" | grep -Eq '^[a-zA-Z0-9_-]+$'; then
    echo "Error: Project name must only contain letters, numbers, dashes, or underscores."
    exit 1
fi

# Record the start time in milliseconds for timing the script execution
start_ms=$(date +%s%3N)


# Create directories
mkdir -p "./src/${project}/about-the-device" \
         "./src/${project}/getting-started" \
         "./src/${project}/faq-about" \
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

# Getting started section
echo "---
zendesk:
  section_id:
  position: 10
  name: Getting started
---
" > "./src/${project}/getting-started/_section.md"

# Getting started articles
echo "---
zendesk:
  article_id:
  name:  Getting started with ${project}
  position: 10
  labels: getting-started
---" > "./src/${project}/getting-started/getting-started.md"

# About the device section

echo "---
zendesk:
  section_id:
  position: 20
  name: About the device
---
" > "./src/${project}/about-the-device/_section.md"

# About the device articles
echo "---
zendesk:
  article_id:
  name:  About the device
  position: 10
  labels: about-the-device
---" > "./src/${project}/about-the-device/about.md"

# FAQ section

echo "---
zendesk:
  section_id:
  position: 50
  name: FAQ - About the product
---
" > "./src/${project}/faq-about/_section.md"

# FAQ articles
echo "---
zendesk:
  article_id:
  name: Does it support Wi-Fi?
  position: 10
  labels: faq
---
" > "./src/${project}/faq-about/does-it-support-wi-fi.md"

# Resources section
echo "---
zendesk:
  section_id:
  position: 60
  name: Resources
---
" > "./src/${project}/resources/_section.md"

# Resources articles
echo "---
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

# Troubleshooting section
echo "---
zendesk:
  section_id:
  position: 40
  name: Troubleshooting
---
" > "./src/${project}/troubleshooting/_section.md"

# Troubleshooting articles
echo "---
zendesk:
  article_id:
  name: Enable debug logging
  position: 20
  labels: troubleshooting
---" > "./src/${project}/troubleshooting/enable-debug-logging.md"

end_ms=$(date +%s%3N)

elapsed_ms=$((end_ms - start_ms))

echo "Project structure for \"${project}\" created successfully in ${elapsed_ms} ms."