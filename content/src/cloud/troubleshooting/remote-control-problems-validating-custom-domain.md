---
zendesk:
  article_id: 25620466293533
  name: Remote control
  position: 9
  labels: cloud
---

## Problems validating custom domain

If you are using Cloudflare for DNS, make sure the records do not have proxy enabled for the DNS records.

You can use a tool like [dnschecker.org](https://dnschecker.org/) to see if the DNS records has the expected values.

## "Remote control is being prepared"

### Condition

Under [**System** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/), **Remote connection**, you see the following message:
**Remote control is being prepared. We will notify you when it's ready**.
<img src="/static/img/cloud/cannot-retrieve-certificate-01.png" alt="Remote control is being prepared">

### Description

This message indicates that there is an issue generating the SSL certificate that is used to create an encrypted connection between your Home Assistant instance and Nabu&nbsp;Casa&nbsp;Cloud.

### Remedy

Depending on what is causing this issue, there are different steps you can try to resolve this.

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

If resetting cloud data **did not resolve the issue**, **do not reset it again** and instead [contact Nabu Casa support](https://www.nabucasa.com/support/).

## Logging in with trusted networks: Your computer is not allowed

### Symptom

When trying to access the Home Assistant user interface, you see the message:

- **You're about to give `https://somekey.ui.nabu.casa/` access to your Home Assistant instance. Logging in with Trusted Networks. Login aborted: Your computer is not allowed.**

    <img src="/static/img/cloud/login-trusted-networks-01.png" alt="Unable to connect to Home Assistant Cloud">

### Cause

This message indicates that you have [trusted networks](https://www.home-assistant.io/docs/authentication/providers/#trusted-networks) configured in the `configuration.yaml` file. Due to the way the [Remote UI is set up](/config/remote/#how-it-works), you cannot use `trusted_networks` over the cloud URL.

### Resolution

There's two ways to resolve this. Option 1 is to not use trusted networks at all. Option 2 is to use trusted networks, but only locally.

#### Option 1: Do not use `trusted_networks`

1. Open your `configuration.yaml` file.
2. Delete the entire `type: trusted_networks` section.

   ```yaml
   homeassistant:
   auth_providers:
     - type: trusted_networks
       trusted_networks:
         - 192.168.0.0/24
   ```

3. If you like, [set up Multi-factor authentication](https://www.home-assistant.io/docs/authentication/multi-factor-auth/).
4. To apply the new network settings, restart Home Assistant.
5. Log in with your credentials and multi-factor authentication.

#### Option 2: Keep using `trusted_networks`, but only locally

1. Open your `configuration.yaml` file.
2. Make sure that in addition to `type: trusted_networks`, you also have a `type: homeassistant` section.

   ```yaml
   homeassistant:
   auth_providers:
     - type: homeassistant
     - type: trusted_networks
       trusted_networks:
         - 192.168.0.0/24
   ```

3. If you like, [set up multi-factor authentication](https://www.home-assistant.io/docs/authentication/multi-factor-auth/).
4. To apply the new network settings, restart Home Assistant.
5. In the login screen, choose **Home Assistant Local**.
   - Log in with your credentials and multi-factor authentication.

## "User cannot use remote control"

### Symptom

One of your Home Assistant users cannot access Home Assistant remotely.

### Cause

This indicates that this user is restricted to local access.

### Resolution

To allow people to access Home Assistant remotely, perform the following steps:

1. Go to [**Settings** > **People**](https://my.home-assistant.io/redirect/people/).
2. Select the user.
3. Enable **Allow person to login**.
4. Make sure the **Can only log in from the local network** option is disabled.
   <img src="/static/img/cloud/login_from_local_network_only.png" alt="Disable toggle on 'Can only login from local network option'">
