---
zendesk:
  article_id: 26700478689949
  name: Migrating an existing Zigbee Home Automation (ZHA) network via Zigbee2MQTT backup
  position: 8
  labels: connect zbt1, getting started, migrate, migration
---


Follow these instructions if you are in the following situation:

- You have a Zigbee2MQTT network running, you no longer have the stick, and you want to migrate to Connect ZBT-1.

Please note that not all settings can be migrated in this case:

- These steps help migrate the network, meaning you won't have to pair all your devices again with Home Assistant Connect ZBT-1.
- However, some higher-level settings cannot be migrated. Elements such as device names may be lost. There is currently no migration path to transfer all settings.

## To migrate an existing Zigbee Home Automation (ZHA) network via Zigbee2MQTT backup

1. Creating a Zigbee2MQTT backup
   1. Under **Settings** > **Add-ons**, open the **Zigbee2MQTT** add-on and select **Open Web UI**.
   2. In the Zigbee2MQTT UI, go to **Settings** > **Tools** and select **Request z2m backup**.
      - A zip file should now be downloaded into your **Downloads** folder.

   ![/static/img/connect-zbt-1/z2m-backup-01.png](/static/img/connect-zbt-1/z2m-backup-01.png)

2. Unzipping the backup folder.
   - In your **Downloads** folder, unzip the **z2m-backup**.
     - It should contain a **coordinator_backup.json** file.

   ![/static/img/connect-zbt-1/z2m-backup-restore-01.png](/static/img/connect-zbt-1/z2m-backup-restore-01.png)

3. Stopping the Zigbee2MQTT add-on.
   - Under **Settings** > **Add-ons**, in the **Zigbee2MQTT** add-on, select **Stop**.
   - Zigbee2MQTT uses the MQTT discovery feature to make the Zigbee devices available in Home Assistant. After removing the Zigbee2MQTT add-on, the devices are still present in Home Assistant since the MQTT broker is still holding on to the MQTT discovery messages.
   - It is recommended to remove these stale devices from the MQTT broker (see next steps).
   ![/static/img/connect-zbt-1/z2m-delete-add-on.png](/static/img/connect-zbt-1/z2m-delete-add-on.png)

4. Removing Zigbee2MQTT devices (option 1).
   - If you don't use MQTT outside of z2m, you can delete the Mosquito Broker integration.
   - Under [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/), select the **Mosquitto broker** integration.
   - Select the three dots and in the dropdown menu, select **Delete**.
   ![/static/img/connect-zbt-1/z2m-mqq-integration-new-01.png](/static/img/connect-zbt-1/z2m-mqq-integration-new-01.png)

5. Removing Zigbee2MQTT devices (option 2).
   1. If you don't want to delete the Mosquito Broker integration, you can remove the devices from the MQTT network.
   2. In the integration card, select **Devices**, under **Device info**, select **Delete**.
   3. Repeat this for every device.

   ![/static/img/connect-zbt-1/z2m-mqtt-dereg-device-01.png](/static/img/connect-zbt-1/z2m-mqtt-dereg-device-01.png)

6. Plugging the extension cable into Connect ZBT-1.
   1. Plug the Home Assistant Connect ZBT-1 into the USB extension cable.
   2. Plug the extension cable into your Home Assistant instance.
   3. If you are using the standalone Home Assistant Container installation method, make sure Connect ZBT-1 is [mapped to the container](https://www.home-assistant.io/installation/linux#exposing-devices).
   4.  **Note:** USB 3.0 ports and USB 3.0 drives can cause interference with 2.4 GHz protocols, including the ones provided by Home Assistant Connect ZBT-1. It is important to use the USB extension cable and to position the Home Assistant Connect ZBT-1 away from possible interference sources.
    This [video](/connectivity) shows the effect of interference.

   ![/static/img/connect-zbt-1/connect-zbt-1-raspi-01.jpg](/static/img/connect-zbt-1/connect-zbt-1-raspi-01.jpg)

7. Locating the Connect ZBT-1 integration.
   1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
   2. Connect ZBT-1 should now have been discovered.
   3. Select **Configure**.

   ![/static/img/connect-zbt-1/connect-zbt-1-discovered-01.png](/static/img/connect-zbt-1/connect-zbt-1-discovered-01.png)

8. Uploading a manual backup.
   - In the **Network Formation** dialog, select **Upload a manual backup**.

   ![/static/img/connect-zbt-1/z2m-backup-04.png](/static/img/connect-zbt-1/z2m-backup-04.png)

9. Selecting the backup file
   - In your **Downloads** folder, select the **coordinator_backup.json** file.
   ![/static/img/connect-zbt-1/z2m-backup-restore-02.png](/static/img/connect-zbt-1/z2m-backup-restore-02.png)

10. Submit the backup json file
    - Make sure the **coordinator_backup.json** file is selected and select **submit**.
    ![/static/img/connect-zbt-1/z2m-backup-restore-03.png](/static/img/connect-zbt-1/z2m-backup-restore-03.png)

11. Assigning coordinator to area
    - Assign the coordinator to an area and select **Finish**.
    - **Note:** You won't be able to control the devices until they rejoin the network. Normally, they join within one hour. You may be able to accelerate that process by power-cycling the device.
    ![/static/img/connect-zbt-1/connect-zbt-1-discovered-04.png](/static/img/connect-zbt-1/connect-zbt-1-discovered-04.png)

12. Reconfiguring automations and dashboards
    - **Note:** All migrated devices have new entity IDs. This means you will need to manually reconfigure automations and dashboard cards.
    - **Note:** The names that you manually assigned to your devices won't have been migrated. You will have to rename the devices again.

    ![/static/img/connect-zbt-1/z2m-backup-restore-05.png](/static/img/connect-zbt-1/z2m-backup-restore-05.png)
