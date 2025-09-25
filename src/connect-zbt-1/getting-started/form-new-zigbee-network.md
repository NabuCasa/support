---
zendesk:
  article_id: 26123541989661
  name: Forming a new Zigbee network with Home Assistant Connect ZBT-1
  position: 1
  labels: connect zbt-1, getting started
---

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-boxed-01.jpg" "Image showing the Assistant Connect&nbsp;ZBT-1 with the USB extension cable in the original packaging" %}
{% stepContent %}

- Home Assistant Operating System installed on your board, for example:
  - on a Home Assistant Green, where Home Assistant OS is preinstalled
  - on a Home Assistant Yellow or on a Raspberry Pi
- have the latest updates installed
- Home Assistant Connect&nbsp;ZBT-1 adapter and USB extension cable
- Zigbee devices

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To form a new Zigbee network

{% steps %}
{% include "connect-zbt-1/plug-in-zbt-1-and-extension-cable.md" %}

{% step "Locating the Home Assistant Connect&nbsp;ZBT-1 integration" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-add.png" "Locate the Connect ZBT-1 integration" %}
{% stepContent %}

- Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
- Connect ZBT-1 should now have been discovered.
- Select **Add**.

{% endstepContent %}
{% endstep %}

{% step "Picking your protocol" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1_pick_firmware.png" "Pick your firmware" %}
{% stepContent %}

- In the dialog, select **Use as Zigbee adapter**.

{% endstepContent %}
{% endstep %}

{% step "Select installation type" %}
{% image "/static/img/connect-zbt-1/zbt-select-installation-method.png" "Pick your firmware" %}
{% stepContent %}

- **Option 1**: If you are a new user, select **Recommended installation**.
  - This adds the device to Home Assistant and configures Zigbee with the **Zigbee Home Automation** integration that was developed specifically for Home Assistant.
- **Option 2**: If you have your own controller, for example Zigbee2MQTT, select **Custom**.
  - This option adds the device to Home Assistant, but you will need to manually install the controller of your choice on your own.
  - Those custom steps are not covered in this documentation.

{% endstepContent %}
{% endstep %}

{% step "Adding devices to an area" %}
{% image "/static/img/connect-zbt-1/zbt-add-to-area.png" "Add devices to area" %}
{% stepContent %}

- Follow the steps on screen, and when prompted, add the Zigbee adapter to an area.
- Select **Finish**.

{% endstepContent %}
{% endstep %}

{% step "Adding Zigbee devices" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-discovered-05.png" "Add Zigbee devices" %}
{% stepContent %}

{% include "fragments/notice-interference.md" %}

- You can now add your Zigbee devices to the Zigbee network.
  - Select **1 device** and select **Add devices via this device**. ZHA will now search for Zigbee devices in pairing mode.
  - Put your Zigbee device into pairing mode.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Home Assistant Container installation](https://www.home-assistant.io/docs/glossary/#home-assistant-container)
- [Mapping devices to the container](https://www.home-assistant.io/installation/linux#exposing-devices)
- [Connectivity issues due to interference](/hc/en-us/articles/26124431414557)