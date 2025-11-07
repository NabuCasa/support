---
zendesk:
  article_id: 29400591254301
  name: Forming a new Zigbee network with Home Assistant Connect ZBT-2
  position: 10
  labels: getting-started, connect-zbt-2
productName: "Home Assistant Connect&nbsp;ZBT-2"
---

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zbt-2/connect-zbt-2-unboxed-02.png" "Image showing the Home Assistant Connect ZBT-2 with the USB extension cable in the original packaging" %}
{% stepContent %}

- [Home Assistant Operating System](https://www.home-assistant.io/docs/glossary/#home-assistant-operating-system) installed on your smart home hub. For example:
  - on a Home Assistant Green, where Home Assistant OS is preinstalled
  - on a Home Assistant Yellow or on a Raspberry Pi
- have the latest updates installed
- Home Assistant Connect&nbsp;ZBT-2 adapter and USB extension cable
- Zigbee devices

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To form a new Zigbee network

{% steps %}

{% include 'connect-zbt-2/getting-started/zbt-2-assemble-and-install.md' %}

{% include "connect-zbt-2/getting-started/plug-in-zbt-2-and-extension-cable.md" %}

{% step "Adding the Home Assistant Connect&nbsp;ZBT-2 integration" %}
{% image "/static/img/connect-zbt-2/connect-zbt-2-add.png" "Locate the Connect ZBT-2 integration" %}
{% stepContent %}

- Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
- Connect ZBT-2 should now have been discovered.
  - **Troubleshooting**: If the device is not discovered, [check the troubleshooting steps](/hc/en-us/articles/31494292436765).
- Select **Add**.

{% endstepContent %}
{% endstep %}

{% step "Picking your protocol" %}
{% image "/static/img/connect-zbt-2/connect-zbt-2-pick-firmware.png" "Pick your firmware" %}
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
{% image "/static/img/connect-zbt-2/zbt-2-add-to-area.png" "Add devices to area" %}
{% stepContent %}

- Follow the steps on screen, and when prompted, add the Zigbee adapter to an area.
- Select **Finish**.

{% endstepContent %}
{% endstep %}

{% step "Adding Zigbee devices" %}
{% image "/static/img/connect-zbt-2/zbt-2-zha-add-device.png" "Add Zigbee devices" %}
{% stepContent %}

{% include "fragments/zbt-2-notice-interference.md" %}

- You can now add your Zigbee devices to the Zigbee network.
  - Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/) and select the **Zigbee Home Automation** integration.
  - Select **Add device**.
    - **Result**: ZHA will now search for Zigbee devices in pairing mode.
    - If there are multiple router devices in the network, the joining device decides which router to use. Ideally, it chooses the one with the best signal strength.
  - Put your Zigbee device into pairing mode.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Home Assistant Container installation](https://www.home-assistant.io/docs/glossary/#home-assistant-container)
- [Mapping devices to the container](https://www.home-assistant.io/installation/linux#exposing-devices)
- [Connectivity issues due to interference](/hc/en-us/articles/31347207026845)
