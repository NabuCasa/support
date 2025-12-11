{% steps %}
{% step "Stopping the deCONZ add-on" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-02.png" "Stop the deCONZ add-on" %}
{% stepContent %}

1. In the [deCONZ add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_deconz), make sure the **Start on boot** option is disabled.
2. Select **Stop**.

{% endstepContent %}
{% endstep %}

{% step "Removing the deCONZ integration" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-delete-deconz-integration.png" "Remove the deCONZ integration" %}
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

{% step "Add the Zigbee Home Automation integration" %}
{% image "/static/img/connect-zbt-1/conbee-add-zha.png" "Configure the new ZHA integration" %}
{% stepContent %}

- Once the ZHA integration has detected the ConBee adapter, select **Add**.

{% endstepContent %}
{% endstep %}

{% step "Submit" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-05.png" "Set up ConBee II as ZHA integration" %}
{% stepContent %}

- To set up ConBee as ZHA integration, select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Choosing the Zigbee setup" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-21.png" "Choose the network settings for your radio" %}
{% stepContent %}

- Select **Advanced setup**.

{% endstepContent %}
{% endstep %}

{% step "Choosing the network settings for your radio" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-51.png" "Choose the network settings for your radio" %}
{% stepContent %}

- Select **Keep adapter network settings**.
  - This lets Zigbee Home Automation (ZHA) import settings from another device that was used with software other than ZHA.
  - This way, some of the network settings can be migrated automatically.

- {% stepResult "You can now start migrating the ZHA network as described below." %}

{% endstepContent %}
{% endstep %}

{% step "Wait" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-09.png" "Wait" %}
{% stepContent %}

- Wait for the settings to be loaded.
- Once the Conbee/Raspbee adapter has been recognized as your Zigbee coordinator, select **Finish**.

{% endstepContent %}
{% endstep %}

{% step "Wait" %}
{% image "/static/img/connect-zbt-1/z2m-backup-restore-05.png" "Wait for the devices to rejoin the network" %}
{% stepContent %}

- Wait for the devices to rejoin the network
  - Normally, powered devices rejoin within one hour.
  - You may be able to accelerate that process by power-cycling devices.
  - Your battery-powered devices may need to be re-joined to the network manually.
  - Once the devices show up in the integration, select the integration.

{% endstepContent %}
{% endstep %}
{% endsteps %}