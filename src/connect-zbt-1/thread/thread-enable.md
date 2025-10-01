---
zendesk:
  article_id: 26124710072861
  name: Switching from Zigbee to Thread support on Home Assistant Connect ZBT-1
  position: 1
  labels: connect zbt-1, thread
---

This guide shows you how to use the Home Assistant Connect&nbsp;ZBT-1 as a dedicated Thread adapter when you have previously used it for Zigbee. The Thread adapter allows you to connect Thread-based devices, such as Matter-over-Thread devices, to your network.

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-zha-setup.png" "Screenshot showing the Zigbee integration page" %}
{% stepContent %}

- Connected Home Assistant Connect&nbsp;ZBT-1.
- [Home Assistant Operating System](https://www.home-assistant.io/docs/glossary/#home-assistant-operating-system) installation.
- You are currently using Home Assistant Connect&nbsp;ZBT-1 as a Zigbee adapter, but want to use it as a Thread adapter from now on.
- You don't have Multiprotocol enabled. If you do, disable it by following the steps in the procedure on [disabling multiprotocol support](/hc/en-us/articles/26124969612445).
- **Important:** This guide installs firmware that supports only Thread! You will no longer be able to control your Zigbee devices with this adapter after installing the Thread firmware.

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To switch from Zigbee to Thread support

{% steps %}
{% step "Choosing your scenario" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-zha-delete.png" "Migrate your Zigbee network or delete the ZHA integration" %}
{% stepContent %}

- **Scenario 1**: If you use your existing Connect ZBT-1 to run a Zigbee network, [migrate your Zigbee network](/hc/en-us/articles/26123655295261) to another controller.
  - Otherwise, if you delete the Zigbee network, even if you set it up again, all of your entity customizations will be gone.
- **Scenario 2**: If you use your existing Connect ZBT-1 to run a Zigbee network, and you no longer need a Zigbee network, follow these steps to remove ZHA from the integration list:

  1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
  2. Select the **Zigbee Home Assistant** integration card.
  3. Select the three dots menu behind **Home Assistant Connect ZBT-1** and choose **Delete**.

{% endstepContent %}
{% endstep %}

{% step "Selecting the Thread firmware" %}
{% image "/static/img/connect-zbt-1/zbt-switch-to-thread.png" "Select the Thread firmware" %}
{% stepContent %}

1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
2. Select the **Home Assistant Connect ZBT-1** integration card.
3. Select the cog wheel behind **Home Assistant Connect ZBT-1**.
4. Select **Use as Thread adapter**.
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

- [Disabling multiprotocol support](/hc/en-us/articles/26124969612445)
- [Migrating your Zigbee network](/hc/en-us/articles/26123655295261)
