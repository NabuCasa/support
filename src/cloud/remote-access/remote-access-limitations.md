---
zendesk:
  article_id: 26523862491165
  name: Remote access - Limitations
  position: 60
  labels: cloud
---

Until Home Assistant 2026.9, the IP address of the incoming request was not forwarded to Home Assistant. Every remote visitor appeared to come from `127.0.0.1`, which is why we advised against combining remote access with IP banning.

From Home Assistant 2026.9 onwards, Home Assistant sees the real IP address of each remote visitor. This means you can now use IP banning and remote access at the same time.

## Using IP banning with remote access

On Home Assistant 2026.9 or newer, a ban now applies only to the address the failed logins came from, instead of shutting out every remote connection at once.

To configure IP banning, in Home Assistant, go to [**Settings** > **System** > **Network**](https://my.home-assistant.io/redirect/network/) and, under the Home Assistant server settings, enable **IP banning**.

### Choosing a login attempt threshold

**Login attempts before ban** controls how many failed attempts an IP address can make before it is banned. It is set to `-1` by default, which means no address is ever banned automatically.

Allow more attempts than feels intuitive. A very low threshold sounds stricter, but in practice it is far more likely to lock you out than to stop an attacker:

- **The count has no time limit.** Home Assistant counts failed attempts per IP address until the next successful login from that address, or until Home Assistant restarts. It is not a sliding window such as "a few attempts within ten minutes" - a typo from last week still counts towards today's total.
- **More than just wrong passwords count.** Any request that reaches Home Assistant with invalid authentication increases the count. An expired or revoked long-lived access token, an old app installation on a spare phone, or a script still using deleted credentials can all use up your attempts without anyone typing a password.
- **Bans do not expire.** Removing one means editing a file on your Home Assistant system and restarting.
- **Raising the threshold costs you very little.** Guessing a strong password takes many thousands of attempts, so a few more allowed attempts makes no practical difference to an attacker. Being locked out of your own system makes a significant difference to you.

If several people in your household use Home Assistant, or you have a lot of devices and scripts talking to the API, allow more attempts rather than fewer.

### Before you enable IP banning

- **A ban blocks everything from that address, not just the login page.** Once banned, every request from that IP address gets a [403 Forbidden](/hc/en-us/articles/26203603012509) response.
- **You can lock yourself out.** A ban stays in place until you remove it from the `ip_bans.yaml` file in your configuration folder and restart Home Assistant. If the banned address is the one you are connecting from and you are away from home, you will need local access to your system to undo it.
- **Mobile connections are unpredictable.** When you use mobile data, the address Home Assistant sees belongs to your mobile provider and is shared with many other customers. It also changes regularly. This makes bans less effective against a determined attacker, and can lock you out unexpectedly.
- **IP banning is not your main protection.** Treat it as a way to cut down noise. A strong password and two-factor authentication are what actually protect your system. See [Remote access - security aspects](/hc/en-us/articles/26508882007581/).

### If you already had IP banning enabled

Bans behave differently after the upgrade. Previously, a ban either did nothing or shut out all remote access at once. From Home Assistant 2026.9, a ban permanently blocks one real address - possibly the address you rely on to reach your system while you are away. Review your **Login attempts before ban** setting against the guidance above before you next travel.

Your `ip_bans.yaml` file may also still hold a `127.0.0.1` entry from an earlier remote login failure. It no longer refers to remote visitors and on most systems now blocks nothing, but it is worth clearing out. See [Unable to reach Home Assistant Cloud - 403 forbidden](/hc/en-us/articles/26203603012509).

## Remaining limitations

- Trusted network authentication is not available over remote access. Remote visitors always get the login screen, even when the address they are connecting from is listed in your [trusted networks](https://www.home-assistant.io/docs/authentication/providers/). This is deliberate: it stops someone on the internet from being treated as a trusted device on your home network.

## Related topics

- [Unable to reach Home Assistant Cloud - 403 forbidden](/hc/en-us/articles/26203603012509)
- [Enabling remote access to Home Assistant](/hc/en-us/articles/26474279202973/)
- [About the remote access connection to Home Assistant (high level explainer)](/hc/en-us/articles/26469707849629/)
- [Remote access - deep dive](/hc/en-us/articles/25619268678557/)
- [Remote access - security aspects](/hc/en-us/articles/26508882007581/)
- [Using remote access with a custom domain for Home Assistant](/hc/en-us/articles/26497540527517/)
- [HTTP integration documentation](https://www.home-assistant.io/integrations/http/)
