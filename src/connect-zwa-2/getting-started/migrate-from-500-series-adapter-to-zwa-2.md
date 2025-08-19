---
zendesk:
  article_id: 29689016023069
  name: Migrating from a 500 series adapter to Home Assistant Connect ZWA-2
  position: 41
  labels: connect zwa-2
---

If you already have a Z-Wave network running with Home Assistant on a 500 series Z-Wave adapter, and you want to migrate to Home Assistant Connect ZWA-2, follow these steps.

{% callout "important" %}

- Before starting migration, upgrade the 500 series Z-Wave adapter firmware to SDK 6.61+.
  - Check the documentation of your device to see if and how it can be updated.
    - [Steps to update Aeotec Z-Stick 5](https://aeotec.freshdesk.com/support/solutions/articles/6000252294-z-stick-gen5-v1-02-firmware-update).
- Once you have upgraded the firmware, follow the steps below to migrate the network.

{% endcallout %}

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zwa-2/zwa-2-connect-to-green.png" " with the USB cable and a Home Assistant Green" %}
{% stepContent %}

- Have the 500 series Z-Wave adapter firmware upgraded to SDK 6.61+.
- Home Assistant smart home hub with a USB 2.0 port, for example, a Home Assistant Green.
- Have a Z-Wave network running on Home Assistant.
- Home Assistant 2025.8 or newer installed on your smart home hub.
- Home Assistant Connect ZWA-2 with a USB-C to USB-A cable (included in the box).

{% endstepContent %}
{% endprereq %}
{% endsteps %}


If you migrate from one of these devices, follow the device specific steps:

## To migrate your existing Z-Wave network to Home Assistant Connect ZWA-2

{% include 'connect-zwa-2/migrate-z-wave-network.md' %}

## Related topics

- [Device overview](/hc/en-us/articles/28670192316189)
- [About Home Assistant Connect ZWA-2](/hc/en-us/articles/29190222644509)

### Prerequisites

- [Steps to update Aeotec Z-Stick 5](https://aeotec.freshdesk.com/support/solutions/articles/6000252294-z-stick-gen5-v1-02-firmware-update)
- [Finding an installation location](/hc/en-us/articles/28670284336925)
- [Installing Home Assistant Connect ZWA-2](/hc/en-us/articles/28685750450205)

### Z-Wave integration documentation

- [Migrating your Z-Wave network to Home Assistant Connect ZWA-2](https://www.home-assistant.io/integrations/zwave_js/#migrating-a-z-wave-network-to-a-new-adapter)

### Migration

- [About radio frequency region and transmit power levels](/hc/en-us/articles/29081378073501)