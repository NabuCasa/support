---
zendesk:
  article_id: 26177731023261
  name: Do you have access to my Home Assistant instance?
  position: 2
  labels: cloud
---

No, we don't. We specifically designed our systems so that we have no access to your Home Assistant instance.

- The connection is always securely established from your Home Assistant instance to our servers, never the reverse.
- We only exchange encrypted messages between your instance and cloud services (like Google Assistant and Amazon Alexa).
- We cannot access your Home Assistant instance, devices, or configuration.
- We have no administrative tools or other means to reconnect a disconnected instance or to access your system.

The source code that handles messages between your instance and the cloud is [available in this Nabu Casa GitHub repository](https://github.com/NabuCasa/hass-nabucasa/blob/master/hass_nabucasa/iot.py).

Our design philosophy prioritizes user privacy and security and you maintain complete control over your smart home data.
