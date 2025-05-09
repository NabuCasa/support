---
zendesk:
  article_id: 25606333033501
  name: Home Assistant Yellow Kit with CM5
  description: Getting started with a Home Assistant Yellow Kit with a Raspberry Pi Compute Module 5
  position: 3
  labels: yellow, getting started, kit, CM5
---

## Prerequisites

- Home Assistant Yellow
- Heat sink assembly bag
- Ethernet cable
- Power supply (12 V / 2 A) (Not included if you have a PoE kit)

Additionally, make sure you have the following items which are not part of the Kit

- Raspberry Pi Compute Module 5 (CM5)
- USB-C cable
- If you are using PoE, make sure your router or switch provides PoE on that port
- **Notice**: Don't use screws to fix the module in place. The screws can damage the CM5 module.

  ![Image showing the Home Assistant Yellow with a Raspberry Pi Compute Module 5, Heat sink assembly bag, Ethernet cable, power supply, a USB flash drive, and an NVMe M.2 SSD drive](/static/img/yellow/cm5_kit.jpg)

## Opening the case

{% include 'yellow/yellow-open-case-cm5.md' %}

## Seating the Raspberry Pi Compute Module 5

**Notice**: Don't use screws to fix the module in place. The screws can damage the CM5 module.

{% include 'yellow/yellow-reseat-cm5.md' %}

## Installing and running rpiboot

{% include 'yellow/yellow-install-rpiboot.md' %}

## Installing the Home Assistant OS using Raspberry Pi Imager

{% include 'yellow/yellow-install-haos-cm5.md' %}

## Reassembling your Home Assistant Yellow

{% include 'yellow/yellow-reassemble-case.md' %}

## Setting up

{% include 'yellow/yellow-setup-cm5.md' %}

## Related topics

- [Onboarding Home Assistant](https://www.home-assistant.io/getting-started/onboarding/)
- [Raspberry Pi software](https://www.raspberrypi.com/software/)
- [Windows installer of rpiboot](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)
- [rpiboot from source code](https://github.com/raspberrypi/usbboot?tab=readme-ov-file#building)