---
zendesk:
  article_id: 29751691427741
  name: Using a proxy device to connect Home Assistant Connect ZWA-2
  position: 80
  labels: connect-zwa-2
---

If you need to place Connect ZWA-2 far away from your Home Assistant system, you can run Z-Wave JS on another system and connect that to Home Assistant.

This allows you to plug Home Assistant Connect ZWA-2 in a location that is closer to your end devices.

## Prerequisites

- A system that can act as a proxy and fulfills the following requirements:
  - has an Ethernet connection (Wi-Fi will be less reliable) to your network.
  - has a free USB-A port.
  - can run containers (for instance, a Raspberry Pi system with Docker installed).
  - is located in a place where there is space to place Connect ZWA-2 so that the antenna is in a vertical position.
- A Home Assistant smart home hub, for example, a Home Assistant Green.
  - If you do not have Home Assistant installed on the hub yet, [follow these steps](https://www.home-assistant.io/installation/).
- Home Assistant 2025.8 or newer installed on your smart home hub.
- Home Assistant Connect ZWA-2 with a USB-C to USB-A cable (included in the box).

## To connect Home Assistant ZWA-2 via a proxy device

1. [Make sure you find a good location](/hc/en-us/articles/28670284336925) for Home Assistant Connect ZWA-2.
2. [Assemble it](/hc/en-us/articles/28685750450205).
3. Plug your Connect ZWA-2 into that system via USB.
4. [Install the Z-Wave JS UI container](https://zwave-js.github.io/zwave-js-ui/#/getting-started/docker) on this system.
5. [Set up that Z-Wave JS UI system](https://zwave-js.github.io/zwave-js-ui/#/usage/setup?id=setup):
   1. Enable the **WS Server** and **mDNS** options.
   2. Note this system's IP address and server port (default: 3000).
6. **Option**: It is also possible to migrate your existing Z-Wave network to this new system [within the settings](https://community.home-assistant.io/t/switching-z-wave-js-addons-with-minimal-downtime-z-wave-js-official-to-z-wave-js-ui-community/409904).
7. **Result**: The Z-Wave JS UI system should now be discovered by Home Assistant.
   - **Troubleshooting**:  If it is not discovered, you can configure it manually.
     - On your Home Assistant system, go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/)
     - Add a Z-Wave hub using a **Custom installation method**.
     - Make sure to *uncheck* the **Use the Z-Wave Supervisor app** option.
     - Fill in the IP address of the Z-Wave JS UI system (for example `ws://IP-ADDRESS:3000`).

## Related topics

- [Finding a good installation location](/hc/en-us/articles/28670284336925)
- [Assemble Connect ZWA-2](/hc/en-us/articles/28685750450205)
- [Installing a Z-Wave JS UI container](https://zwave-js.github.io/zwave-js-ui/#/getting-started/docker)
- [Setting up a Z-Wave JS UI system](https://zwave-js.github.io/zwave-js-ui/#/usage/setup?id=setup)
- [Z-Wave JS settings](https://community.home-assistant.io/t/switching-z-wave-js-addons-with-minimal-downtime-z-wave-js-official-to-z-wave-js-ui-community/409904)
