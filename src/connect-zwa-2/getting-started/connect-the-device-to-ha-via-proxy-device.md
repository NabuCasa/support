---
zendesk:
  article_id: 29751691427741
  name: Using a proxy device to connect Home Assistant ZWA-2
  position: 49
  labels: connect-zwa-2
---

If you need to place Connect ZWA-2 far away from your Home Assistant system, you can run Z-Wave JS on another system and connect that to Home Assistant.

This allows you to plug Home Assistant Connect ZWA-2 in a location that is closer to your end

## Prerequisites

- A system that can act as proxy and fulfills the following requirements:
  - has an Ethernet connection (Wi-Fi will be less reliable) to your network
  - can run containers (for instance, a Raspberry Pi system running Docker)
  - Is located in a place where there is space to place Connect ZWA-2 in a vertical position.
- A Home Assistant smart home hub, for example, a Home Assistant Green.
  - If you do not have Home Assistant installed on the hub yet, [follow these steps](https://www.home-assistant.io/installation/).
- Home Assistant 2025.8 or newer installed on your smart home hub.
- Home Assistant Connect ZWA-2 with a USB-C to USB-A cable (included in the box).

## To connect Home Assistant ZWA-2 via a proxy device

1. [Make sure you find a good location](https://support.nabucasa.com/hc/en-us/articles/28670284336925) for Home Assistant Connect ZWA-2.
2. [Assemble it](https://support.nabucasa.com/hc/en-us/articles/28685750450205).
3. Plug your Connect ZWA-2 into that system via USB.
4. Install the Z-Wave JS UI container on this system.
5. Set up that Z-Wave JS UI system:
   1. Enable the **WS Server** and **mDNS** options.
   2. Note this system's IP address and server port (default: 3000).
6. It is also possible to migrate your existing Z-Wave network to this new system within the settings.
7. **Result**: The Z-Wave JS UI system should now be discovered by Home Assistant.
   - **Troubleshooting**:  if it is not discoverd, you can configure it manually.
     - On your Home Assistant system, go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/)
     - Add a Z-Wave hub using a **Custom installation method**.
     - Make sure to *uncheck* the **Use the Z-Wave Supervisor add-on** option.
     - Fill in the IP address of the Z-Wave JS UI system (for example `ws://IP-ADDRESS:3000`.
