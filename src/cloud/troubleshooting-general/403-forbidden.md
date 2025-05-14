---
zendesk:
  article_id: 26203603012509
  name: Unable to reach Home Assistant Cloud - 403 forbidden
  position: 4
  labels: cloud
---

There are multiple reasons Home Assistant Cloud cannot be reached. This page provides instructions how to troubleshoot when you see the "403 Forbidden" message.

## Message: 403 Forbidden

### Symptom

You are using the [Remote Access](/hc/en-us/articles/25619268678557) feature. Instead of the Home Assistant user interface, the browser shows a _403 Forbidden_ message.

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

## Related topics

- [Unable to reach Home Assistant Cloud](/hc/en-us/articles/25620486925085)
