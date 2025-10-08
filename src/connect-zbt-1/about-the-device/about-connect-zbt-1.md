---
zendesk:
  article_id: 30878291112349
  name: About Home Assistant Connect ZBT-1
  position: 1
  labels: connect zbt-1, about the device
---

[Home Assistant Connect ZBT-1](https://www.home-assistant.io/connectzbt1) is a Zigbee and Thread adapter. It was designed specifically to work with Home Assistant. It connects to your Home Assistant system via USB, allowing it to build either a Zigbee or a Thread network via Home Assistant's built-in Zigbee or Thread integrations.

{% callout "important" %}

Home Assistant Connect ZBT-1 is not a standalone product.

- It requires Home Assistant installed on a smart home hub (such as [Home Assistant Green](https://www.home-assistant.io/green/)).
- It requires devices that are Zigbee- or Thread-capable.
- **Optional**: [Home Assistant Companion app](https://companion.home-assistant.io/) installed on your smart phone.
  - Note: the app does not run Home Assistant. It connects to your existing Home Assistant instance, allowing you to interact with it remotely.

{% endcallout %}

A few device characteristics are listed below:

- [Home Assistant Connect ZBT-1](https://www.home-assistant.io/connectzbt1) supports either Zigbee or Thread.
  - You can choose during setup and also switch later, if needed.
  - Running Zigbee and Thread at the same time on one adapter is not supported.
- Home Assistant Connect ZBT-1 was formerly known as Home Assistant SkyConnect.
  - Despite the new name and look, they have the exact same hardware, capability, and support.
- You can run 2 different Zigbee solutions in Home Assistant: ZHA and Zigbee2MQTT
  - You can run another adapter with a deCONZ or Zigbee2MQTT add-on alongside a Home Assistant Connect&nbsp;ZBT-1 with [Zigbee Home Automation](https://www.home-assistant.io/integrations/zha/).
- You cannot run 2 Home Assistant Connect ZBT-1 adapters with the Zigbee Home Automation integration at once in Home Assistant.
  - The Zigbee Home Automation integration is single instance only.
- Home Assistant Connect ZBT-1 does not support Bluetooth or Z-Wave.

## Related topics

- [Home Assistant Connect ZBT-1](https://www.home-assistant.io/connectzbt1)
- [Getting started: Forming a new Zigbee network](/hc/en-us/articles/26123541989661)
- [Getting started: Migrating an existing Zigbee network](/hc/en-us/articles/26123655295261)
- [Switching from Zigbee to Thread](/hc/en-us/articles/26124710072861)

### Related Home Assistant documentation

- [Zigbee Home Automation integration documentation](https://www.home-assistant.io/integrations/zha/)
- [Thread integration documentation](https://www.home-assistant.io/integrations/thread/)
- [Home Assistant user documentation](https://www.home-assistant.io/)
- [Installing Home Assistant on a smart home hub](https://www.home-assistant.io/installation/)
- [Home Assistant Companion app](https://companion.home-assistant.io/)
- [Home Assistant Green](https://www.home-assistant.io/green/)