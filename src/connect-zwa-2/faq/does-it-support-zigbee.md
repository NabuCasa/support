---
zendesk:
  article_id: 29581959276573
  name: Does Home Assistant Connect ZWA-2 support Zigbee, Wi-Fi, Bluetooth, or Thread?
  position: 20
  labels: connect-zwa-2, supported protocols
---

Home Assistant Connect ZWA-2 is a Z-Wave adapter. It does not support Zigbee or Thread.

Wi-Fi and Bluetooth are available only with the experimental [Portable Z-Wave firmware](https://toolbox.openhomefoundation.org/home-assistant-connect-zwa-2/):

- **Wi-Fi**: The ZWA-2 connects to Home Assistant over Wi-Fi instead of USB, allowing placement anywhere in your home.
- **Bluetooth proxy**: When using Portable firmware, the ZWA-2 can also act as a Bluetooth proxy for Home Assistant. This is disabled by default and can be enabled from the device page in Home Assistant.

Portable firmware is experimental and not the standard configuration. Most users should use the default USB controller firmware.

## Related topics

- [Home Assistant Connect ZWA-2 product page](https://www.home-assistant.io/connect/zwa-2/)
- [Use ZWA-2 with Wi-Fi or PoE](/hc/en-us/articles/34864630493469)
