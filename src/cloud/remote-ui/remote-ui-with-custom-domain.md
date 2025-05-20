---
zendesk:
  article_id: 26497540527517
  name: Using remote access with a custom domain for Home Assistant
  position: 5
  labels: cloud
---

If you own your own domain (like `example.com`), you might want to use a subdomain of that domain name (like `home.example.com`) to have a familiar URL to your Home Assistant instance, in addition to the default one that is provided when you [enable Home Assistant remote access](/hc/en-us/articles/26474279202973/).

## Prerequisites

- Home Assistant 2023.9.0 or later.

## To apply a custom domain for using remote access with Home Assistant

1. To use your own domain name, first log in to the [Nabu Casa account page](https://account.nabucasa.com).
2. Then, look for the **Add custom domain** card.
3. In the **Add custom domain** card, enter the subdomain name you would like to start using (like `home.example.com`).
4. To start the process, select **Next**.
   - **Result**: Once the configuration is complete, the certificate needs to be regenerated and validated with both your custom domain name and the one we previously provided.
5. To do this, restart your Home Assistant instance.

## Related topics

- [About the remote access connection to Home Assistant](/hc/en-us/articles/26469707849629/)
- [Enabling remote access to Home Assistant](/hc/en-us/articles/26474279202973/)
