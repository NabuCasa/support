---
zendesk:
  article_id: 30589636469533
  name: Forming a new Thread network with Home Assistant Connect ZBT-1
  position: 10
  labels: connect zbt-1, thread
---

This guide shows you how to use the Home Assistant Connect&nbsp;ZBT-1 as a dedicated Thread adapter. The Thread adapter allows you to connect Matter-over-Thread devices to your network.

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-boxed-01.jpg" "Image showing the Assistant Connect&nbsp;ZBT-1 with the USB extension cable in the original packaging" %}
{% stepContent %}

- [Home Assistant Operating System](https://www.home-assistant.io/docs/glossary/#home-assistant-operating-system) installed on your smart home hub. For example:
  - on a Home Assistant Green, where Home Assistant OS is preinstalled
  - on a Home Assistant Yellow or on a Raspberry Pi
- have the latest updates installed
- Home Assistant Connect&nbsp;ZBT-1 adapter and a USB extension cable
- Thread devices

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To enable dedicated Thread support

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

{% step "Selecting the Thread firmware" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1_pick_firmware.png" "Select the Thread firmware" %}
{% stepContent %}

- Select **Use as Thread adapter**.
  - **Result**: This installs the OpenThread Border Router add-on which allows you to connect Matter-over-Thread devices.

{% endstepContent %}
{% endstep %}

{% step "Adding the adapter to an area" %}
{% image "/static/img/connect-zbt-1/zbt-thread-add-to-area.png" "Select the Thread firmware" %}
{% stepContent %}

1. When prompted, add the adapter to an area.
2. Then, select **Finish**.

{% endstepContent %}
{% endstep %}

{% step "Locating the Thread integrations" %}
{% image "/static/img/connect-zbt-1/otbr_thread_integrations.png" "Locate the Thread integrations" %}
{% stepContent %}

1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
2. You should now see the **OpenThread Border Router** and the **Thread** integrations.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Disabling multiprotocol support](/hc/en-us/articles/26124969612445)
- [Migrating your Zigbee network](/hc/en-us/articles/26123655295261)
