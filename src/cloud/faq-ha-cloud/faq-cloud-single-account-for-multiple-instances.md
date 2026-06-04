---
zendesk:
  article_id: 26178633145885
  name: Can I use a single account for multiple Home Assistant installations?
  position: 30
  labels: cloud
---

No. Each Home Assistant installation requires its own Nabu Casa account and subscription.

Using the same account on multiple instances causes unpredictable behavior — only one instance will have active service at a time (usually the last one to connect), leaving your other installations without cloud access.

## Setting up a second subscription

You'll need a separate email address for the second account. If your email provider supports aliases — for example, Gmail's `+` addressing, Apple Hide My Email, or a dedicated alias service — that works perfectly. You don't need a completely separate email account.

Note that alias emails may be rejected by our system's anti-abuse detection. If you run into trouble creating the account, contact support and we can create it for you manually.

Once you have the second account, subscribe at nabucasa.com and sign in to Home Assistant Cloud on your second instance with those credentials.

## Are there discounts for multiple subscriptions?

No. The subscription is priced as low as possible. Home Assistant Cloud exists to fund the development of the free, open-source Home Assistant project — not as a commercial service. There are no multi-instance discounts.

## Related topics

- [Home Assistant Cloud pricing](https://www.nabucasa.com/pricing/)
