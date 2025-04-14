---
zendesk:
  article_id: 26178731338141
  name: How can I use Home Assistant Cloud on older Android devices?
  position: 5
  labels: cloud
---

Home Assistant Cloud uses Let's Encrypt to provide SSL certificates for your instance. As of September 2020, Let's Encrypt changed the way they sign their certificates which breaks support for older Android devices (older than Android 7.1).

Home Assistant version 0.115 includes an update to make the certificates used by Home Assistant Cloud backwards compatible. This relies on a feature that Let's Encrypt provided, which expired in September 2021.

If you use an older Android device and cannot upgrade to Home Assistant 0.115 or want to use it past September 2021, install the Firefox browser. It includes modern certificates and is able to support the new Let's Encrypt certificates.
