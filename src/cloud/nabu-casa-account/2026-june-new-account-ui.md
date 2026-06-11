---
zendesk:
  article_id: 35617635812893
  name: June 2026 - New Nabu Casa account management experience
  position: 1
  labels: cloud
---

In June 2026, we updated the Nabu Casa account management portal at [account.nabucasa.com](https://account.nabucasa.com). The redesign makes account information easier to find, better surfaces the features included in your subscription, and brings improvements to our billing systems that lay the groundwork for future changes to both account management and billing.

## What's changing

- Account information is easier to navigate and access at a glance.
- Subscription features are more clearly presented so you can see what is included in your plan.
- Underlying billing infrastructure has been updated to support future improvements.
- Going forward, the payment reference shown on your bank or financial institution statement may look slightly different depending on the payment method you have selected.

## Billing maintenance window

As part of this update, billing will be paused for a scheduled maintenance window. Any payments due during this window will be temporarily delayed and processed automatically once the maintenance window ends. No action is required on your part.

The maintenance window is scheduled to run from **June 10, 2026 at 05:00 to June 11, 2026 at 07:00**, Central European Summer Time (CEST).

| Time zone | Start | End |
|---|---|---|
| CEST — Central Europe | June 10 at 05:00 | June 11 at 07:00 |
| UTC | June 10 at 03:00 | June 11 at 05:00 |
| BST — UK / Ireland | June 10 at 04:00 | June 11 at 06:00 |
| EDT — US East Coast | June 9 at 23:00 | June 11 at 01:00 |
| PDT — US West Coast | June 9 at 20:00 | June 10 at 22:00 |

{% callout "important" %}
If your payment is due during the maintenance window, it will not be lost or cancelled. It will be processed as soon as billing resumes.
{% endcallout %}

For the most up-to-date information, including any changes to the schedule, check the [maintenance listing on the Nabu Casa status page](https://status.nabucasa.com/incidents/t56zhmmz4jkz).

## FAQs

### I received an unexpected email about a charge, a new account, or an invoice. Should I be worried?

No, you can safely disregard these emails. While we moved subscriptions to the updated billing system on June 10, 2026, some customers received one or more automated emails, such as a new account confirmation, a subscription confirmation, or a receipt/invoice. These were sent automatically as your existing subscription was transferred to the new system. They do not reflect any new charge or any change to your account.

- **You have not been charged again.** Any receipt or invoice from these emails is not a real charge. The amount shown may be €0 / $0.00, or it may not match your usual subscription price. In either case the amount is incorrect, you will not be charged it, and no payment was taken.
- **Your subscription and price are unchanged.** Your plan, price, billing cycle, and renewal date all remain exactly as they were. The next time you are billed, the amount will match the regular price you are used to seeing.
- **These emails are genuine.** They were sent by Nabu Casa as part of the migration and are not phishing, nor a sign that your account has been accessed by anyone else. You can always confirm your subscription status directly at [account.nabucasa.com](https://account.nabucasa.com).
- **You may have received more than one email.** The migration could generate a few separate notifications for a single account. This is expected.

{% callout "important" %}
No action is required on your part. We're sorry for the confusion. An unexpected billing email is understandably alarming, but nothing has changed with your subscription and no charge was made.
{% endcallout %}

### My renewal was due during the maintenance window. What happened?

If your subscription was scheduled to renew during the maintenance window, we moved your renewal date forward by a few days so that no payment was attempted while billing was paused. To do this, your subscription was given a short free trial period (up to 7 days) that bridges the gap until your renewal resumes.

As a result, you may have received a "Welcome to your Home Assistant Cloud Trial!" email, or you may see a trial with a €0 / $0.00 invoice on your account. This does not mean your paid subscription has changed in any way:

- **You keep your subscription and access.** The trial is only a short buffer to delay your renewal until after the maintenance window. Your plan and features are unchanged.
- **You will not be charged twice, and your subscription will not be cancelled.** The free trial period is not a charge.
- **Your renewal resumes as normal.** At the end of the short trial buffer, your subscription renews at your regular price and billing continues as usual.

No action is required on your part.

### My account page isn't loading — I use a DNS ad blocker (Pi-hole / AdGuard Home)

If you use a network-level DNS blocker such as Pi-hole or AdGuard Home, some Nabu Casa and payment domains may be incorrectly flagged by community blocklists, including the SNAFU list from Firebog.net. This can prevent the account or subscription page from loading correctly.

To resolve this, add the following domains to your DNS blocker's allowlist:

| Domain | Purpose |
|---|---|
| `api.nabucasa.com` | Nabu Casa API |
| `nabucasa.zendesk.com` | Support site |
| `status.nabucasa.com` | Service status |
| `account.nabucasa.com` | Account management |
| `js.recurly.com` | Subscription payment form |
| `api.recurly.com` | Payment processing |
| `nabucasa.com` | Nabu Casa main domain |


## Related topics

- [Nabu Casa account page](https://account.nabucasa.com)
- [Nabu Casa status page](https://status.nabucasa.com)
- [June 2026 billing maintenance window](https://status.nabucasa.com/incidents/t56zhmmz4jkz)
