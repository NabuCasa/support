---
zendesk:
  article_id: 31373831675933
  name: Switching from Thread to Zigbee support on Home Assistant Connect ZBT-1
  position: 60
  labels: connect-zbt-1, thread
productName: Home Assistant Connect&nbsp;ZBT-1
---

This guide shows you how to use the {{ productName }} as a dedicated Zigbee adapter when you have previously used it for Thread.

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zbt-1/zbt-thread-preferred-network.png" "Screenshot showing the Thread network page" %}
{% stepContent %}

- Connected {{ productName }}.
- [Home Assistant Operating System](https://www.home-assistant.io/docs/glossary/#home-assistant-operating-system) installation.
- You are currently using {{ productName }} as a Thread adapter, but want to use it as a Zigbee adapter from now on.

- **Important:** By following this guide, you will install firmware that supports only Zigbee! You will no longer be able to control your Thread devices with this adapter after installing the Zigbee firmware. Depending on whether you want to keep your Thread network (on another device) or not, follow the steps in one of the following scenarios:
  - **Scenario 1: You want to keep the Thread network**: If you use your existing {{ productName }} as a border router to run a Thread network, add another border router. Otherwise, you will lose your Thread network.
  - **Scenario 2: You no longer need the Thread network**: If you use your existing {{ productName }} as a border router to run a Thread network, and you no longer need a Thread network, follow these steps to uninstall the **OpenThread Border Router** add-on:

    1. Go to **Settings** > **Add-ons**.
    2. Select the **OpenThread Border Router** add-on and choose **Uninstall**.

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To switch from Thread to Zigbee support

{% steps %}
{% step "Selecting the Zigbee firmware" %}
{% image "/static/img/connect-zbt-1/zbt-use-as-zigbee-adapter.png" "Select use as Zigbee adapter" %}
{% stepContent %}

1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
2. Select the **{{ productName }}** integration card.
3. Select the cog wheel behind **{{ productName }}**.
4. Select **Use as Zigbee adapter**.
   - Then, select **Recommended installation**.

{% endstepContent %}
{% endstep %}

{% step "Adding the adapter to an area" %}
{% image "/static/img/connect-zbt-1/zbt-thread-add-to-area.png" "Add to area" %}
{% stepContent %}

1. When prompted, add the adapter to an area.
2. Then, select **Finish**.

{% endstepContent %}
{% endstep %}

{% step "Viewing the Zigbee integration" %}
{% image "/static/img/connect-zbt-1/zbt-1-zha-discovered.png" "Locate the Zigbee integrations" %}
{% stepContent %}

1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
   - You should now see the **Zigbee Home Automation** integration.
2. You can now [add your Zigbee devices to Home Assistant](https://www.home-assistant.io/integrations/zha/#adding-devices).

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Disabling multiprotocol support](/hc/en-us/articles/26124969612445)
- [Adding Zigbee devices to Home Assistant](https://www.home-assistant.io/integrations/zha/#adding-devices)
