---
zendesk:
  article_id: 26124969612445
  name: Disabling multiprotocol support
  position: 1
  labels: connect zbt-1, thread, troubleshooting
---

## Prerequisites

This guide assumes you have already completed the following steps:

- Have the **Zigbee Home Automation (ZHA)** integration up and running.
- Enabled multiprotocol support

  ![Screenshot showing the Zigbee integration page](/static/img/connect-zbt-1/skyconnect-zha-setup.png)

## To disable multiprotocol support

1. Configuring radio multiprotocol support.

   1. Go to **[Settings > System > Hardware](https://my.home-assistant.io/redirect/hardware/)**.
   2. Under **Home Assistant SkyConnect**, select **Configure**.
   3. Select the **Configure IEEE 802.15.4 radio multiprotocol support** option.

    ![Screenshot showing the Configure IEEE 802.15.4 radio multiprotocol support option](/static/img/connect-zbt-1/disable_multiprotocol_sc_01.png)

2. Removing multiprotocol support.

   1. Select **Remove 802.15.4 radio multiprotocol support**.
   2. Then, select the **Disable multiprotocol support** checkbox.
   3. Wait for the setup to complete.

  ![Screenshot showing the Configure IEEE 802.15.4 radio multiprotocol support option](/static/img/connect-zbt-1/disable_multiprotocol_sc_02.png)

  > **Note:** Your Zigbee devices will continue to work. Your Thread devices will continue working only if you have another Thread border router set up.

## Related topics

- [About firmware options](/hc/en-us/articles/26124493529117)
- [Zigbee Home Automation integration documentation](https://www.home-assistant.io/integrations/zha/)
- [Thread integration documentation](https://www.home-assistant.io/integrations/thread/)
