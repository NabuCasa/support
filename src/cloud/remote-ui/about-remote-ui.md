---
zendesk:
  article_id: 26469707849629
  name: About Home Assistant remote access
  position: 1
  labels: cloud
---

One of the main features of Home Assistant Cloud is remote access. Remote access allows you to connect to your Home Assistant instance from outside of your home network. So that you can start the vacuum cleaner from your phone while you are on the train for your daily commute, for example.

By default, remote access is not possible. You need to [enable it](/hc/en-us/articles/26474279202973/).

## How does remote access work?

Once enabled, Home Assistant generates a security certificate for secure communication and provides you with a URL. You can then use this URL to access your Home Assistant while away from home.

Below is a simplified visualization, showing how remote access to Home Assistant works via Home Assistant Cloud:

<figure>
  <img src="/static/img/cloud/ha-cloud-remote-remote-ui-data-flow.svg" alt="Data flow diagram between your browser outside of your home network, and your Home Assistant">
  <figcaption>Data flow diagram between your browser, located outside of your home network, Home Assistant Cloud, and your Home Assistant</figcaption>
</figure>

1. **Remote website**: When you access your Home Assistant instance remotely, your browser sends an encrypted request to the Nabu Casa Cloud servers.
2. **Cloud server**: The request is routed through a secure cloud server managed by Nabu Casa. This server acts as a proxy, ensuring secure communication between your browser and your Home Assistant instance.
3. **Home Assistant instance**: The cloud server forwards the encrypted request to your Home Assistant instance at home. Your local instance decrypts the data and processes the request.

This flow ensures that all communication is encrypted and secure.

## Related topics

- [Enabling remote access to Home Assistant](/hc/en-us/articles/26474279202973/)
- [Using remote access with a custom domain for Home Assistant](/hc/en-us/articles/26497540527517/)
- [Remote access - How it works - deep dive](/hc/en-us/articles/25619268678557/)
- [Remote access - security aspects](/hc/en-us/articles/26508882007581/)
- [Remote access source code on GitHub](/hc/en-us/articles/26510075061021)
