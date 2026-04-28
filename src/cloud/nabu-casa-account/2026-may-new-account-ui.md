---
zendesk:
  article_id: 35617635812893
  name: May 2026 - New Nabu Casa account management experience
  position: 1
  labels: cloud
---

In May 2026, we updated the Nabu Casa account management portal at [account.nabucasa.com](https://account.nabucasa.com). The redesign makes account information easier to find, better surfaces the features included in your subscription, and brings improvements to our billing systems that lay the groundwork for future changes to both account management and billing.

## What's changing

- Account information is easier to navigate and access at a glance.
- Subscription features are more clearly presented so you can see what is included in your plan.
- Underlying billing infrastructure has been updated to support future improvements.
- Going forward, the payment reference shown on your bank or financial institution statement may look slightly different depending on the payment method you have selected.

## Billing maintenance window

As part of this update, billing will be paused for a scheduled maintenance window. Any payments due during this window will be temporarily delayed and processed automatically once the maintenance window ends. No action is required on your part.

The maintenance window runs from **May 4, 2026 at 05:00 to May 5, 2026 at 09:00**, Central European Summer Time (CEST).

| Time zone | Start | End |
|---|---|---|
| CEST — Central Europe | May 4 at 05:00 | May 5 at 09:00 |
| UTC | May 4 at 03:00 | May 5 at 07:00 |
| BST — UK / Ireland | May 4 at 04:00 | May 5 at 08:00 |
| EDT — US East Coast | May 3 at 23:00 | May 5 at 03:00 |
| PDT — US West Coast | May 3 at 20:00 | May 5 at 00:00 |

{% callout "important" %}
If your payment is due during the maintenance window, it will not be lost or cancelled. It will be processed as soon as billing resumes.
{% endcallout %}

For the most up-to-date information, including any changes to the schedule, check the [maintenance listing on the Nabu Casa status page](https://status.nabucasa.com/incidents/t56zhmmz4jkz).

## FAQs

### What if I'm billed during the maintenance window?

If your payment is scheduled during the maintenance window, it will be held and processed automatically once billing resumes. You will not be charged twice and your subscription will not be cancelled. No action is required.

### My account page isn't loading — I use a DNS ad blocker (Pi-hole / AdGuard Home)

If you use a network-level DNS blocker such as Pi-hole or AdGuard Home, some Nabu Casa and payment domains may be incorrectly flagged by community blocklists, including the SNAFU list from Firebog.net. This can prevent the account or subscription page from loading correctly.

We publish an allowlist file you can import directly into your DNS blocker:

`https://assets.nabucasa.com/dns-allowlist.txt`

#### AdGuard Home

1. Go to **Filters** > **DNS Allowlists**.
2. Select **Add allowlist**.
3. Paste the URL above and save.
   - **Result**: AdGuard Home syncs the list automatically.

#### Pi-hole

1. Go to **Group Management** > **Adlists**.
2. Paste the URL above into the **Address** field, set the type to **Allow**, and select **Add**.
3. Go to **Tools** > **Update Gravity** to apply the list.

{% callout "important" %}
The domain `*.ui.nabu.casa`, used for Home Assistant remote access, requires a separate regex allowlist entry in Pi-hole. Go to **Whitelist** > **RegEx filter** and add:

`(^|\.)ui\.nabu\.casa$`
{% endcallout %}

#### Manual allowlist

If you prefer to add domains individually, the following domains are required:

| Domain | Purpose |
|---|---|
| `api.nabucasa.com` | Nabu Casa API |
| `cloud.nabucasa.com` | Nabu Casa Cloud API |
| `cognito-idp.us-east-1.amazonaws.com` | Authentication |
| `remotestate.nabucasa.com` | Google Assistant integration |
| `nc-user-files-weur.161122e6f55854edd16b585ba68d4972.r2.cloudflarestorage.com` | Cloud backup storage |
| `acme-v02.api.letsencrypt.org` | Remote access certificate renewal |
| `*.ui.nabu.casa` | Home Assistant remote UI |
| `account-link.nabucasa.com` | Account linking for integrations |
| `support.nabucasa.com` | Support site |
| `nabucasa.zendesk.com` | Support site |
| `status.nabucasa.com` | Service status |
| `account.nabucasa.com` | Account management |
| `js.recurly.com` | Subscription payment form |
| `api.recurly.com` | Payment processing |
| `nabucasa.com` | Nabu Casa main domain |

## Related topics

- [Nabu Casa account page](https://account.nabucasa.com)
- [Nabu Casa status page](https://status.nabucasa.com)
- [May 2026 billing maintenance window](https://status.nabucasa.com/incidents/t56zhmmz4jkz)
