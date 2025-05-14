---
zendesk:
  article_id: 26523862491165
  name: Remote Access - Limitations
  position: 14
  labels: cloud
---

The IP address of the incoming request is not being forwarded. This means that you cannot use Remote Access if you are using one of the following network scenarios:

- If your Home Assistant instance [has configured](https://www.home-assistant.io/integrations/http/) `127.0.0.1` or `::1` as trusted networks or proxies.
- If you use IP bans, the remote connection will be banned as a whole instead of just the address from which the incorrect passwords were entered.
  - We are currently exploring a solution for this issue.

## Related topics

- [Enabling remote access to Home Assistant (Remote Access)](/hc/en-us/articles/26474279202973/)
- [About the Remote Access connection to Home Assistant (high level explainer)](/hc/en-us/articles/26469707849629/)
- [Remote Access - deep dive](/hc/en-us/articles/25619268678557/)
- [Remote Access - security aspects](/hc/en-us/articles/26508882007581/)
- [Using Remote Access with a custom domain for Home Assistant](/hc/en-us/articles/26497540527517/)
- [HTTP integration documentation](https://www.home-assistant.io/integrations/http/)
