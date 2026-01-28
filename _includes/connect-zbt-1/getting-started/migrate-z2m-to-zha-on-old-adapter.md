{% steps %}
{% step "Stopping the Zigbee2MQTT app" %}
{% image "/static/img/connect-zbt-1/z2m-delete-add-on.png" "Stop the Zigbee2MQTT add-on" %}
{% stepContent %}

   - Under **Settings** > **Add-ons**, in the **Zigbee2MQTT** add-on, select **Stop**.
   - Zigbee2MQTT uses the MQTT discovery feature to make the Zigbee devices available in Home Assistant. After removing the Zigbee2MQTT add-on, the devices are still present in Home Assistant since the MQTT broker is still holding on to the MQTT discovery messages.
   - It is recommended to remove these stale devices from the MQTT broker (see next steps).

{% endstepContent %}
{% endstep %}

{% step "Removing Zigbee2MQTT devices (option 1)" %}
{% image "/static/img/connect-zbt-1/z2m-mqq-integration-new-01.png" "Remove Zigbee2MQTT devices (option 1)" %}
{% stepContent %}

If you don't use MQTT outside of Zigbee2MQTT, you can delete the **MQTT** integration.

1. Under [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/), select the **MQTT** integration.
2. Select the three dots and in the dropdown menu, select **Delete**.

{% endstepContent %}
{% endstep %}

{% step "Removing Zigbee2MQTT devices (option 2)" %}
{% image "/static/img/connect-zbt-1/z2m-mqtt-dereg-device-01.png" "Remove Zigbee2MQTT devices (option 2)" %}
{% stepContent %}

If you don't want to delete the **MQTT** integration, you can remove the individual devices provided by the MQTT integration.

1. In the integration card, select **Devices**, under **Device info**, select **Delete**.
2. Repeat this for every device.

{% endstepContent %}
{% endstep %}

{% step "Adding the ZHA integration (1)" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-15.png" "Add ZHA integration (1)" %}
{% stepContent %}

1. Under [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/), if you do not see the ZHA integration, select the **Add integration** button.
2. From the dropdown list, select **Add Zigbee device**.

{% endstepContent %}
{% endstep %}

{% step "Adding the ZHA integration (2)" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-13.png" "Add ZHA integration (2)" %}
{% stepContent %}

1. Make sure your old adapter is still plugged in.
2. Select **Proceed**.

{% endstepContent %}
{% endstep %}

{% step "Adding the ZHA integration (3)" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-14.png" "Add ZHA integration (3)" %}
{% stepContent %}

1. Choose the serial device path of your old adapter.
2. Select **Submit**.
{% endstepContent %}
{% endstep %}

{% step "Choosing the Zigbee setup" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-21.png" "Choose the network settings for your radio" %}
{% stepContent %}

- Select **Advanced setup**.

{% endstepContent %}
{% endstep %}

{% step "Choosing the network settings for your adapter" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-01.png" "Choose the network settings for your radio" %}
{% stepContent %}

- Select **Keep adapter network settings**.
  - This lets Zigbee Home Automation (ZHA) import settings from another device that was used with software other than ZHA.
  - This way, some of the network settings can be migrated automatically.
  - **Troubleshooting**: If you are seeing a repair issue **Zigbee network settings have changed**, and the text **network settings are inconsistent with the most recent adapter**, select the option **Keep the new settings**.

- {% stepResult "You can now start migrating the ZHA network as described below." %}

{% endstepContent %}
{% endstep %}
{% endsteps %}
