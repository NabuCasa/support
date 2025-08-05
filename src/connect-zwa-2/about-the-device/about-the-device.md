---
zendesk:
  article_id: 29190222644509
  name: About Home Assistant Connect ZWA-2
  position: 20
  labels: connect zwa-2
---


Home Assistant Connect ZWA-2 is a Z-Wave adapter that connects to your Home Assistant hub via USB. It allows Home Assistant to build a Z-Wave network via the included Z-Wave integration.

{% callout "important" %}

Home Assistant Connect ZWA-2 is not a standalone product. It requires the following:

- Home Assistant installed and running on a smart home hub (such as [Home Assistant Green](https://www.home-assistant.io/green/)).
- One or more Z-Wave devices, such as switches, dimmers, or locks.
- **Optional**: [Home Assistant Companion app](https://companion.home-assistant.io/) installed on your smart phone.
  - Note: the app does not run Home Assistant itself; it instead connects to your existing Home Assistant instance, allowing you to interact with it remotely.

{% endcallout %}

## Device characteristics

- Home Assistant Connect ZWA-2 features an optimized, large antenna to reach devices where others can’t.
- Because Home Assistant Connect ZWA-2 can receive very faint signals, communication is more reliable. This improves both network stability and battery life of end devices.
- Home Assistant Connect ZWA-2 supports both Z-Wave (mesh) and Z-Wave Long Range protocols via designated radio frequencies in all regions.
- Note that by default, the radio frequency of Home Assistant Connect ZWA-2 is set to
**EU Long Range**. For more information, read the section [about radio frequency and transmit power](28685746723613).

## About Z-Wave

- Z-Wave uses a lower radio frequency (~900&nbsp;MHz) than Wi-Fi, Zigbee, or Thread. Lower frequencies tend to have better penetration through thick walls and will travel greater distances.
- Z-Wave stays out of the way of Wi-Fi and Bluetooth, meaning less congestion and interference.
- Z-Wave (mesh) and Z-Wave Long Range each have their own benefits and use cases.
- Z-Wave Long Range doesn’t support a mesh network but allows for larger deployments (thousands of devices) and better range, allowing more distant devices.

## Related topics

- [Device overview](/hc/en-us/articles/28670192316189)
- [Status colors (LED)](/hc/en-us/articles/28670086157853)
- [Z-Wave integration documentation](https://www.home-assistant.io/integrations/zwave_js/)
- [Home Assistant Green](https://www.home-assistant.io/green/)
- [Home Assistant user documentation](https://www.home-assistant.io/)
- [Installing Home Assistant on a smart home hub](https://www.home-assistant.io/installation/)
- [Home Assistant Companion app](https://companion.home-assistant.io/)