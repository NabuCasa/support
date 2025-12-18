---
zendesk:
  article_id: 30589636469533
  name: Forming a new Thread network with Home Assistant Connect ZBT-1
  position: 10
  labels: connect-zbt-1, thread
productName: "Home Assistant Connect&nbsp;ZBT-1"
---

This guide shows you how to use the {{ productName }} as a dedicated Thread adapter. The Thread adapter allows you to connect Thread-based devices, such as Matter-over-Thread devices, to your network.

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-boxed-01.jpg" "Home Assistant Connect ZBT-1 with USB extension cable in packaging" %}
{% stepContent %}

- [Home Assistant Operating System](https://www.home-assistant.io/docs/glossary/#home-assistant-operating-system) installed on your smart home hub. For example:
  - on a Home Assistant Green, where Home Assistant OS is preinstalled
  - on a Home Assistant Yellow or on a Raspberry Pi
- Latest updates installed
- {{ productName }} adapter and a USB extension cable
- Thread devices

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To enable dedicated Thread support

{% steps %}

{% include "connect-zbt-1/getting-started/plug-in-zbt-1-and-extension-cable.md" %}

{% step "Locating the Home Assistant Connect&nbsp;ZBT-1 integration" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-add.png" "Locate the Connect ZBT-1 integration" %}
{% stepContent %}

- Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
- {{ productName }} should now be discovered.
- Select **Add**.

{% endstepContent %}
{% endstep %}

{% step "Selecting the Thread firmware" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1_pick_firmware.png" "Select the Thread firmware" %}
{% stepContent %}

- Select **Use as Thread adapter**.
  - **Result**: This installs the **OpenThread Border Router** add-on which allows you to connect Matter-over-Thread devices.

{% endstepContent %}
{% endstep %}

{% step "Adding the adapter to an area" %}
{% image "/static/img/connect-zbt-1/zbt-thread-add-to-area.png" "Select the Thread firmware" %}
{% stepContent %}

1. When prompted, add the adapter to an area.
2. Then, select **Finish**.

{% endstepContent %}
{% endstep %}

{% step "Viewing the Thread networks" %}
{% image "/static/img/connect-zbt-1/zbt-thread-network.png" "Locate the Thread integrations" %}
{% stepContent %}

1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
   - You should now see the **OpenThread Border Router** and the **Thread** integrations.
2. Select the **Thread** integration, then select the cogwheel.
   - You will now see a **Home Assistant OpenThread Border Router**.
   - You might also see other Thread networks from other border router devices in your home.
   - Refer to the Thread documentation to learn more [about different Thread networks](https://www.home-assistant.io/integrations/thread/#about-different-thread-networks), or [about Thread border routers](https://www.home-assistant.io/integrations/thread/#about-thread-border-routers).
   - You can now [add your Thread-based devices to Home Assistant](https://www.home-assistant.io/integrations/thread/#adding-a-thread-based-device-to-home-assistant).

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Add your Thread-based devices to Home Assistant](https://www.home-assistant.io/integrations/thread/#adding-a-thread-based-device-to-home-assistant)
- [About different Thread networks](https://www.home-assistant.io/integrations/thread/#about-different-thread-networks)
- [About Thread border routers](https://www.home-assistant.io/integrations/thread/#about-thread-border-routers)
