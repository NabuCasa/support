---
zendesk:
  article_id: 26123541989661
  name: Forming a new Zigbee network
  position: 1
  labels: connect zbt-1, getting started
---

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-boxed-01.jpg" "Image showing the Assistant Connect&nbsp;ZBT-1 with the USB extension cable in the original packaging" %}
{% stepContent %}

- Home Assistant installed on your board (for example on a Home Assistant Green, Home Assistant Yellow or on a Raspberry Pi) with the latest updates installed.
- Home Assistant Connect&nbsp;ZBT-1 dongle and USB extension cable.

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To form a new Zigbee network

{% steps %}
{% step "Plugging the extension cable into Home Assistant Connect&nbsp;ZBT-1" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-raspi-01.jpg" "Plug the extension cable into Connect ZBT-1" %}
{% stepContent %}

{% include "fragments/notice-interference.md" %}

- Plug the Home Assistant Connect&nbsp;ZBT-1 into the USB extension cable.
- Plug the extension cable into your Home Assistant instance.
- If you are using the standalone [Home Assistant Container](https://www.home-assistant.io/docs/glossary/#home-assistant-container) installation method, make sure Connect ZBT-1 is [mapped to the container](https://www.home-assistant.io/installation/linux#exposing-devices).

{% endstepContent %}
{% endstep %}

{% step "Locating the Home Assistant Connect&nbsp;ZBT-1 integration" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-discovered-01.png" "Locate the Connect ZBT-1 integration" %}
{% stepContent %}

- Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
- Connect ZBT-1 should now have been discovered.
- Select **Configure**.

{% endstepContent %}
{% endstep %}

{% step "Picking your firmware" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1_pick_firmware.png" "Pick your firmware" %}
{% stepContent %}

- In the dialog, select **Zigbee**.

{% endstepContent %}
{% endstep %}

{% step "Completing the Zigbee setup" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1_complete-zigbee-setup.png" "Complete the Zigbee setup" %}
{% stepContent %}

- Select **Submit** to complete the setup of the Home Assistant Connect&nbsp;ZBT-1 integration.
- Your Connect ZBT-1 is now a Zigbee coordinator.

{% endstepContent %}
{% endstep %}

{% step "Configuring the Zigbee Home Automation integration" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1_zha-discovered.png" "Configure the Zigbee Home Automation integration" %}
{% stepContent %}

- Connect ZBT-1 will be shown in your **Zigbee Home Automation integration**.
- Select **Configure**.
- To confirm, select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Creating a network" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1_create-network.png" "Create a network" %}
{% stepContent %}

- Select **Create network**.

{% endstepContent %}
{% endstep %}

{% step "Adding devices to an area" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-discovered-04.png" "Add devices to area" %}
{% stepContent %}

- Once the network has been set up, add the Zigbee coordinator to an area.
- Select **Finish**.
  - Your Zigbee devices are now added to your Zigbee network.

{% endstepContent %}
{% endstep %}

{% step "Adding Zigbee devices" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-discovered-05.png" "Add Zigbee devices" %}
{% stepContent %}

{% include "fragments/notice-interference.md" %}

- Select **1 device** and select **Add devices via this device**. ZHA will now search for Zigbee devices in pairing mode.
- Put your Zigbee device into pairing mode.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Home Assistant Container installation](https://www.home-assistant.io/docs/glossary/#home-assistant-container)
- [Mapping devices to the container](https://www.home-assistant.io/installation/linux#exposing-devices)
- [Connectivity issues due to interference](/hc/en-us/articles/26124431414557)