---
zendesk:
  article_id: 25608040264093
  name: Migrating from CM4 with NVMe to CM5 with NVMe
  description: Upgrading a Home Assistant Yellow from a Raspberry Pi Compute Module 4 with NVMe to a Raspberry Pi Compute Module 5 with NVMe
  position: 2
  labels: yellow, upgrade, migration, NVMe
---

# Prerequisites

- Home&nbsp;Assistant Yellow installation with NVMe SSD drive and CM4
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

{% partial 'yellow/yellow-migration-to-cm5-prep.md' %}

## Opening the case

{% partial 'yellow/yellow-open-case-cm5.md' %}

## Removing the Raspberry Pi Compute Module 4

{% partial 'yellow/yellow-remove-cm.md' %}

## Seating the Raspberry Pi Compute Module 5

**Notice**: Don't use screws to fix the module in place. The screws can damage the CM5 module.

{% partial 'yellow/yellow-reseat-cm5.md' %}

## Installing and running rpiboot

{% partial 'yellow/yellow-install-rpiboot.md' %}

## Installing the Home Assistant OS using Raspberry Pi Imager

{% partial 'yellow/yellow-install-haos-cm5.md' %}

## Reassembling your Home Assistant Yellow

{% partial 'yellow/yellow-reassemble-case.md' %}

## Powering up and finishing the migration

{% partial 'yellow/yellow-powerup-cm5nvme.md' %}

## Related topics

- [Raspberry Pi software](https://www.raspberrypi.com/software/)
- [Windows installer of rpiboot](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)
- [rpiboot from source code](https://github.com/raspberrypi/usbboot?tab=readme-ov-file#building)