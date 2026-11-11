---
zendesk:
  article_id: 40528961462941
  name: "Custom firmware and restoring factory firmware"
  position: 20
  labels: connect aux-2
---

## Flashing custom firmware

{% callout "important" %}

Firmware you build yourself is for personal use and isn't supported by Nabu Casa. Nabu Casa support can't help with custom configurations, including Grove sensors. While Connect AUX-2 runs your own firmware, it doesn't receive over-the-air firmware updates from Nabu Casa. To return to the supported firmware at any time, reinstall the factory firmware. See [Restoring the factory firmware](#restoring-the-factory-firmware).

{% endcallout %}

Home Assistant Connect AUX-2 uses an ESP32-S3 with an unlocked bootloader. It ships with firmware built on ESPHome, and you can flash your own custom firmware. The [firmware source](https://github.com/NabuCasa/aux-2) is the starting point. For building and distributing a custom build, see [Building ESPHome components](/hc/en-us/articles/40529049225117).

Custom firmware is optional.

Install your own firmware over USB the first time. The EN 18031 cybersecurity standard requires this.

## Restoring the factory firmware

To return to the factory firmware after running custom firmware, use the [web installer](https://firmware.nabucasa.com/install/aux-2/).
