---
zendesk:
  article_id: 25485061432093
  name: Reinstall the Home Assistant Operating System on Raspberry Pi CM5
  position: 5
  labels: yellow, troubleshooting
---

Note: It is very unlikely that reinstalling the Home Assistant OS is necessary. Before going through this procedure, make sure to use the built-in device wipe mechanism.

## Prerequisites

- Home Assistant Yellow with a Raspberry Pi Compute Module 5 installed
- Connected to the Internet
- USB-C cable
- [Reset the device](/hc/en-us/articles/25463622043165-Resetting-the-device)

![Image showing a Yellow, USB-C cable, and a Raspberry Pi Compute Module 5](/static/img/yellow/yellow_cm5_ucb-c.jpg)

## Opening the case

{% partial 'yellow/yellow-open-case-cm5.md' %}

## Running rpiboot

{% partial 'yellow/yellow-install-rpiboot.md' %}

## Installing Home Assistant Software on CM5

{% partial 'yellow/yellow-install-haos-cm5.md' %}

## Reassembling Home Assistant Yellow

{% partial 'yellow/yellow-reassemble-case.md' %}

## Setting up

{% partial 'yellow/yellow-setup-cm5.md' %}

## Related topics

- [Reset the device](/hc/en-us/articles/25463622043165-Resetting-the-device)
- [rpiboot Windows Installer from Raspberry Pi GitHub](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)
- [rpiboot for macOS and Linux from source code](https://github.com/raspberrypi/usbboot?tab=readme-ov-file#building)
- [RPI imager from https://www.raspberrypi.com/software/](https://www.raspberrypi.com/software/)
- [Onboarding Home Assistant](https://www.home-assistant.io/getting-started/onboarding/)
