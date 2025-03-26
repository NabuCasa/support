---
zendesk:
  article_id: 26124035750173
  name: Migrating a deCONZ network using Zigbee Home Automation (ZHA)
  position: 4
  labels: connect zbt-1, getting started, migrate, migration
---

Follow this guide if you have a deCONZ network running with a ConBee II or RaspBee II and want to migrate to Connect ZBT-1 and ZHA.

> **Note**: this procedure only helps migrate basic network settings to your Home Assistant Connect ZBT-1.
>
> - Customizations like device names will be lost and automations will need to be updated.
> - Most powered devices like lightbulbs will be re-discovered over time (you can speed this up by rebooting the device) but your battery-powered devices may need to be re-joined to the network for the migration to complete.
>
> There is currently no migration path to migrate all settings and devices.

## To migrate a deCONZ network to Connect ZBT-1 using ZHA

1. Viewing the firmware version of the stick.
   - In the deCONZ app, under **Settings** > **Gateway**, check the firmware version. It should be version 26720700 or newer.
     - If the version is recent enough, skip the next two steps and continue with Step 4 [Stop the deCONZ add-on](#step-stop-the-deconz-add-on).
     - If the version is not up-to-date, select **Update to 26720700**.

   ![View the firmware version of the stick](/static/img/connect-zbt-1/conbee-update-05.png)

2. Following the wizard.
   - Select **Create backup** and let the wizard guide you through the update process.
   ![Follow the wizard](/static/img/connect-zbt-1/conbee-update-06.png)

3. Updating complete.
   - Once the update is complete, you will see the new firmware version.

   ![Update complete](/static/img/connect-zbt-1/conbee-update-14.png)

4. Stopping the deCONZ add-on.
   1. In the [deCONZ add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_deconz), make sure the **Start on boot** option is disabled.
   2. Select **Stop**.

   ![Stop the deCONZ add-on](/static/img/connect-zbt-1/conbee-migrate-zha-02.png)

5. Removing the deCONZ integration.
   1. Under [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/), select the deCONZ integration.
   2. Select the three dots menu and select **Delete**.

    ![Remove the deCONZ integration](/static/img/connect-zbt-1/conbee-migrate-zha-33.png)

6. Adding a new ZHA integration.
   1. In the top-right corner, make sure the checkboxes **Show ignored integrations** and **Show disabled integrations** are selected.
   2. Check if the ZHA integration shows up.
      - If the ZHA integration does not show up, select **Add integration**, then select **ZHA** from the list.

    ![Add a new ZHA integration](/static/img/connect-zbt-1/conbee-migrate-zha-23.png)

7. Once the ZHA integration has detected ConBee II, select **Configure**.

   ![Configure the new ZHA integration](/static/img/connect-zbt-1/conbee-migrate-zha-04.png)

8. To setting up ConBee II as ZHA integration, select **Submit**.

   ![Set up ConBee II as ZHA integration](/static/img/connect-zbt-1/conbee-migrate-zha-05.png)

9. Choose the serial port and select **Submit**.

   ![Choose the serial port](/static/img/connect-zbt-1/conbee-migrate-zha-24.png)

10. Choose the network settings for the radio.
    - Select **Keep radio network settings**.

    ![Choose the network settings for the radio](/static/img/connect-zbt-1/conbee-migrate-zha-06.png)

11. Wait for the settings to be loaded.

    ![Wait](/static/img/connect-zbt-1/conbee-migrate-zha-07.png)

12. Once deCONZ has been recognized as your Zigbee coordinator, add it to your area.
    - Select **Finish**.

    ![Add the Zigbee coordinator to your area](/static/img/connect-zbt-1/conbee-migrate-zha-09.png)

13. Wait for the devices to rejoin the network.
    - Normally, powered devices rejoin within one hour.
    - You may be able to accelerate that process by power-cycling devices.
    - Your battery-powered devices may need to be re-joined to the network manually.
    - Once the devices show up in the integration, select the integration.

    ![Wait for the devices to rejoin the network](/static/img/connect-zbt-1/conbee-migrate-zha-42.png)

14. To open the network settings, under **Integration entries**, select **Configure**.

    ![Open the network settings](/static/img/connect-zbt-1/conbee-migrate-zha-41.png)

15. Under **Network Settings**, select **Migrate radio**.

    ![Migrate the network settings](/static/img/connect-zbt-1/conbee-migrate-zha-11.png)

16. **Reconfigure ZHA**:  Select **Submit**.

    ![Reconfigure ZHA](/static/img/connect-zbt-1/conbee-migrate-zha-12.png)

17. Select **Migrate to a new radio**.

    ![Migrate to a new radio](/static/img/connect-zbt-1/conbee-migrate-zha-13.png)

18. Start the automatic backup.
    1. Make sure the ConBee firmware is running firmware version 26720700.
    2. When it is up-to-date, select **Submit**.

    ![Start the automatic backup](/static/img/connect-zbt-1/conbee-migrate-zha-14.png)

19. Unplug your old radio.
    1. If you no longer need the old radio stick, you can now remove it.
    2. Before selecting **Submit**, connect Connect ZBT-1, as described in the following step.

    ![Unplug your old radio](/static/img/connect-zbt-1/z2m-migrate-zha-06.png)

20. Plug the Home Assistant Connect ZBT-1 into the USB extension cable.
    - Plug the extension cable into your Home Assistant instance.
    - If you are using the standalone Home Assistant Container installation method, make sure Connect ZBT-1 is [mapped to the container](https://www.home-assistant.io/installation/linux#exposing-devices).
    - **Warning**: USB 3.0 ports and USB 3.0 drives can cause interference with 2.4 GHz protocols, including the ones provided by Home Assistant Connect ZBT-1. It is important to use the USB extension cable and to position the Home Assistant Connect ZBT-1 away from possible interference sources.
    - This [video](/hc/en-us/articles/26124431414557) shows the effect of **interference**.

    ![Plug the extension cable into Connect ZBT-1](/static/img/connect-zbt-1/connect-zbt-1-raspi-01.jpg)

21. Now that Connect ZBT-1 is plugged in, select **Submit**.

    ![Confirm that Connect ZBT-1 is plugged in](/static/img/connect-zbt-1/z2m-migrate-zha-06.png)

22. Select the serial port for Connect ZBT-1, then select **Submit**.

    ![Select the serial port](/static/img/connect-zbt-1/conbee-migrate-zha-15.png)

23. Select **Restore an automatic backup**.

    ![Start the backup restore process](/static/img/connect-zbt-1/z2m-migrate-zha-08.png)

24. Choose the latest backup and select **Submit**.

    ![Select the backup](/static/img/connect-zbt-1/z2m-migrate-zha-09.png)

25. Overwrite radio IEEE address.
    - Select the **Permanently replace the radio IEEE address** and select **Submit**.
    - **Info**: This means that your old stick and your new stick will have the same IEEE address. This is required for the migration process to complete successfully. From this point onwards, you should not operate the old stick in the same area. If you do not migrate the IEEE address from your old stick, you'll have to repair many of your devices in order to keep them working.

    ![Overwrite radio IEEE address](/static/img/connect-zbt-1/z2m-migrate-zha-10.png)

26. **Wait**
    - Overwriting the IEEE address may take a while. Wait.

    ![Wait](/static/img/connect-zbt-1/z2m-migrate-zha-11.png)

27. Check the Connect ZBT-1 ZHA integration.
    - Connect ZBT-1 is now set up in the ZHA integration.
    - To check whether the migration was successful, select the integration.

    ![Check the Connect ZBT-1 ZHA integration](/static/img/connect-zbt-1/conbee-migrate-zha-new-18.png)

28. Under **Network Settings**, check the **Radio type**. It should say **ezsp**.

    ![Check the radio type](/static/img/connect-zbt-1/conbee-migrate-zha-19.png)

29. To avoid confusion, rename the ZHA integration.

    ![Start renaming ZHA integration](/static/img/connect-zbt-1/conbee-migrate-zha-new-21.png)

30. Change the ZHA integration name to **Connect ZBT-1** and select **OK**.

    ![Change the name to Connect ZBT-1](/static/img/connect-zbt-1/conbee-migrate-zha-21.png)

31. Reconfigure automations and dashboards.
    - **Info**: All migrated devices have new entity IDs. This means you will need to manually reconfigure automations and dashboard cards.
    - **Info**: The names that you manually assigned to your devices won't have been migrated. You will have to rename the devices again.

    ![Reconfigure automations and dashboards](/static/img/connect-zbt-1/conbee-migrate-zha-new-22.png)

## Related topics

- [Connectivity issues due to interference](/hc/en-us/articles/26124431414557)