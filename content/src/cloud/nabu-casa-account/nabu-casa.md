---
zendesk:
  article_id: 25651118688797
  name: Nabu Casa
  position: 3
  labels: cloud
---

## Is Home Assistant Cloud open source?

We make sure that as much processing as possible is done locally inside Home Assistant.

- Remote UI is powered by [our snitun library](https://github.com/NabuCasa/snitun)
- [Alexa skill source code](https://github.com/home-assistant/home-assistant/blob/dev/homeassistant/components/alexa/smart_home.py)
- [Google Assistant source code](https://github.com/home-assistant/home-assistant/blob/dev/homeassistant/components/google_assistant/smart_home.py)
- [Cloud component in Home Assistant](https://github.com/home-assistant/home-assistant/blob/dev/homeassistant/components/cloud/) is powered by [our hass-nabucasa library](https://github.com/NabuCasa/hass-nabucasa)

## Do you have access to my Home Assistant instance?

No, we don't. We will only exchange messages between your Home Assistant instance and the Google and Amazon voice assistants. The source code that handles incoming message from the cloud is [here](https://github.com/NabuCasa/hass-nabucasa/blob/master/hass_nabucasa/iot.py)

## I received an email from Let's Encrypt. Do I need to renew my own certificates?

You do not need to do anything. The certificates for your instance will renew automatically as long as your subscription is active.

## Can I use a single account for multiple Home Assistant installations?

This is not possible. It would require large changes to how the service works and our current focus is on evaluating and improving the stability and scale of a single instance per subscription.

## Can I use remote access with any Home Assistant installation method?

Yes. The remote access support is entirely independent of how you’ve installed Home Assistant.

## Home Assistant Cloud for older Android devices

Home Assistant Cloud uses Let's Encrypt to provide SSL certificates for your instance. As of the end of September 2020, Let's Encrypt is changing the way they sign their certificates which breaks support for older Android devices (older than Android 7.1).

Home Assistant version 0.115 includes an update to make the certificates used by Home Assistant Cloud backwards compatible. This relies on a feature that Let's Encrypt provides, which will expire in September 2021.

If you use an older Android device and cannot upgrade to Home Assistant 0.115 or want to use it past September 2021, install the Firefox browser. It includes modern certificates and is able to support the new Let's Encrypt certificates.
