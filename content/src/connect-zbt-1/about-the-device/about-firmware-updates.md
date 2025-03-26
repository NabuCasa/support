---
zendesk:
  article_id: 26124447269917
  name: Firmware updates for Connect ZBT-1
  position: 2
  labels: connect zbt-1, about the device, firmware
---

The Connect ZBT-1 ships with a full-fledged Zigbee firmware. *At this point, there are no known issues with the factory-flashed firmware.*

The Nabu Casa team is working on integrating firmware updates for Connect ZBT-1 directly into Home Assistant. Update notifications for Connect ZBT-1 will be available just like any other updates supported by Home Assistant. If you have a working Zigbee or Thread setup today, it is recommended to wait until the new update system is introduced, which is expected to arrive in early 2025.

## Reinstalling the firmware on Home Assistant Connect ZBT-1

> **Note:** [Home Assistant SkyConnect](https://www.home-assistant.io/faq/#what-is-the-difference-between-home-assistant-skyconnect-and-connect-zbt-1) and Connect ZBT-1 use the same firmware. You can use the same firmware update process for both devices.

If you must reinstall the firmware on your Connect ZBT-1 today, the following options are available:

- **For Thread:** The [OpenThread Border Router](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_openthread_border_router) add-on flashes the Thread firmware on startup. You can verify the add-on logs to see the output of the firmware check or potential firmware update.

- **For Zigbee:** You can use the [Silicon Labs Flasher](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_silabs_flasher) add-on. The add-on will flash the Connect ZBT-1 and stop right after. Before starting the add-on:
  - Disable the [Zigbee Home Automation](https://my.home-assistant.io/redirect/integration/?domain=zha) integration or any add-on which might use the Connect ZBT-1 at the point of flashing.
  - Start the add-on.

Verify the add-on logs to confirm successful flashing.

## Reflash using the Silicon Labs Web Flasher

> **Notice**
> Firmware update through web flasher is only available for Home Assistant SkyConnect devices and Home Assistant ZBT-1 devices purchased after October 20, 2024.

If your Home Assistant installation has no add-ons available, you can use the web flasher below to install the latest firmware version for Home Assistant Connect ZBT-1 directly from your browser over USB. Plug in your Connect ZBT-1 to your computer and select the firmware version you want to install.

To read more about the SL Web Tools, refer to this [blog post](https://www.home-assistant.io/blog/2023/02/08/state-of-matter-and-thread/#silabs-multi-flasher--sl-web-tools).

<div>
<nabucasa-zigbee-flasher manifest="/firmwares/manifest.json">
  <span slot="button">Update Firmware</span>
</nabucasa-zigbee-flasher>
    <script
      type="module"
      src="https://unpkg.com/@nabucasa/sl-web-tools@0.10.1/dist/web/nabucasa-zigbee-flasher.js?module"
    ></script>
  </div>

## Related topics

- [Blog post on SL Web Tools](https://www.home-assistant.io/blog/2023/02/08/state-of-matter-and-thread/#silabs-multi-flasher--sl-web-tools)