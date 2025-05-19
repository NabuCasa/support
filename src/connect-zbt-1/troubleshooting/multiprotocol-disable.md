---
zendesk:
  article_id: 26124969612445
  name: Disabling multiprotocol support
  position: 1
  labels: connect zbt-1, thread, troubleshooting
---

## Prerequisites

This guide assumes you have already completed the following steps:

{% steps %}
{% prereq %}
{% image "/static/img/connect-zbt-1/skyconnect-zha-setup.png" "Screenshot showing the Zigbee integration page" %}
{% stepContent %}

- Have the **Zigbee Home Automation (ZHA)** integration up and running.
- Enabled multiprotocol support

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To disable multiprotocol support

{% steps %}
{% step "Configuring radio multiprotocol support" %}
{% image "/static/img/connect-zbt-1/disable_multiprotocol_sc_01.png" "Screenshot showing the Configure IEEE 802.15.4 radio multiprotocol support option" %}
{% stepContent %}

1. Go to **[Settings > System > Hardware](https://my.home-assistant.io/redirect/hardware/)**.
2. Under **Home Assistant SkyConnect**, select **Configure**.
3. Select the **Configure IEEE 802.15.4 radio multiprotocol support** option.

{% endstepContent %}
{% endstep %}

{% step "Removing multiprotocol support" %}
{% image "/static/img/connect-zbt-1/disable_multiprotocol_sc_02.png" "Screenshot showing the Configure IEEE 802.15.4 radio multiprotocol support option" %}
{% stepContent %}

1. Select **Remove 802.15.4 radio multiprotocol support**.
2. Then, select the **Disable multiprotocol support** checkbox.
3. Wait for the setup to complete.

**Info**: Your Zigbee devices will continue to work. Your Thread devices will continue working only if you have another Thread border router set up.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [About firmware options](/hc/en-us/articles/26124493529117)
- [Zigbee Home Automation integration documentation](https://www.home-assistant.io/integrations/zha/)
- [Thread integration documentation](https://www.home-assistant.io/integrations/thread/)
