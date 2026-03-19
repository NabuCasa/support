---
zendesk:
  article_id: 28685765309853
  position: 30
  name: Forming a new Z-Wave network with Home Assistant Connect ZWA-2
  labels: connect zwa-2
---

Before you can use Home Assistant Connect ZWA-2 with Home Assistant, you need to connect it to a smart home hub running Home Assistant. The following steps show you how to do this.

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zwa-2/zwa-2-connect-to-green.png" "Image showing the Assistant Connect ZWA-2 with the USB cable and a Home Assistant Green" %}
{% stepContent %}

- Home Assistant smart home hub with a USB 2.0 port, for example, a Home Assistant Green.
  - If you do not have Home Assistant installed on the hub yet, [follow these steps](https://www.home-assistant.io/installation/).
- Home Assistant 2025.8 or newer installed on your smart home hub.
- Home Assistant Connect ZWA-2 with a USB-C to USB-A cable (included in the box).

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To form a new Z-Wave network

{% steps %}
{% include 'connect-zwa-2/assemble-and-install.md' %}

{% step "Connecting Home Assistant Connect ZWA-2 to Home Assistant" %}
{% image "/static/img/connect-zwa-2/zwa-2-follow-z-wave-integration-docs.png" "Screenshot of Z-Wave integration documentation" %}
{% stepContent %}

- Follow the Z-Wave integration documentation on [connecting Home Assistant Connect ZWA-2 to Home Assistant](https://www.home-assistant.io/integrations/zwave_js/#setting-up-a-z-wave-js-server).

{% endstepContent %}
{% endstep %}

{% step "Check for interference" %}
{% image "/static/img/connect-zwa-2/zwa-2-signal-and-noise.png" "Screenshot of Z-Wave integration documentation" %}
{% stepContent %}

- You're all set, Home Assistant Connect ZWA-2 is connected to Home Assistant.
- To be sure your device is in a good location, follow the steps under [checking the distance to other transmitters to avoid interference](/hc/en-us/articles/28670741134365).

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Device overview](/hc/en-us/articles/28670192316189)
- [About Home Assistant Connect ZWA-2](/hc/en-us/articles/29190222644509)
- [Migrating an existing Z-Wave network to Home Assistant Connect ZWA-2](/hc/en-us/articles/29529265751965)

### Prerequisites

- [Finding an installation location](/hc/en-us/articles/28670284336925)
- [Installing Home Assistant Connect ZWA-2](/hc/en-us/articles/28685750450205)
- [Home Assistant installation documentation for different hubs](https://www.home-assistant.io/installation/)

### Z-Wave integration documentation

- [Connecting Home Assistant Connect ZWA-2 to Home Assistant (setting up a new Z-Wave JS server)](https://www.home-assistant.io/integrations/zwave_js/#setting-up-a-z-wave-js-server)