---
zendesk:
  article_id: 26497540527517
  name: Using remote access with a custom domain for Home Assistant
  position: 40
  labels: cloud
---

If you own your own domain (like `example.com`), you might want to use a subdomain of that domain name (like `home.example.com`) to have a familiar URL to access Home Assistant, in addition to the default one that is provided when you [enable Home Assistant remote access](/hc/en-us/articles/26474279202973/).

## Prerequisites

- Home Assistant 2023.9.0 or later.

## To apply a custom domain for using remote access with Home Assistant

1. To use your own domain name, first log in to the [Nabu Casa account page](https://account.nabucasa.com).
2. Under **Services**, look for the **Custom domain** card.
3. Enter the custom subdomain you would like to start using (like `home.example.com`).
4. To start the process, select **Next**. The page will now show two DNS CNAME records that you must create with your domain registrar or DNS provider.
5. In a new browser tab, add both **CNAME** records to your domain through your domain provider. For each, use the `Name` and `Value` shown on the Nabu Casa page.
   - **Name / Host**: Use subdomain part only (like `home` and `_acme-challenge.home` if your desired full address is `home.example.com`).  
        In most cases, you do **not** repeat the main domain (`example.com`) as your DNS provider already stores it separately.
   - **Record Type**: `CNAME`
   - **Data / Value / Target / Points to**: The value shown as the CNAME target on the Nabu Casa page. Copy it exactly as shown.

   For example, if your desired address is `home.example.com`, the two records look like this (your actual values will use the UUID from your Nabu Casa remote URL):

   | Name / Host | Type | Value / Target |
   |---|---|---|
   | `home` | CNAME | `abcd1234-ef56-7890-abcd-ef1234567890.ui.nabu.casa` |
   | `_acme-challenge.home` | CNAME | `_acme-challenge.abcd1234-ef56-7890-abcd-ef1234567890.ui.nabu.casa` |

   Note that both records use the same instance ID. The `_acme-challenge` record simply adds `_acme-challenge.` to both the name and the value.

6. Save your DNS changes. It can take several minutes or longer before the new records are visible on the internet.
7. Return to the Nabu Casa page and select **Check DNS** until both records show as validated, and select **Save**. This may take several minutes.
8. To start using the updated certificate, restart Home Assistant.

## Already set up? Look up your CNAME record values

If you've previously configured a custom domain and need to verify or recreate your DNS records, the values are derived directly from your Nabu Casa remote URL.

Find your remote URL on the [Nabu Casa account page](https://account.nabucasa.com) under **Services**. It looks like `https://abcd1234-ef56-7890-abcd-ef1234567890.ui.nabu.casa`. Your two CNAME records use that URL — without the `https://` prefix — as follows:

| Name / Host | Type | Value / Target |
|---|---|---|
| `home` | CNAME | `abcd1234-ef56-7890-abcd-ef1234567890.ui.nabu.casa` |
| `_acme-challenge.home` | CNAME | `_acme-challenge.abcd1234-ef56-7890-abcd-ef1234567890.ui.nabu.casa` |

The main record is your remote URL without `https://`. The `_acme-challenge` record is the same value with `_acme-challenge.` added to the front.

## Troubleshooting

### Validation stays pending after DNS records look correct

DNS checker sites may show your records as correct before Let's Encrypt — which validates the ACME challenge from its own resolvers — has seen the update. If the Nabu Casa page still shows the `_acme-challenge` record as unvalidated, wait a few minutes longer and try again. Let's Encrypt propagation can lag behind what general DNS checkers report.

### Using Cloudflare as your DNS provider

If your domain is managed through Cloudflare, set both CNAME records to **DNS only** (grey cloud icon), not proxied (orange cloud). Cloudflare's proxy intercepts HTTPS traffic and will prevent the TLS connection and the ACME challenge validation from working.

### DNSSEC

If your domain has DNSSEC enabled, it must be fully and correctly configured. A partial or inconsistent DNSSEC setup causes Let's Encrypt validation to fail even when the DNS records themselves appear correct. If you're not sure of your DNSSEC status, disabling it is the quickest way to rule it out.

## Related topics

- [About the remote access connection to Home Assistant](/hc/en-us/articles/26469707849629/)
- [Enabling remote access to Home Assistant](/hc/en-us/articles/26474279202973/)
