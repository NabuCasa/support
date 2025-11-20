---
zendesk:
  article_id: 31313065259421
  name:  About Home Assistant Connect ZBT-2
  position: 10
  labels: connect-zbt-2, about-the-device
productName: "Home Assistant Connect&nbsp;ZBT-2"
---

[{{ productName }}](https://www.home-assistant.io/connect/zbt-2/) is a Zigbee or Thread adapter designed specifically to work with Home Assistant. It connects to your Home Assistant smart home hub via USB, allowing it to build either a Zigbee or a Thread network via Home Assistant's built-in Zigbee or Thread integrations.

{% callout "important" %}

{{ productName }} is not a standalone product.

- It requires Home Assistant installed on a smart home hub (such as [Home Assistant Green](https://www.home-assistant.io/green/)).
- It requires devices that are Zigbee- or Thread-capable.
- **Optional**: [Home Assistant Companion app](https://companion.home-assistant.io/) installed on your smart phone.
  - Note: the app does not run Home Assistant. It connects to your existing Home Assistant instance, allowing you to interact with it remotely.

{% endcallout %}

## Device characteristics

A few device characteristics are listed below:

- [{{ productName }}](https://www.home-assistant.io/connect/zbt-2/) supports either the Zigbee or Thread protocol.
  - You can choose the protocol during setup and also switch later, if needed.
  - Running Zigbee and Thread at the same time on the same adapter is not supported.
- {{ productName }} does not support Bluetooth or Z-Wave.
- Frequency band: 2.4 GHz
- Processors used: Silicon Labs MG24 (running either Zigbee 3.0 or Thread firmware) and ESP32-S3 (USB-serial bridge).
- Supports ZHA, Zigbee2MQTT, and OpenThread Border Router.
- Hardware and software are open source. The device is easy to open (no clips or glue), with accessible pads and pins.

## Compatibility

- Home Assistant supports 2 Zigbee solutions:
  - [Zigbee Home Automation](https://www.home-assistant.io/integrations/zha/)
  - [Zigbee2MQTT](https://www.zigbee2mqtt.io/)
- You can run another adapter with the deCONZ or Zigbee2MQTT add-on alongside a {{ productName }} with Zigbee Home Automation.
- You cannot run 2 {{ productName }} adapters with the Zigbee Home Automation integration at once in Home Assistant.
  - The Zigbee Home Automation integration is single instance only.

## Differences to Home Assistant Connect&nbsp;ZBT-1

Home Assistant Connect&nbsp;ZBT-1 (formerly known as SkyConnect) was Nabu Casa's first Zigbee/Thread adapter released in 2022. It is now discontinued and replaced with Connect ZBT-2. Here is a short comparison between the two generations of devices.

| Feature            | Connect ZBT-1 </br> (First-generation Connect platform) | Connect ZBT-2 </br> (Second-generation Connect platform)                          |
| :----------------- | :------------------------------------------------------ | :-------------------------------------------------------------------------------- |
| Antenna            | Small and internal                                      | Highly optimized antenna and base                                                 |
| Transmit           | Maximized for the protocol                              | Maximized for the protocol                                                        |
| Speed (Baudrate)   | 115200                                                  | 460800 - consistently improves device responsiveness                              |
| Zigbee/Thread Chip | Silicon Labs MG21                                       | Silicon Labs MG24 - faster operation and sensitivity for weak signals             |
| USB chip           | Silicon Labs CP2102N - great for USB                    | ESP32-S3 - great for USB and expandable                                           |
| Ease of modding    | Hard to open, easy to flash firmware                    | Easy to open (no clips or glue, exposed pins and pads) and easy to flash firmware |

## Related topics

- [{{ productName }} product page](https://www.home-assistant.io/connect/zbt-2/)
- [{{ productName }} device overview](/hc/en-us/articles/31369010717213)
- [{{ productName }} status colors (LED)](/hc/en-us/articles/31368700350109)
- [{{ productName }} datasheet](/hc/en-us/articles/31260229217821)

### Getting started with {{ productName }}

- [Getting started: Forming a new Zigbee network](/hc/en-us/articles/29400591254301)
- [Getting started: Migrating an existing Zigbee network](/hc/en-us/articles/29400665034397)
- [Getting started: Forming a new Thread network](/hc/en-us/articles/31347105826077)
- [Switching from Zigbee to Thread](/hc/en-us/articles/31347057208989)

### Related Home Assistant documentation

- [Zigbee Home Automation integration documentation](https://www.home-assistant.io/integrations/zha/)
- [Thread integration documentation](https://www.home-assistant.io/integrations/thread/)
- [Home Assistant user documentation](https://www.home-assistant.io/docs/)
- [Installing Home Assistant on a smart home hub](https://www.home-assistant.io/installation/)
- [Home Assistant Companion app](https://companion.home-assistant.io/)
- [Home Assistant Green](https://www.home-assistant.io/green/)
