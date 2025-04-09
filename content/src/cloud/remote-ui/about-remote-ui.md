---
zendesk:
  article_id: 26469707849629
  name: About Home Assistant Remote UI
  position: 1
  labels: cloud
---

One of the main features of Home Assistant Cloud is the Remote UI. The Remote UI allows you to connect to your Home Assistant instance from outside of your home network. So that you can start the vacuum cleaner from your phone while you are on the train for your daily commute, for example.

By default, remote access is not possible. You need to [enable it](/hc/en-us/articles/26474279202973/).

## How does Remote UI work?

Once enabled, Home Assistant generates a security certificate for secure communication and provides you with a URL. You can then use this URL to access your Home Assistant while away from home.

Below is a simplified visualization showing how the Remote UI connection to Home Assistant works:

<figure>
  <img src="/static/img/cloud/ha-cloud-remote-remote-ui-data-flow.svg" alt="Data flow diagram between your browser outside of your home network, and your Home Assistant">
  <figcaption>Data flow diagram between your browser (accessing from outside of your home network), and your Home Assistant</figcaption>
</figure>

1. **Remote website**: When you access your Home Assistant instance remotely, your browser sends an encrypted request to the Nabu Casa Cloud servers.
2. **Cloud server**: The request is routed through a secure cloud server managed by Nabu Casa. This server acts as a proxy, ensuring secure communication between your browser and your Home Assistant instance.
3. **Home Assistant instance**: The cloud server forwards the encrypted request to your Home Assistant instance at home. Your local instance decrypts the data and processes the request.

This flow ensures that all communication is encrypted and secure.

## Related topics

- [Enabling remote access to Home Assistant (Remote UI)](/hc/en-us/articles/26474279202973/)
- [Using Remote UI with a custom domain for Home Assistant](/hc/en-us/articles/26497540527517/)
