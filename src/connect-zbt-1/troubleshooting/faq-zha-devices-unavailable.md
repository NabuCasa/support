---
zendesk:
  article_id: 26125387134877
  name: Some of my Zigbee Home Automation (ZHA) devices are unavailable
  position: 4
  labels: connect zbt-1, troubleshooting
---

## Symptom

Some of my Zigbee Home Automation (ZHA) devices are now shown as unavailable or have suddenly stopped working.

## Resolution

1. Refresh your browser page (Ctrl+Shift+R).
2. Power cycle the device.
3. Ensure you added the device to your network in its final position in your home and not just near the coordinator.
   - Many devices will maintain a weak connection to the router they first joined through instead of picking a new one nearby.
4. When adding new devices, add router devices before adding end devices.
   - Battery-powered devices are end devices.
   - Mains-powered devices are more likely to be router devices.
5. Make sure you have a few router devices distributed over the different areas of your home (depending on the size of your home).
6. End devices select a router when joining the network. This connection is not static. Sometimes the end device selects a router device that is far away or has a bad connection for other reasons. To force a device to connect to a router device nearby, perform the following steps:
   1. Under [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/), in the ZHA integration, select **X devices**.
   2. Select the router device closest to your end device.
   3. Select **Add devices via this device**.
      ![Add device via this device](/static/img/connect-zbt-1/zha-add-device-via-this.png)
   4. Set your end device into pairing mode.
      - The end device should now be connected to the selected router device.
7. Check the [best practices to avoid pairing issues with Zigbee devices](https://www.home-assistant.io/integrations/zha/#best-practices-to-avoid-pairingconnection-difficulties).

## Related topics

- [Best practices to avoid pairing issues with Zigbee devices](https://www.home-assistant.io/integrations/zha/#best-practices-to-avoid-pairingconnection-difficulties)
