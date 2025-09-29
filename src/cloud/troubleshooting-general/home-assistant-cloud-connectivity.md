---
zendesk:
  article_id: 25620486925085
  name: Unable to reach Home Assistant Cloud
  position: 3
  labels: cloud
---

There are multiple reasons Home Assistant Cloud cannot be reached. This page provides instructions how to troubleshoot the "Unable to reach the Home Assistant Cloud" message.

## Message: "Unable to reach the Home Assistant Cloud"

### Symptom

Under [**System** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/):

- This message can show in 2 different situations:
  - You are logged in to Home Assistant Cloud and the **Cloud connection status** is **Connecting**.
  - This is the first time you are trying to log-in to Home Assistant Cloud.
- You see a message **Unable to reach the Home Assistant Cloud**.
  <img src="/static/img/cloud/coud_unable_to_connect_03.png" alt="Unable to connect to Home Assistant Cloud">

### Cause

This error indicates a network issue. It often occurs when the Home Assistant host has a bad IPv6 network configuration. Fixing the network configuration or disabling IPv6 on the host should resolve this error.

### Resolution

Try disabling IPv6:
   - In the UI, go to [**System** > **Network**](https://my.home-assistant.io/redirect/network/).
   - Under **Configure network interfaces**, expand the **IPv6** dropdown.
   - Choose the **disabled** option and save the changes.
   - To have all network settings applied from scratch, reboot the host. Select **Settings** > **System** > Restart Home Assistant (top right) > **Reboot system**.



## Related topic

- [403 Forbidden](/hc/en-us/articles/26203603012509)
