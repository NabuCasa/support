---
zendesk:
  article_id: 26123541989661
  name: Forming a new Zigbee network
  position: 1
  labels: connect zbt-1, getting started
---

## Prerequisites

- Home Assistant installed on your board (for example on a Home Assistant Green, Home Assistant Yellow or on a Raspberry Pi) with the latest updates installed.
- Home Assistant Connect&nbsp;ZBT-1 dongle and USB extension cable.

  ![Image showing the Assistant Connect&nbsp;ZBT-1 with the USB extension cable in the original packaging](/static/img/connect-zbt-1/connect-zbt-1-boxed-01.jpg)

## To form a new Zigbee network

1. Plugging the extension cable into Home Assistant Connect&nbsp;ZBT-1.
   - Plug the Home Assistant Connect&nbsp;ZBT-1 into the USB extension cable.
   - Plug the extension cable into your Home Assistant instance.
   - If you are using the standalone [Home Assistant Container](https://www.home-assistant.io/docs/glossary/#home-assistant-container) installation method, make sure Connect ZBT-1 is [mapped to the container](https://www.home-assistant.io/installation/linux#exposing-devices).
   - **Important:** USB 3.0 ports and USB 3.0 drives can cause interference with 2.4 GHz protocols, including the ones provided by Home Assistant Connect ZBT-1. It is important to use the USB extension cable and to position the Home Assistant Connect ZBT-1 away from possible interference sources.
    This [video](/hc/en-us/articles/26124431414557) shows the effect of interference.

    ![Plug the extension cable into Connect ZBT-1](/static/img/connect-zbt-1/connect-zbt-1-raspi-01.jpg)

2. Locating the Home Assistant Connect&nbsp;ZBT-1 integration.
   - Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
   - Connect ZBT-1 should now have been discovered.
   - Select **Configure**.

   ![Locate the Connect ZBT-1 integration](/static/img/connect-zbt-1/connect-zbt-1-discovered-01.png)

3. Picking your firmware.
   - In the dialog, select **Zigbee**.

   ![Pick your firmware](/static/img/connect-zbt-1/connect-zbt-1_pick_firmware.png)

4. Completing the Zigbee setup.
   - Select **Submit** to complete the setup of the Home Assistant Connect&nbsp;ZBT-1 integration.
   - Your Connect ZBT-1 is now a Zigbee coordinator.

   ![Complete the Zigbee setup](/static/img/connect-zbt-1/connect-zbt-1_complete-zigbee-setup.png)

5. Configuring the Zigbee Home Automation integration.
   - Connect ZBT-1 will be shown in your **Zigbee Home Automation integration**.
   - Select **Configure**.
   - To confirm, select **Submit**.

   ![Configure the Zigbee Home Automation integration](/static/img/connect-zbt-1/connect-zbt-1_zha-discovered.png)

6. Creating a network.
   - Select **Create network**.

   ![Create a network](/static/img/connect-zbt-1/connect-zbt-1_create-network.png)

7. Adding devices to an area.
   - Once the network has been set up, add the Zigbee coordinator to an area.
   - Select **Finish**.
     - Your Zigbee devices are now added to your Zigbee network.

   ![Add devices to area](/static/img/connect-zbt-1/connect-zbt-1-discovered-04.png)

8. Adding Zigbee devices.
   - Select **1 device** and select **Add devices via this device**. ZHA will now search for Zigbee devices in pairing mode.
   - Put your Zigbee device into pairing mode.
   - **Warning:** If Zigbee Home Automation (ZHA) can't find your Zigbee device, make sure that Home Assistant Connect&nbsp;ZBT-1 does not suffer from interference. Use the extension cable and move the Connect&nbsp;ZBT-1 further away from potential devices which can cause interference.

   ![Add Zigbee devices](/static/img/connect-zbt-1/connect-zbt-1-discovered-05.png)

## Related topics

- [Home Assistant Container installation](https://www.home-assistant.io/docs/glossary/#home-assistant-container)
- [Mapping devices to the container](https://www.home-assistant.io/installation/linux#exposing-devices)