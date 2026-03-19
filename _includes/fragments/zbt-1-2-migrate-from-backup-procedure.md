{% steps %}
{% step "Creating a Zigbee2MQTT backup" %}
{% image "/static/img/connect-zbt-1/z2m-backup-01.png" "Creating a Zigbee2MQTT backup" %}
{% stepContent %}

1. Under **Settings** > **Apps**, open the **Zigbee2MQTT** app and select **Open Web UI**.
2. In the Zigbee2MQTT UI, go to **Settings** > **Tools** and select **Request Z2M backup**.
   - Select **Download Zigbee2MQTT backup**.
   - {% stepResult "A zip file should now be downloaded into your **Downloads** folder." %}

{% endstepContent %}
{% endstep %}

{% step "Unzipping the backup folder" %}
{% image "/static/img/connect-zbt-1/z2m-backup-restore-01.png" "Unzipping the backup folder" %}
{% stepContent %}

- In your **Downloads** folder, unzip the **z2m-backup** file.
  - **Info**: It should contain a **coordinator_backup.json** file.

{% endstepContent %}
{% endstep %}

{% step "Stopping the Zigbee2MQTT app" %}
{% image "/static/img/connect-zbt-1/z2m-delete-app.png" "Stopping the Zigbee2MQTT app" %}
{% stepContent %}

- Under **Settings** > **Apps**, in the **Zigbee2MQTT** app, select **Stop**.
- Zigbee2MQTT uses the MQTT discovery feature to make the Zigbee devices available in Home Assistant. After removing the Zigbee2MQTT app, the devices are still present in Home Assistant since the MQTT broker is still holding on to the MQTT discovery messages.
- It is recommended to remove these stale devices from the MQTT broker (see next steps).

{% endstepContent %}
{% endstep %}

{% step "Removing Zigbee2MQTT devices (option 1)" %}
{% image "/static/img/connect-zbt-1/z2m-mqq-integration-new-01.png" "Removing Zigbee2MQTT devices (option 1)" %}
{% stepContent %}

If you don't use MQTT outside of Zigbee2MQTT, you can delete the **MQTT** integration.

1. Under [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/), select the **MQTT** integration.
2. Select the three dots and in the dropdown menu, select **Delete**.

{% endstepContent %}
{% endstep %}

{% step "Removing Zigbee2MQTT devices (option 2)" %}
{% image "/static/img/connect-zbt-1/z2m-mqtt-dereg-device-01.png" "Removing Zigbee2MQTT devices (option 2)" %}
{% stepContent %}

If you don't want to delete the complete **MQTT** integration, you can remove individual devices from the MQTT integration.

1. In the integration card, select **Devices**, under **Device info**, select **Delete**.
2. Repeat this for every Zigbee device.

{% endstepContent %}
{% endstep %}

{% if type == "zbt1" %}
{% include "connect-zbt-1/getting-started/plug-in-zbt-1-and-extension-cable.md" %}
{% endif %}

{% if type == "zbt2" %}
{% include "connect-zbt-2/getting-started/plug-in-zbt-2-and-extension-cable.md" %}
{% endif %}

{% step "Adding the adapter's integration" %}

{% if type == "zbt1" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-add.png" "Adding the Connect ZBT-1 integration" %}
{% endif %}

{% if type == "zbt2" %}
{% image "/static/img/connect-zbt-2/connect-zbt-2-add.png" "Adding the Connect ZBT-2 integration" %}
{% endif %}

{% stepContent %}

1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
2. The **{{ productName }}** integration should now have been discovered.
3. Select **Add**.

{% endstepContent %}
{% endstep %}

{% step "Picking your protocol" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1_pick_firmware.png" "Pick your firmware" %}
{% stepContent %}

- In the dialog, select **Use as Zigbee adapter**.

{% endstepContent %}
{% endstep %}

{% step "Select installation type" %}
{% image "/static/img/connect-zbt-1/zbt-select-installation-method-custom.png" "Pick your firmware" %}
{% stepContent %}

1. In the dialog, select **Custom**.
2. When asked to select the Zigbee method, select **Zigbee Home Automation**.
3. Then, select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Uploading a manual backup" %}
{% image "/static/img/connect-zbt-1/z2m-backup-04.png" "Uploading a manual backup" %}
{% stepContent %}

- In the **Network Formation** dialog, select **Upload a manual backup**.

{% endstepContent %}
{% endstep %}

{% step "Select the backup file" %}
{% image "/static/img/connect-zbt-1/z2m-backup-restore-02.png" "Selecting the backup file" %}
{% stepContent %}

- In your **Downloads** folder, select the **coordinator_backup.json** file.

{% endstepContent %}
{% endstep %}

{% step "Submit the backup json file" %}
{% image "/static/img/connect-zbt-1/z2m-backup-restore-03.png" "Submit the backup json file" %}
{% stepContent %}

- Make sure the **coordinator_backup.json** file is selected and select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Assigning coordinator to area" %}

{% if type == "zbt1" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-discovered-04.png" "Assigning coordinator to area" %}
{% endif %}

{% if type == "zbt2" %}
{% image "/static/img/connect-zbt-2/connect-zbt-2-assign-to-area.png" "Assigning coordinator to area" %}
{% endif %}

{% stepContent %}

- Assign the coordinator to an area and select **Finish**.
- **Info**: You won't be able to control the devices until they rejoin the network. Normally, they join within one hour. You may be able to accelerate that process by power-cycling the devices.

{% endstepContent %}
{% endstep %}

{% step "Reconfiguring automations and dashboards" %}
{% image "/static/img/connect-zbt-1/z2m-backup-restore-05.png" "Reconfiguring automations and dashboards" %}
{% stepContent %}

- **Info**: All migrated devices have new entity IDs. This means you will need to manually reconfigure automations and dashboard cards.
- **Info**: The names that you manually assigned to your devices won't have been migrated. You will have to rename the devices again.

{% endstepContent %}
{% endstep %}
{% endsteps %}