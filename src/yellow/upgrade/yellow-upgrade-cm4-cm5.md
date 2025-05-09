---
zendesk:
  article_id: 25607960026397
  name: Migrating from Home Assistant Yellow Kit with CM4 to a CM5
  description: Upgrading a Home Assistant Yellow from a Raspberry Pi Compute Module 4 to a Raspberry Pi Compute Module 5
  position: 1
  labels: yellow, upgrade, migration
---

## Prerequisites

- Home Assistant Yellow
- Ethernet cable

Additionally, make sure you have the following items which are not part of the Kit

- Raspberry Pi Compute Module 5 (CM5)
- USB-C cable
- Heat sink: You can use the heat sink shipped with Yellow.
  - If you want, you can also use the Raspberry Pi Compute Module 5 Passive Cooler.
  - **Note**: the Raspberry Pi Compute Module 5 Active Cooler is not supported on Home Assistant Yellow.
    - There is no fan plug providing the required 5V and PWM signals.
- If you are using PoE, make sure your router or switch provides PoE on that port
- Optional: Power supply (12 V / 2 A, if PoE is not used)
- Flat nose pliers

  ![Image showing the Home Assistant Yellow, a Raspberry Pi Compute Module 5, Ethernet cable, power supply, a USB-C cable, and flat-nose pliers](/static/img/yellow/cm5_prereqs.jpg)

## Preparing the migration

{% include 'yellow/yellow-migration-to-cm5-prep.md' %}
    - Before creating a backup, make sure your CM5 eMMC has enough storage capacity:
      - Check how much disk space you've used under [**Settings** > **System** > **Storage**](https://my.home-assistant.io/redirect/storage/)
        - If this is larger than the eMMC, you need to reduce the size of your instance.

## Opening the case

{% include 'yellow/yellow-open-case-cm5.md' %}

## Removing the Raspberry Pi Compute Module 4

{% include 'yellow/yellow-remove-cm.md' %}

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

- [https://www.home-assistant.io/getting-started/onboarding/](https://www.home-assistant.io/getting-started/onboarding/)
- [Raspberry Pi software](https://www.raspberrypi.com/software/)
- [Windows installer of rpiboot](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)
- [rpiboot from source code](https://github.com/raspberrypi/usbboot?tab=readme-ov-file#building)