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

{% steps %}
{% step "Viewing the firmware version of the stick" %}
{% image "/static/img/connect-zbt-1/conbee-update-05.png" "View the firmware version of the stick" %}
{% stepContent %}

- In the deCONZ app, under **Settings** > **Gateway**, check the firmware version. It should be version 26720700 or newer.
  - If the version is recent enough, skip the next two steps and continue with Step 4 (Stop the deCONZ add-on).
  - If the version is not up-to-date, select **Update to 26720700**.

{% endstepContent %}
{% endstep %}

{% step "Following the wizard" %}
{% image "/static/img/connect-zbt-1/conbee-update-06.png" "Follow the wizard" %}
{% stepContent %}

- Select **Create backup** and let the wizard guide you through the update process.

{% endstepContent %}
{% endstep %}

{% step "Updating complete" %}
{% image "/static/img/connect-zbt-1/conbee-update-14.png" "Update complete" %}
{% stepContent %}

- Once the update is complete, you will see the new firmware version.

{% endstepContent %}
{% endstep %}

{% step "Stopping the deCONZ add-on" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-02.png" "Stop the deCONZ add-on" %}
{% stepContent %}

1. In the [deCONZ add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_deconz), make sure the **Start on boot** option is disabled.
2. Select **Stop**.

{% endstepContent %}
{% endstep %}

{% step "Removing the deCONZ integration" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-33.png" "Remove the deCONZ integration" %}
{% stepContent %}

1. Under [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/), select the deCONZ integration.
2. Select the three dots menu and select **Delete**.

{% endstepContent %}
{% endstep %}

{% step "Adding a new ZHA integration" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-23.png" "Add a new ZHA integration" %}
{% stepContent %}

1. In the top-right corner, make sure the checkboxes **Show ignored integrations** and **Show disabled integrations** are selected.
2. Check if the ZHA integration shows up.
   - If the ZHA integration does not show up, select **Add integration**, then select **ZHA** from the list.

{% endstepContent %}
{% endstep %}

{% step "Select Configure" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-04.png" "Configure the new ZHA integration" %}
{% stepContent %}

- Once the ZHA integration has detected ConBee II, select **Configure**.

{% endstepContent %}
{% endstep %}

{% step "Submit" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-05.png" "Set up ConBee II as ZHA integration" %}
{% stepContent %}

- To setting up ConBee II as ZHA integration, select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Choosing the serial port" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-24.png" "Choose the serial port" %}
{% stepContent %}

- Choose the serial port and select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Choosing the network settings for the radio" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-06.png" "Choose the network settings for the radio" %}
{% stepContent %}

- Select **Keep radio network settings**.

{% endstepContent %}
{% endstep %}

{% step "Wait" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-07.png" "Wait" %}
{% stepContent %}

- Wait for the settings to be loaded.

{% endstepContent %}
{% endstep %}

{% step "Adding deCONZ to area" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-09.png" "Add the Zigbee coordinator to your area" %}
{% stepContent %}

- Once deCONZ has been recognized as your Zigbee coordinator, add it to your area.
  - Select **Finish**.

{% endstepContent %}
{% endstep %}

{% step "Wait" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-42.png" "Wait for the devices to rejoin the network" %}
{% stepContent %}

- Wait for the devices to rejoin the network
  - Normally, powered devices rejoin within one hour.
  - You may be able to accelerate that process by power-cycling devices.
  - Your battery-powered devices may need to be re-joined to the network manually.
  - Once the devices show up in the integration, select the integration.

{% endstepContent %}
{% endstep %}

{% step "Configuring settings" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-41.png" "Open the network settings" %}
{% stepContent %}

- To open the network settings, under **Integration entries**, select **Configure**.

{% endstepContent %}
{% endstep %}

{% step "" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-11.png" "Migrate the network settings" %}
{% stepContent %}

- Under **Network Settings**, select **Migrate radio**.

{% endstepContent %}
{% endstep %}

{% step "Reconfigure ZHA" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-12.png" "Reconfigure ZHA" %}
{% stepContent %}

- **Reconfigure ZHA**:  Select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Migrating to a new radio" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-13.png" "Migrate to a new radio" %}
{% stepContent %}

- Select **Migrate to a new radio**.

{% endstepContent %}
{% endstep %}

{% step "Starting the automatic backup" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-14.png" "Start the automatic backup" %}
{% stepContent %}

- Start the automatic backup.
  1. Make sure the ConBee firmware is running firmware version 26720700.
  2. When it is up-to-date, select **Submit**.

{% endstepContent %}
{% endstep %}

{% step " Unplugging your old radio" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-06.png" "Unplug your old radio" %}
{% stepContent %}

1. If you no longer need the old radio stick, you can now remove it.
2. Before selecting **Submit**, connect Connect ZBT-1, as described in the following step.

{% endstepContent %}
{% endstep %}

{% step "Adding the extension cable" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-raspi-01.jpg" "Plug the extension cable into Connect ZBT-1" %}
{% stepContent %}

- Plug the Home Assistant Connect ZBT-1 into the USB extension cable
  - Plug the extension cable into your Home Assistant instance.
  - If you are using the standalone Home Assistant Container installation method, make sure Connect ZBT-1 is [mapped to the container](https://www.home-assistant.io/installation/linux#exposing-devices).
  - **Notice**: USB 3.0 ports and USB 3.0 drives can cause interference with 2.4 GHz protocols, including the ones provided by Home Assistant Connect ZBT-1. It is important to use the USB extension cable and to position the Home Assistant Connect ZBT-1 away from possible interference sources.
  - This [video](/hc/en-us/articles/26124431414557) shows the effect of **interference**.

{% endstepContent %}
{% endstep %}

{% step "Submit" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-06.png" "Confirm that Connect ZBT-1 is plugged in" %}
{% stepContent %}

- Now that Connect ZBT-1 is plugged in, select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-15.png" "Select the serial port" %}
{% stepContent %}

- Select the serial port for Connect ZBT-1, then select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Restore automatic backup" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-08.png" "Start the backup restore process" %}
{% stepContent %}

- Select **Restore an automatic backup**.

{% endstepContent %}
{% endstep %}

{% step "Choosing the backup" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-09.png" "Select the backup" %}
{% stepContent %}

- Choose the latest backup and select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Overwriting radio IEEE address" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-10.png" "Overwrite radio IEEE address" %}
{% stepContent %}

- Overwrite radio IEEE address.
  - Select the **Permanently replace the radio IEEE address** and select **Submit**.
  - {% stepInfo "This means that your old stick and your new stick will have the same IEEE address. This is required for the migration process to complete successfully. From this point onwards, you should not operate the old stick in the same area. If you do not migrate the IEEE address from your old stick, you'll have to repair many of your devices in order to keep them working." %}

{% endstepContent %}
{% endstep %}

{% step "Wait" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-11.png" "Wait" %}
{% stepContent %}

- **Wait**
- Overwriting the IEEE address may take a while. Wait.

{% endstepContent %}
{% endstep %}

{% step "Checking the Connect ZBT-1 ZHA integration" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-new-18.png" "Check the Connect ZBT-1 ZHA integration" %}
{% stepContent %}

- Connect ZBT-1 is now set up in the ZHA integration.
- To check whether the migration was successful, select the integration.

{% endstepContent %}
{% endstep %}

{% step "Checking the radio type" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-19.png" "Check the radio type" %}
{% stepContent %}

- Under **Network Settings**, check the **Radio type**. It should say **ezsp**.

{% endstepContent %}
{% endstep %}

{% step "Renaming the ZHA integration" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-new-21.png" "Start renaming ZHA integration" %}
{% stepContent %}

- To avoid confusion, rename the ZHA integration.

{% endstepContent %}
{% endstep %}

{% step "Changing the ZHA integration name" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-21.png" "Change the name to Connect ZBT-1" %}
{% stepContent %}

- Change the ZHA integration name to **Connect ZBT-1** and select **OK**.

{% endstepContent %}
{% endstep %}

{% step "Reconfiguring automations and dashboards" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-new-22.png" "Reconfigure automations and dashboards" %}
{% stepContent %}

- {% stepInfo "All migrated devices have new entity IDs. This means you will need to manually reconfigure automations and dashboard cards." %}
- {% stepInfo "The names that you manually assigned to your devices won't have been migrated. You will have to rename the devices again." %}

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Connectivity issues due to interference](/hc/en-us/articles/26124431414557)