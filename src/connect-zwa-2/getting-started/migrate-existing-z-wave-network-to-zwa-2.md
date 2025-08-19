---
zendesk:
  article_id: 29529265751965
  name: Migrating an existing Z-Wave network to Home Assistant Connect ZWA-2
  position: 40
  labels: connect zwa-2
---

If you already have a Z-Wave network running with Home Assistant and another Z-Wave adapter, and you want to migrate to Home Assistant Connect ZWA-2, follow these steps.

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zwa-2/zwa-2-connect-to-green.png" " with the USB cable and a Home Assistant Green" %}
{% stepContent %}

- Depending on the adapter you are using, you need to upgrade the adapter firmware before you can start migration. Follow these steps:
  - [Migrating from a 500 series adapter to Home Assistant Connect ZWA-2](/hc/en-us/articles/29689016023069)
  - [Migrating from a Nortek HUSBZB-1 adapter](/hc/en-us/articles/29688968436765)
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
- [Migrating from a 500 series adapter to Home Assistant Connect ZWA-2](/hc/en-us/articles/29689016023069)
- [Migrating from a Nortek HUSBZB-1 adapter](/hc/en-us/articles/29688968436765)