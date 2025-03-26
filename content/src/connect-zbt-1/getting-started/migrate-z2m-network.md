---
zendesk:
  article_id: 26123745634845
  name: Migrate a Zigbee2MQTT network using Zigbee Home Automation (ZHA)
  position: 3
  labels: connect zbt-1, getting started, migrate, migration
---

Follow this guide if you have a Zigbee2MQTT network running and want to migrate to Connect ZBT-1 and ZHA.

Note: this procedure only helps migrate basic network settings to your Home Assistant Connect ZBT-1, customizations like device names will be lost and automations will need to be updated. Most powered devices like lightbulbs will be re-discovered over time (you can speed this up by rebooting the device) but your battery-powered devices may need to be re-joined to the network for the migration to complete. There is currently no migration path to migrate all settings and devices.

If you no longer have the old stick, you can migrate via z2m backup.

## To migrate a Zigbee2MQTT network to Connect ZBT-1 via ZHA

1. Stopping the Zigbee2MQTT add-on.
   - Under **Settings** > **Add-ons**, in the **Zigbee2MQTT** add-on, select **Stop**.
   - Zigbee2MQTT uses the MQTT discovery feature to make the Zigbee devices available in Home Assistant. After removing the Zigbee2MQTT add-on, the devices are still present in Home Assistant since the MQTT broker is still holding on to the MQTT discovery messages.
   - It is recommended to remove these stale devices from the MQTT broker (see next steps).

   ![Stop the Zigbee2MQTT add-on](/static/img/connect-zbt-1/z2m-delete-add-on.png)

2. Removing Zigbee2MQTT devices (option 1).
   - If you don't use MQTT outside of Zigbee2MQTT, you can delete the Mosquitto Broker integration.
     1. Under [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/), select the **Mosquitto broker** integration.
     2. Select the three dots and in the dropdown menu, select **Delete**.

   ![Remove Zigbee2MQTT devices (option 1)](/static/img/connect-zbt-1/z2m-mqq-integration-new-01.png)

3. Removing Zigbee2MQTT devices (option 2).
   - If you don't want to delete the Mosquitto Broker integration, you can remove the devices from the MQTT network.
     1. In the integration card, select **Devices**, under **Device info**, select **Delete**.
     2. Repeat this for every device.

   ![Remove Zigbee2MQTT devices (option 2)](/static/img/connect-zbt-1/z2m-mqtt-dereg-device-01.png)

4. Adding the ZHA integration (1).
   1. Under [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/), if you do not see the ZHA integration, select the **Add integration** button.
   2. From the dropdown list, select **Add Zigbee device**.

   ![Add ZHA integration (1)](/static/img/connect-zbt-1/z2m-migrate-zha-15.png)

5. Adding the ZHA integration (2).
   1. Make sure your old radio stick is still plugged in.
   2. Select **Proceed**.

   ![Add ZHA integration (2)](/static/img/connect-zbt-1/z2m-migrate-zha-13.png)

6. Adding the ZHA integration (3).
   1. Choose the serial device path of your old radio stick.
   2. Select **Submit**.

   ![Add ZHA integration (3)](/static/img/connect-zbt-1/z2m-migrate-zha-14.png)

7. Choosing the network settings for your radio.
   - Select **Keep radio network settings**.
   - You can now start migrating the ZHA network as described below.

   ![Choose the network settings for your radio](/static/img/connect-zbt-1/z2m-migrate-zha-01.png)

## To migrate an existing ZHA network to Connect&nbsp;ZBT-1

{% partial 'connect-zbt-1/migrate-zha-only.md' %}

## Related topics

- [Connectivity issues due to interference](/hc/en-us/articles/26124431414557)