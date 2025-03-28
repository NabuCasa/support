---
zendesk:
  article_id: 25620486925085
  name: Unable to reach Home Assistant Cloud
  position: 3
  labels: cloud
---

There are multiple reasons Home Assistant Cloud cannot be reached. This page provides instructions how to troubleshoot the "Unable to connect" message.

## Message: "Unable to reach Home Assistant Cloud"

### Symptom

Under [**System** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/):

- The **Cloud connection status** is **Connecting&#8230;**
- You see a message **Unable to connect**.
  <img src="/static/img/cloud/coud_unable_to_connect_03.png" alt="Unable to connect to Home Assistant Cloud">

### Cause

This error indicates a network issue. It often occurs when the Home Assistant host has a bad IPv6 network configuration. Fixing the network configuration or disabling IPv6 on the host should resolve this error.

### Resolution

1. To check the IPv6 connection, in your browser, open [test-ipv6.com](https://test-ipv6.com/).
   - Try the steps suggested by the website.
2. If there is an IPv6 issue and the step above didn't work: try disabling IPv6:
   - In the UI, go to [**System** > **Network**](https://my.home-assistant.io/redirect/network/).
   - Under **Configure network interfaces**, expand the **IPv6** dropdown.
   - Choose the **disabled** option and save the changes.
   - To have all network settings applied from scratch, reboot the host. Select **Settings** > **System** > Restart Home Assistant (top right) > **Reboot system**.

## Related topic

- [403 Forbidden](/hc/en-us/articles/26203603012509/l)