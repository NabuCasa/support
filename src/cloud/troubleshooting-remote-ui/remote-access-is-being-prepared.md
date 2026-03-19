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

If none of the above applies, check if there is an IPv6 issue.

1. To check the IPv6 connection, in your browser, open [test-ipv6.com](https://test-ipv6.com/).

   - Try the steps suggested by the website.

2. If the IPv6 test revealed that there is an IPv6 issue, and if you are not running Home Assistant on a VM, try disabling IPv6:
   - In the UI, go to [**System** > **Network**](https://my.home-assistant.io/redirect/network/).
   - Under **Configure network interfaces**, expand the **IPv6** dropdown.
   - Choose the **disabled** option and save the changes.
   - To have all network settings applied from scratch, reboot the host. Select **Settings** > **System** > **Restart Home Assistant** (top right) > Expand Advanced Options > **Reboot system**.

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
2. Use the **Submit a ticket** button on this page and include the downloaded file with your request.
   - This file will help identify the root cause of your issue.
