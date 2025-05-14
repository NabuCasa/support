---
zendesk:
  article_id: 26205125179549
  name: Remote control - Computer not allowed
  position: 33
  labels: cloud
---

## Logging in with trusted networks: Your computer is not allowed

### Symptom

When trying to access the Home Assistant user interface, you see the message:

- **You're about to give `https://somekey.ui.nabu.casa/` access to your Home Assistant instance. Logging in with Trusted Networks. Login aborted: Your computer is not allowed.**

    <img src="/static/img/cloud/login-trusted-networks-01.png" alt="Unable to connect to Home Assistant Cloud">

### Cause

This message indicates that you have [trusted networks](https://www.home-assistant.io/docs/authentication/providers/#trusted-networks) configured in the `configuration.yaml` file. Due to the way the [Remote Access is set up](/hc/en-us/articles/25619268678557), you cannot use `trusted_networks` over the cloud URL.

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
