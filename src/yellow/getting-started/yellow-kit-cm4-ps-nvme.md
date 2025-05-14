---
zendesk:
  article_id: 25298668266269
  name: Home Assistant Yellow Kit with CM4 and optional NVMe
  description: Home Assistant Yellow Kit with a Raspberry Pi Compute Module 4, and NVMe.
  position: 3
  labels: yellow, getting started, kit, CM4, NVMe
---

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/yellow/kit-std-with-nvme.jpeg" "Image showing the Home Assistant Yellow with a Raspberry Pi Compute Module 4, Heat sink assembly bag, Ethernet cable, power supply, a USB flash drive, and an NVMe M.2 SSD drive" %}
{% stepContent %}

- Home Assistant Yellow
- Heat sink assembly bag
- Ethernet cable
- Power supply (12 V / 2 A) (Not included if you have a PoE kit)

Additionally, make sure you have the following items which are not part of the Kit

- Raspberry Pi Compute Module 4 (CM4)
- USB flash drive
- Optional: NVMe M.2 SSD drive
- No. 1 hex screwdriver

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## Opening the case

{% include 'yellow/yellow-open-case-cm4.md' %}

## Installing the Raspberry Pi Compute Module 4

{% include 'yellow/yellow-install-cm4.md' %}

## Optional: Installing the NVMe drive

{% include 'yellow/yellow-install-nvme-cm4.md' %}

## Reassembling your Home Assistant Yellow

{% include 'yellow/yellow-reassemble-case.md' %}

## Installing Home Assistant Software on Kit

{% include 'yellow/yellow-install-haos-cm4.md' %}

## If you have an NVMe: Moving the data disk

{% include 'yellow/yellow-move-data-disk.md' %}