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
4. To start the process, select **Next**. The page will now show two DNS CNAME records that you must create with your domain registrar or DNS provider.
5. In a new browser tab, add both **CNAME** records to your domain through your domain provider. For each, use the `Name` and `Value` shown on the Nabu Casa page.
   - **Name / Host**: Use subdomain part only (like `home` and `_acme-challenge.home` if your desired full address is `home.example.com`).  
        In most cases, you do **not** repeat the main domain (`example.com`) as your DNS provider already stores it separately.
   - **Record Type**: `CNAME`
   - **Data / Value / Target / Points to**: The value shown as the CNAME target on the Nabu Casa page. Copy it exactly as shown.
6. Save your DNS changes. It can take several minutes or longer before the new records are visible on the internet.
7. Return to the Nabu Casa page and select **Validate** until both records show as validated. This may take several minutes.
8. To start using the updated certificate, restart your Home Assistant instance.

## Related topics

- [About the remote access connection to Home Assistant](/hc/en-us/articles/26469707849629/)
- [Enabling remote access to Home Assistant](/hc/en-us/articles/26474279202973/)
