---
zendesk:
  article_id: 25742476767517
  name: Switching from Zigbee to Thread support
  description: How to enable Tread support on Home Assistant Yellow
  position: 4
  labels: yellow, setup, Thread
---

Step-by-step instructions on configuring the Home Assistant Yellow for Thread support when you have previously used it for Zigbee. The Thread adapter allows you to connect Thread-based devices, such as Matter-over-Thread devices, to your network.

This guide is about switching from Zigbee to Thread support on Yellow's built-in radio chip. If your goal is to keep using Zigbee and using Thread in addition, you can use an external adapter for Thread, such as the [Home Assistant Connect ZBT-1](https://www.home-assistant.io/connectzbt1).

## Prerequisites

This guide assumes you have the following setup:

{% steps %}
{% prereq %}
{% image "/static/img/yellow/yellow-zha-setup.png" "Screenshot of Zigbee integration card" %}
{% stepContent %}

- Home Assistant Yellow up and running.
- Home Assistant OS installation.
- Multiprotocol support disabled: Refer to the [Disable multiprotocol support](/hc/en-us/articles/25744235797661-Disabling-multiprotocol-support) procedure.
- **Important:** This guide installs firmware that supports only Thread! You will no longer be able to control your Zigbee devices with this adapter after installing the Thread firmware. Depending on whether you want to keep your Zigbee network (on an other device) or not, follow the steps in one of the following scenarios:
  - **Scenario 1: You want to keep the Zigbee network**: If you use your Yellow to run a Zigbee network, [migrate your Zigbee network](https://www.home-assistant.io/integrations/zha/#migrating-to-a-new-zigbee-coordinator-adapter-inside-zha) to another adapter. Otherwise, if you delete the Zigbee network, even if you set it up again, all of your entity customizations will be gone.
  - **Scenario 2: You no longer need the Zigbee network**: If you use your Yellow to run a Zigbee network, and you no longer need a Zigbee network, follow these steps to remove ZHA from the integration list:

    1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
    2. Select the **Zigbee Home Assistant** integration card.
    3. Select the three dots menu behind **Home Assistant Yellow** and choose **Delete**.

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## Enabling dedicated Thread support

{% steps %}

{% step "Configuring Yellow for Thread support" %}
{% image "/static/img/yellow/configure_yellow.png" "Configure Yellow for Thread support on the Yellow hardware page" %}
{% stepContent %}

1. Go to [**Settings** > **System** > **Hardware**](https://my.home-assistant.io/redirect/hardware/).
2. Select **Configure**.
3. Select **Switch between Zigbee and Thread firmware**.

{% endstepContent %}
{% endstep %}

{% step "Selecting the Thread firmware" %}
{% image "/static/img/yellow/pick_firmware_thread.png" "Dialog to pick the firmware" %}
{% stepContent %}

1. Under **Pick your protocol**, select **Use as Thread adapter**.
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
{% endsteps %}

## Related topics

- [Home Assistant Connect ZBT-1](https://www.home-assistant.io/connectzbt1)
- [Thread integration documentation](https://www.home-assistant.io/integrations/thread/)
- [About firmware options](/hc/en-us/articles/25616122309405-About-firmware-options)
- [Disable multiprotocol support](/hc/en-us/articles/25744235797661-Disabling-multiprotocol-support)
- [Migrating your Zigbee network](https://www.home-assistant.io/integrations/zha/#migrating-to-a-new-zigbee-coordinator-adapter-inside-zha)
