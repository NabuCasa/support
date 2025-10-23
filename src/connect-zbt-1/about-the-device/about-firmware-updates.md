---
zendesk:
  article_id: 26124447269917
  name: Firmware updates for Connect ZBT-1
  position: 2
  labels: connect zbt-1, about the device, firmware
productName: "Home Assistant Connect&nbsp;ZBT-1"
---

The {{ productName }} ships with a full-fledged Zigbee firmware. *At this point, there are no known issues with the factory-flashed firmware.*

Firmware updates for the {{ productName }} are natively supported in Home Assistant 2025.4 and newer if you are running the {% abbr "ZHA" %} integration or {% abbr "OTBR" %}:

![Screenshot of update notification](/static/img/connect-zbt-1/connect-zbt-1_firmware_update_notification.png)

## Reinstalling the firmware on {{ productName }}

> **Note:** [Home Assistant SkyConnect](/hc/en-us/articles/26151953609117) and {{ productName }} use the same firmware. You can use the same firmware update process for both devices.

If you must reinstall the firmware on your Home Assistant Connect&nbsp;ZBT-1 today, the following options are available:

- **For Thread:** The [OpenThread Border Router](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_openthread_border_router) add-on flashes the Thread firmware on startup. You can verify the add-on logs to see the output of the firmware check or potential firmware update.

- **For Zigbee:** You can use the [Silicon Labs Flasher](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_silabs_flasher) add-on. The add-on will flash the Home Assistant Connect&nbsp;ZBT-1 and stop right after. Before starting the add-on:
  - Disable the [Zigbee Home Automation](https://my.home-assistant.io/redirect/integration/?domain=zha) integration or any add-on which might use the {{ productName }} at the point of flashing.
  - Start the add-on.

Verify the add-on logs to confirm successful flashing.

## Reflash using the Web Flasher

> **Notice**
> Firmware update through web flasher is only available for devices purchased after October 20, 2024.

If your Home Assistant installation has no add-ons available, you can install the latest firmware version for {{ productName }} directly from your browser over USB. To do this, follow these steps:

1. On your computer, open a Chromium-based browser, such as Google Chrome or Microsoft Edge.
2. Open [the toolbox website](https://toolbox.openhomefoundation.org/).
3. Go to **{{ productName }}** > **Install firmware** and select the **Install firmware** button.
4. Plug in your {{ productName }} to your computer and select the firmware version you want to install.

## Related topics

- [Open Home Foundation Toolbox](https://toolbox.openhomefoundation.org/zbt1/install)