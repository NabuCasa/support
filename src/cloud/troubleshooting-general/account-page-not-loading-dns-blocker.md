---
zendesk:
  # article_id: add the ID here after creating this article in Zendesk.
  name: Account page not loading when using a DNS ad blocker
  position: 80
  labels: cloud, troubleshooting
---

## Symptom

The Nabu Casa account page at [account.nabucasa.com](https://account.nabucasa.com) does not load correctly, or the subscription and payment sections of the page stay empty.

## Cause

You use a network-level DNS blocker such as Pi-hole or AdGuard Home, and some Nabu Casa and payment domains are incorrectly flagged by community blocklists, including the SNAFU list from Firebog.net. When these domains are blocked, the page cannot load the data it needs.

## Resolution

Add the following domains to your DNS blocker's allowlist:

| Domain | Purpose |
|---|---|
| `nabucasa.com` | Nabu Casa main domain |
| `account.nabucasa.com` | Account management |
| `api.nabucasa.com` | Nabu Casa API |
| `status.nabucasa.com` | Service status |
| `nabucasa.zendesk.com` | Support site |
| `js.recurly.com` | Subscription payment form |
| `api.recurly.com` | Payment processing |

After adding the domains, reload the account page.

## Related topics

- [Unable to reach Home Assistant Cloud](/hc/en-us/articles/25620486925085)
- [Nabu Casa account page](https://account.nabucasa.com)
