---
zendesk:
  article_id: 25608059150237
  name: Migrating from CM4 Lite with NVMe to CM5 Lite with NVMe
  description: Upgrading a Home Assistant Yellow from a Raspberry Pi Compute Module 4 with NVMe to a Raspberry Pi Compute Module 5 with NVMe
  position: 3
  labels: yellow, upgrade, migration, NVMe, CM4 Lite, CM5 Lite
---

# Prerequisites

- Home&nbsp;Assistant Yellow installation with NVMe SSD drive and CM4 Lite
- Ethernet cable

Additionally, make sure you have the following items which are not part of the Kit

- Raspberry Pi Compute Module 5 Lite
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

## Opening the case

{% include 'yellow/yellow-open-case-cm5.md' %}

## Removing the Raspberry Pi Compute Module 4

{% include 'yellow/yellow-remove-cm.md' %}

## Seating the Raspberry Pi Compute Module 5

**Notice**: Don't use screws to fix the module in place. The screws can damage the CM5 module.

{% include 'yellow/yellow-reseat-cm5.md' %}

## Reassembling your Home Assistant Yellow

{% include 'yellow/yellow-reassemble-case.md' %}

## Powering up and finishing the migration

{% include 'yellow/yellow-powerup-cm5nvme.md' %}

