---
zendesk:
  article_id: 26469707849629
  name: About Home Assistant Remote UI
  position: 2
  labels: cloud
---

One of the main features of Home Assistant Cloud is the Remote UI. The Remote UI allows you to connect to your Home Assistant instance from outside of your home network. So that you can start the vacuum cleaner from your phone while you are on the train for your daily commute, for example.

By default, remote access is not possible. You need to enable it.

## How does Remote UI work?

Once enabled, Home Assistant generates a security certificate for secure communication and provides you with a URL. You can then use this URL to access your Home Assistant while away from home.

Below is a simplified visualization of how the Remote UI connection to Home Assistant works:

![Data flow diagram between your browser outside of your home network, and your Home Assistant](/static/img/cloud/ha-cloud-remote-remote-ui-data-flow.svg)

1. **Remote website**: When you access your Home Assistant instance remotely, your browser sends an encrypted request to the Nabu Casa Cloud servers.
2. **Cloud server**: The request is routed through a secure cloud server managed by Nabu Casa. This server acts as a proxy, ensuring secure communication between your browser and your Home Assistant instance.
3. **Home Assistant instance**: The cloud server forwards the encrypted request to your Home Assistant instance at home. Your local instance decrypts the data and processes the request.


This flow ensures that all communication is encrypted and secure, providing a seamless and safe remote access experience.

### What makes is secure, exactly?

All communication is using HTTPS (HyperText Transfer Protocol Secure). HTTPS is the secure version of HTTP, the protocol used for communication between your web browser and a website. It's secure, because it uses encryption. Encryption is important to ensure the following:

- Your data (passwords, messages, credit card info, etc.) can’t be read by others.
- No one can modify the data while it's in transit. (With one exception: In theory, Nabu Casa could modify it, because it owns the domain and can create its own certificate. Read more about this [here]()).
- You’re actually connected to the real website, not a fake or malicious one.

This encryption is powered by SSL (Secure Sockets Layer). SSL is a protocol that establishes a secure, encrypted link between two systems — typically a browser and a server.
