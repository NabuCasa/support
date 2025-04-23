---
noindex: true
zendesk:
  article_id: 25549332241949
  name: Adding an SSD to a Yellow with an existing Home Assistant installation
  description: How to add an NVMe M.2 SSD drive to a Home Assistant Yellow with an already existing Home Assistant installation
  position: 1
  labels: yellow, setup, SSD, NVMe
---

Step-by-step instructions on adding an NVMe M.2 SSD drive to your Home Assistant Yellow with an existing Home Assistant installation.

## Prerequisites

- Home Assistant Yellow, powered off
- Administrator rights on Home Assistant
- Additionally, make sure you have the following items

  - NVMe M.2 SSD drive
  - No. 1 hex screwdriver

  ![Home Assistant Yellow with Ethernet cable, NVMe M.2 SSD drive, and No. 1 hex screwdriver](/static/img/yellow/kit-poe-with-nvme.jpeg)

  ## Opening the case

{% partial 'yellow/yellow-open-case-cm5.md' %}

## Installing the NVMe drive

{% partial 'yellow/yellow-install-nvme-cm4.md' %}

## Reassembling your Home Assistant Yellow

{% partial 'yellow/yellow-reassemble-case.md' %}

## Moving the data disk

{% partial 'yellow/yellow-move-data-disk.md' %}

## Related topics

- [Using external data disk](https://www.home-assistant.io/common-tasks/os/#using-external-data-disk)
