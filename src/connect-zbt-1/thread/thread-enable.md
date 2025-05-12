---
zendesk:
  article_id: 26124710072861
  name: Enabling Thread support
  position: 1
  labels: connect zbt-1, thread
---

This guide outlines the steps for configuring the Home Assistant Connect&nbsp;ZBT-1 for dedicated Thread support. This setup facilitates the connection of Matter-over-Thread devices to your network.

## Prerequisites

This guide assumes you have the following setup:

- Connected Home Assistant Connect&nbsp;ZBT-1.
- [Home Assistant Operating System](https://www.home-assistant.io/docs/glossary/#home-assistant-operating-system) installation.
- You don't have Multiprotocol enabled. If you do, disable it by following the steps in the procedure on [disabling multiprotocol support](/hc/en-us/articles/26124969612445).
- **Important:** This guide installs firmware that supports only Thread! If you use your Connect ZBT-1 to control Zigbee devices, you will no longer be able to control them after installing the Thread firmware.
- **Notice:** [Home Assistant Supervised](https://www.home-assistant.io/docs/glossary/#home-assistant-supervised) installation type: The Thread border router has specific requirements for IPv6 configuration (for example, IPv6 routing needs to be enabled). The add-on is being tested on the [Home Assistant Operating System](https://www.home-assistant.io/docs/glossary/#home-assistant-operating-system). If you experience connectivity issues, try using a Home Assistant OS installation.

  ![Screenshot showing the Zigbee integration page](/static/img/connect-zbt-1/connect-zbt-1-zha-setup.png)

## To enable dedicated Thread support

{% steps %}
{% step "Choosing your scenario" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-zha-delete.png" "Migrate your Zigbee network or delete the ZHA integration" %}
{% stepContent %}

- **Scenario 1**: If you have a new Connect ZBT-1 or did not set up Zigbee Home Automation (ZHA) yet, skip to Step 2.
- **Scenario 2**: If you use your existing Connect ZBT-1 to run a Zigbee network, [Migrate your Zigbee network](/hc/en-us/articles/26123655295261) to another controller.
  - Otherwise, if you delete the Zigbee network, even if you set it up again, all of your entity customizations will be gone.
- **Scenario 3**: If you are using the Connect ZBT-1 with Zigbee Home Automation (ZHA), and you no longer need a Zigbee network, follow these steps to remove ZHA from the integration list:

  1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
  2. Select the **Zigbee Home Automation** integration card.
  3. Select the menu behind the **Connect ZBT-1 v1.0** integration and choose **Delete**.
  4. On the pop-up menu, select **Delete** again to confirm deletion.

{% endstepContent %}
{% endstep %}

{% step "Configuring the Home Assistant Connect&nbsp;ZBT-1" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1_configure.png" "Configure the Connect ZBT-1" %}
{% stepContent %}

1. Go to [**Settings** > **System** > **Hardware**](https://my.home-assistant.io/redirect/hardware/).
2. Under **Home Assistant Connect ZBT-1**, select **Configure**.

{% endstepContent %}
{% endstep %}

{% step "Selecting the Thread firmware" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1_pick_firmware.png" "Select the Thread firmware" %}
{% stepContent %}

1. Select **Use as a Thread border router**.
   - **Result**: This will install the OpenThread Border Router add-on.
2. The dialog informs you that Home Assistant Connect&nbsp;ZBT-1 now acts as an OpenThread border router. Select **Submit**.
3. Then, select **Finish**.

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
