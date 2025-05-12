---
zendesk:
  article_id: 25742476767517
  name: Enabling Thread support
  description: How to enable Tread support on Home Assistant Yellow
  position: 4
  labels: yellow, setup, Thread
---

Step-by-step instructions on configuring the Home Assistant Yellow for Thread support. This setup facilitates the connection of Matter-over-Thread devices to your network.

> This guide installs a firmware which supports only Thread! If you use your Yellow to control Zigbee devices, you will no longer be able to control them after installing the Thread firmware. If you want to use both Thread and Zigbee with your Home Assistant Yellow, you will need an additional radio, such as [Home Assistant Connect ZBT-1](https://www.home-assistant.io/connectzbt1).

## Prerequisites

This guide assumes you have the following setup:

- Home Assistant Yellow up and running.
- Home Assistant OS installation.
- Multiprotocol support disabled: Refer to the [Disable multiprotocol support](/hc/en-us/articles/25744235797661-Disabling-multiprotocol-support) procedure.

![screenshot of Zigbee integration card](/static/img/yellow/yellow-zha-setup.png)

## Enabling dedicated Thread support

{% steps %}
{% step "Deleting the Zigbee Home Automation (ZHA) integration" %}
{% image "/static/img/yellow/yellow-zha-delete.png" "Zigbee Home Automation integration page with delete button" %}
{% stepContent %}

- If you have a new Yellow or did not setup Zigbee Home Automation (ZHA) yet, skip to Step 2.
- If you are using the Yellow with Zigbee Home Automation (ZHA), this step removes Zigbee Home Automation (ZHA) from the integration list.
  1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
  2. Select the **Zigbee Home Automation integration** card.
  3. Select the menu behind the **Yellow** integration and choose **Delete**.
  4. In the pop-up menu, select **Delete again** to confirm deletion.

{% endstepContent %}
{% endstep %}

{% step "Configuring Yellow for Thread support" %}
{% image "/static/img/yellow/configure_yellow.png" "Configure Yellow for Thread support on the Yellow hardware page" %}
{% stepContent %}

1. Go to [**Settings** > **System** > **Hardware**](https://my.home-assistant.io/redirect/hardware/).
2. Select **Configure**.
3. Select **Switch between Zigbee and Thread** firmware.

{% endstepContent %}
{% endstep %}

{% step "Selecting the Thread firmware" %}
{% image "/static/img/yellow/pick_firmware_thread.png" "Dialog to pick the firmware" %}
{% stepContent %}

1. Under **Pick your firmware**, select **Thread**.
   - **Result**: **The OpenThread Border Router** add-on is installed.
   - The dialog informs you that Connect ZBT-1 now acts as an OpenThread border router. Select **Submit**.
2. Then, select **Finish**.

{% endstepContent %}
{% endstep %}

{% step "Locating the Thread integration" %}
{% image "/static/img/yellow/otbr_thread_integrations.png" "Open Thread Border Router and Thread integration cards on integration page" %}
{% stepContent %}

- Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
- You should now see the **OpenThread Border Router** and the **Thread** integrations.

{% endstepContent %}
{% endstep %}

{% step "Ignoring Yellow as a Zigbee Home Automation device" %}
{% image "/static/img/yellow/yellow-zha-delete-discovery.png" "Ignore button on ZHA integration card" %}
{% stepContent %}

1. On the Yellow ZHA card, select **Ignore**.
2. Confirm ignoring the Yellow for Zigbee Home Automation (ZHA) usage by selecting **Ignore** again.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Home Assistant Connect ZBT-1](https://www.home-assistant.io/connectzbt1)
- [Thread integration documentation](https://www.home-assistant.io/integrations/thread/)
- [About firmware options](/hc/en-us/articles/25616122309405-About-firmware-options)
- [Disable multiprotocol support](/hc/en-us/articles/25744235797661-Disabling-multiprotocol-support)
