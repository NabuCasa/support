---
zendesk:
  article_id: 26178633145885
  name: Can I use a single account for multiple Home Assistant installations?
  position: 3
  labels: cloud
---

No, this is not possible. Each Home Assistant instance requires its own separate account and subscription. While Home Assistant will display a warning if you attempt to use the same account on multiple instances, doing so causes unpredictable behavior, only one instance will have active service (usually the last one to restart), leaving your other instances without cloud access. This has resulted in many users unexpectedly losing remote access to distant Home Assistant installations. For reliable service, each instance needs its own dedicated subscription.
