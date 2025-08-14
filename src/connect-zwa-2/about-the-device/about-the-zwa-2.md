---
zendesk:
  article_id: 29190222644509
  name: About Home Assistant Connect ZWA-2
  position: 20
  labels: connect zwa-2
---


Home Assistant Connect ZWA-2 is a Z-Wave adapter that connects to your Home Assistant hub via USB. It allows Home Assistant to build a Z-Wave network via the included Z-Wave integration.

{% callout "important" %}

Home Assistant Connect ZWA-2 is not a standalone product.

- It was designed to run with Home Assistant running on a smart home hub (such as [Home Assistant Green](https://www.home-assistant.io/green/)) and the **Z-Wave JS** add-on.
  - You can run it without Home Assistant, in this case [extra steps are required](/hc/en-us/articles/29059418289821).
- One or more Z-Wave devices, such as switches, dimmers, or locks.
- **Optional**: [Home Assistant Companion app](https://companion.home-assistant.io/) installed on your smart phone.
  - Note: the app does not run Home Assistant. It connects to your existing Home Assistant instance, allowing you to interact with it remotely.

{% endcallout %}

![Rear view of Home Assistant Connect showing USB-C connector](/static/img/connect-zwa-2/zwa-2-rear-view.png)

## Device characteristics

- Home Assistant Connect ZWA-2 features an optimized, large antenna to reach devices where others can’t.
- Because Home Assistant Connect ZWA-2 can receive faint signals, communication is more reliable. This improves both network stability and battery life of end devices.
- Home Assistant Connect ZWA-2 supports both Z-Wave (mesh) and Z-Wave Long Range protocols via designated radio frequencies in all regions.
- Note that by default, the radio frequency of Home Assistant Connect ZWA-2 is set to
**EU Long Range**. For more information, read the section [about radio frequency and transmit power](/hc/en-us/articles/29081378073501).

## Key features

- Supported devices: Z-Wave 800 and older (including Z-Wave Plus and Plus V2), Z-Wave Long Range (only in EU and US).
- Supported features: Security 2 (S2), SmartStart, Over-the-Air (OTA) Firmware Updates, Over-the-Wire (OTW) firmware updates.
- Supported regions: All Z-Wave regions, including US, EU, and AU. Long Range support currently includes only the US and EU regions.
- Chips inside: Silicon Labs ZG23 (Z-Wave 800 series chip) and ESP32-S3 (USB-serial bridge).

## About Z-Wave

- Z-Wave uses a lower radio frequency (~900&nbsp;MHz) than Wi-Fi, Zigbee, or Thread. Lower frequencies tend to have better penetration through thick walls and will travel greater distances.
- Z-Wave stays out of the way of Wi-Fi and Bluetooth, meaning less congestion and interference.
- Z-Wave (mesh) and Z-Wave Long Range each have their own benefits and use cases.
- Z-Wave Long Range doesn’t support a mesh network but allows for larger deployments (thousands of devices) and better range, allowing more distant devices.

## Related topics

- [Device overview](/hc/en-us/articles/28670192316189)
- [Status colors (LED)](/hc/en-us/articles/28670086157853)
- [Datasheet](/hc/en-us/articles/28689873798173)
- [Product page](https://www.home-assistant.io/connect/zwa-2/)

### Getting started

- [Forming a new Z-Wave network with Home Assistant Connect ZWA-2 and Home Assistant](/hc/en-us/articles/28685765309853)
- [Migrating an existing Z-Wave network to Home Assistant Connect ZWA-2](/hc/en-us/articles/29529265751965)
- [Using Home Assistant Connect ZWA-2 without Home Assistant](/hc/en-us/articles/29447110878493)
- [Overriding the radio frequency region](/hc/en-us/articles/29059418289821)
- [About radio frequency and transmit power](/hc/en-us/articles/29081378073501)

### Related Home Assistant documentation

- [Z-Wave integration documentation](https://www.home-assistant.io/integrations/zwave_js/)
- [Home Assistant user documentation](https://www.home-assistant.io/)
- [Installing Home Assistant on a smart home hub](https://www.home-assistant.io/installation/)
- [Home Assistant Companion app](https://companion.home-assistant.io/)