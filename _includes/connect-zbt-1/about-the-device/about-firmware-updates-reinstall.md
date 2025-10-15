

## Reinstalling the firmware on {{ productName }}

> **Note:** [Home Assistant SkyConnect](/hc/en-us/articles/26151953609117) and {{ productName }} use the same firmware. You can use the same firmware update process for both devices.

If you must reinstall the firmware on your {{ productName }} today, the following options are available:

- **For Thread:** The [OpenThread Border Router](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_openthread_border_router) add-on flashes the Thread firmware on startup. You can verify the add-on logs to see the output of the firmware check or potential firmware update.

- **For Zigbee:** You can use the [Silicon Labs Flasher](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_silabs_flasher) add-on. The add-on will flash the {{ productName }} and stop right after. Before starting the add-on:
  - Disable the [Zigbee Home Automation](https://my.home-assistant.io/redirect/integration/?domain=zha) integration or any add-on which might use the {{ productName }} at the point of flashing.
  - Start the add-on.

Verify the add-on logs to confirm successful flashing.

## Reinstalling the firmware using the Silicon Labs Web Flasher

> **Notice**
> Firmware update through web flasher is only available for Home Assistant SkyConnect devices and Home Assistant Connect&nbsp;ZBT-1 devices purchased after October 20, 2024.

If your Home Assistant installation has no add-ons available, you can install the latest firmware version for {{ productName }} directly from your browser over USB. To do this, follow these steps:

1. Open [the linked page](https://home-assistant-skyconnect.netlify.app/firmware-update/).
2. On the bottom of that page, select the **Update firmware** button.
3. Plug the {{ productName }} into your computer and select the firmware version you want to install.

To read more about the SL Web Tools, refer to this [blog post](https://www.home-assistant.io/blog/2023/02/08/state-of-matter-and-thread/#silabs-multi-flasher--sl-web-tools).
