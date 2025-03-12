---
zendesk:
  article_id: 25620486925085
  name: Unable to reach Home Assistant Cloud
  position: 3
  labels: cloud
---

## 403 Forbidden

### Symptom

You are using the [Remote UI](/config/remote/) feature. Instead of the Home Assistant user interface, the browser shows a _403 Forbidden_ message.

### Cause

_403 Forbidden_ indicates that IP banning has been configured in your `configuration.yaml` file and that the ban has been triggered.

```yaml
# Example configuration.yaml entry
http:
  trusted_proxies:
    - 10.0.0.200
    - 172.30.33.0/24
  ip_ban_enabled: true
  login_attempts_threshold: 5
```

### Resolution

1. Open your [`configuration.yaml`](https://www.home-assistant.io/docs/configuration/) file.
2. If `ip_ban_enabled` is set to true:

   - In the configuration folder, you should see an `ip_bans.yaml` file.
   - In the `ip_bans.yaml` file, delete the `127.0.0.1` entry.

     ```yaml
     127.0.0.1:
       banned_at: "2023-07-17T14:20:03"
     ```

3. To apply the changes, save the `ip_bans.yaml` file and restart Home Assistant.

## "Unable to reach Home Assistant Cloud"

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
