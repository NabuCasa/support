---
zendesk:
  article_id: 25744235797661
  name: Disabling multiprotocol support
  description: How to disable multiprotocol support on Home Assistant Yellow
  position: 4
  labels: yellow, setup, Thread, Zigbee
---

Step-by-step instructions on disabling multiprotocol support on Home Assistant Yellow.

## Prerequisites

This guide assumes you have already completed the following steps:

- Have the **Zigbee Home Automation (ZHA)** integration up and running.
- Enabled multiprotocol support

![Screenshot showing the Multi-Pan integration entry](/static/img/yellow/yellow-multiprotocol-new-05.png)

## Disabling multiprotocol support

1. Configure radio multiprotocol support.
   1. Go to [**Settings** > **System** > **Hardware**](https://my.home-assistant.io/redirect/hardware/).
   2. Under **Home Assistant Yellow**, select **Configure**.
   3. Select the **Configure IEEE 802.15.4 radio multiprotocol support** option.

    ![Screenshot showing where to Configure IEEE 802.15.4 radio multiprotocol support](/static/img/yellow/disable_multiprotocol_01.png)

2. Configure Yellow for Thread support.
   1. Select **Remove 802.15.4 radio multiprotocol support**.
   2. Then, select the **Disable multiprotocol support** checkbox.
   3. Wait for the setup to complete.

    ![Screenshot showing where to Remove 802.15.4 radio multiprotocol support](/static/img/yellow/disable_multiprotocol_02.png)

## Related topics

- [Zigbee Home Automation (ZHA) integration documentation](https://www.home-assistant.io/integrations/zigbee/)
- [Thread integration documentation](https://www.home-assistant.io/integrations/thread/)
- [About firmware options](/hc/en-us/articles/25616122309405)