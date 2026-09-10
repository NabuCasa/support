---
zendesk:
  article_id: 26205061961373
  name: Remote access is being prepared
  position: 20
  labels: cloud
---

## Symptom

Under [**System** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/), **Remote connection**, you see the following message:

**Remote access is being prepared. We will notify you when it's ready**.

## Description

This message indicates that there is an issue generating the SSL certificate that is used to create an encrypted connection between your Home Assistant instance and Nabu&nbsp;Casa&nbsp;Cloud.

## Resolution

Before anything else, reboot your Home Assistant host system (not just Home Assistant itself).
This ensures all networking components such as ethernet interfaces, DNS resolution, and Supervisor-managed services, are fully restarted.

- From the UI: go to Settings → 3 dots in the upper right corner → Restart Home Assistant → Expand Advanced Options → Reboot system.
- Wait a few minutes for the system to come back online and reconnect to the Nabu Casa Cloud.


If the status remains the same after a reboot, there are different steps you can try to resolve this.

1. Wait for 5 minutes. It may take a while to generate the certificate.
2. Check if there is a general network issue.

If none of the above applies, the host's IPv6 configuration is the next thing to try. Turning IPv6 off and back on rebuilds it from scratch, so treat this as a reset rather than as a permanent setting.

1. In the UI, go to [**System** > **Network**](https://my.home-assistant.io/redirect/network/).
2. Under **Configure network interfaces**, expand the **IPv6** dropdown, choose the **disabled** option, and save the changes.
3. To have all network settings applied from scratch, reboot the host. Select **Settings** > **System** > **Restart Home Assistant** (top right) > Expand Advanced Options > **Reboot system**.
4. Once the certificate has been issued and remote access is working, set **IPv6** back to the option it was on before and save the changes.

Thread and Matter devices need IPv6 on your local network, so leaving it disabled can stop them working. If the problem returns as soon as you put the setting back, there is something in your own IPv6 configuration that needs addressing on your network.

If Home Assistant runs on a virtual machine, the interface's IPv6 configuration comes from the hypervisor rather than from Home Assistant, so the change has to be made there.

If the problem persists, try resetting your Home Assistant Cloud data and requesting a new certificate:

1. Open [**Settings** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/).
2. Select the **three dots menu** (⋮) in the upper-right corner.
3. Select **Reset cloud data**.
4. Restart Home Assistant:
   - Go to **Settings** > **System** > **Restart Home Assistant** (top right).
   - Select **Reboot system**.
5. Once Home Assistant restarts, go back to the **Home Assistant Cloud** page and sign in with your Nabu Casa credentials.
6. Wait a few minutes while Home Assistant attempts to request and download a new SSL certificate for your remote URL.

If resetting cloud data did not resolve the issue, do not reset it again. Instead:

1. Download and attach the support package file using the 3 dots in the upper right corner of the Home Assistant Cloud page ([**Settings** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/)).
2. Use the **Submit a ticket** button at the top of this page and include the downloaded file with your request.
   - This file will help identify the root cause of your issue.
