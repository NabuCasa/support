---
zendesk:
  article_id: 26203603012509
  name: Unable to reach Home Assistant Cloud - 403 forbidden
  position: 30
  labels: cloud
---

There are multiple reasons Home Assistant Cloud cannot be reached. This page provides instructions how to troubleshoot when you see the "403 Forbidden" message.

## Message: 403 Forbidden

### Symptom

You are using [remote access](/hc/en-us/articles/25619268678557) feature. Instead of the Home Assistant user interface, the browser shows a _403 Forbidden_ message.

### Cause

_403 Forbidden_ indicates that IP banning is enabled on your Home Assistant system and that the address you are connecting from has been banned. A ban blocks every request from that address, not just the login page.

Which address was banned depends on your Home Assistant version:

- **Home Assistant 2026.9 or newer**: remote access forwards the real IP address of the incoming request, so the banned entry is the address you were connecting from at the time. If you were on mobile data, this is an address belonging to your mobile provider.
- **Home Assistant 2026.8 or older**: remote access did not forward the IP address of the incoming request. All remote visitors appeared as `127.0.0.1`, so a single failed login from anywhere banned every remote connection at once. If you see this, we recommend updating to Home Assistant 2026.9 or newer.

### Resolution

You need access to your configuration folder to remove a ban. If you cannot reach Home Assistant at all, use a local network connection, the [File editor add-on](https://my.home-assistant.io/redirect/supervisor/) from a device on your home network, or a Samba or SSH connection.

1. In your configuration folder, open the `ip_bans.yaml` file.
2. Delete the entry for the banned address, including its `banned_at` line.

   ```yaml
   198.51.100.24:
     banned_at: "2026-08-17T14:20:03"
   ```

   - To clear all bans, delete the whole file. Home Assistant recreates it the next time an address is banned.
   - If you have upgraded to Home Assistant 2026.9 or newer and still see a `127.0.0.1` entry, it is left over from before the upgrade. It no longer refers to remote visitors and on most systems blocks nothing, but it is worth removing.

3. Save the file and restart Home Assistant to apply the changes.

### Prevention

Bans are triggered by the **Login attempts before ban** setting under [**Settings** > **System** > **Network**](https://my.home-assistant.io/redirect/network/). If you are being banned more often than you expect, the threshold is probably set too low: Home Assistant counts failed attempts per address with no time limit, and counts any request with invalid authentication, not just mistyped passwords.

{% callout "note" %}

On Home Assistant 2026.7 or earlier, these options are not in the user interface. IP banning was set up in your [`configuration.yaml`](https://www.home-assistant.io/docs/configuration/) file instead, using `ip_ban_enabled` and `login_attempts_threshold` under `http:`.

{% endcallout %}

For guidance on choosing a threshold, see [Remote access - limitations](/hc/en-us/articles/26523862491165).

## Related topics

- [Remote access - limitations](/hc/en-us/articles/26523862491165)
- [Remote access - security aspects](/hc/en-us/articles/26508882007581)
- [Unable to reach Home Assistant Cloud](/hc/en-us/articles/25620486925085)
