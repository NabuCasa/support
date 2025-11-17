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
2. Then, look for the **Add a custom domain** card.
3. In the **Add a custom domain** card, enter the subdomain name you would like to start using (like `home.example.com`).
4. Select **Next**. The page will now display the CNAME values you need for the next step.
5. Go to your DNS provider and create two CNAME entries using the values provided.
6. Restart your Home Assistant instance. This final step triggers the regeneration and validation of the SSL certificates for your new custom domain.

**Note on CNAME entries**  
Some DNS providers require a trailing `.` on the CNAME value (e.g. `[your-remote-id].ui.nabu.casa.` to ensure the request is routed correctly.

## Related topics

- [About the remote access connection to Home Assistant](/hc/en-us/articles/26469707849629/)
- [Enabling remote access to Home Assistant](/hc/en-us/articles/26474279202973/)
