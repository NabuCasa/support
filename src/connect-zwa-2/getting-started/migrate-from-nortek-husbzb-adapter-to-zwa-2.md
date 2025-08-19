---
zendesk:
  article_id: 29688968436765
  name: Migrating from a Nortek HUSBZB-1 adapter to Home Assistant Connect ZWA-2
  position: 42
  labels: connect zwa-2
---

Before you can migrate from a Nortek HUSBZB-1 adapter to Home Assistant Connect ZWA-2, you need to upgrade the device firmware. However, there is no (easy) way to update that device.

- Most likely, you need to set up a new network.

- If you are comfortable with soldering and have time and patience: some users have reported that they were able to upgrade the firmware of the Nortek HUSBZB-1 with [this procedure](https://community.hubitat.com/t/guide-nortek-husbzb-1-nvm-backup-restore-and-updating-z-wave-firmware/48012).
- Once you have upgraded the Nortek HUSBZB-1 adapter, follow the steps below to migrate the network.

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zwa-2/zwa-2-connect-to-green.png" " with the USB cable and a Home Assistant Green" %}
{% stepContent %}

- Have the Nortek HUSBZB-1 upgraded to the latest firmware version.
- Home Assistant smart home hub with a USB 2.0 port, for example, a Home Assistant Green.
- Have a Z-Wave network running on Home Assistant.
- Home Assistant Operating System with Home Assistant 2025.8 or newer installed on your smart home hub.
- Home Assistant Connect ZWA-2 with a USB-C to USB-A cable (included in the box).

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To migrate your existing Z-Wave network to Home Assistant Connect ZWA-2

{% include 'connect-zwa-2/migrate-z-wave-network.md' %}

## Related topics

- [Device overview](/hc/en-us/articles/28670192316189)
- [About Home Assistant Connect ZWA-2](/hc/en-us/articles/29190222644509)

### Prerequisites

- [Finding an installation location](/hc/en-us/articles/28670284336925)
- [Installing Home Assistant Connect ZWA-2](/hc/en-us/articles/28685750450205)

### Z-Wave integration documentation

- [Migrating your Z-Wave network to Home Assistant Connect ZWA-2](https://www.home-assistant.io/integrations/zwave_js/#migrating-a-z-wave-network-to-a-new-adapter)

### Migration

- [About radio frequency region and transmit power levels](/hc/en-us/articles/29081378073501)
- [Upgrading Nortec HUSBZB-1 firmware](https://community.hubitat.com/t/guide-nortek-husbzb-1-nvm-backup-restore-and-updating-z-wave-firmware/48012)