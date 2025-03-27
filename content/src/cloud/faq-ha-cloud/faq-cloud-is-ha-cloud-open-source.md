---
zendesk:
  article_id: 26177541625245
  name: Is Home Assistant Cloud open source?
  position: 1
  labels: cloud, open-source, open source
---

We make sure that as much processing as possible is done locally inside Home Assistant.

- Remote UI is powered by [our snitun library](https://github.com/NabuCasa/snitun)
- [Alexa skill source code](https://github.com/home-assistant/home-assistant/blob/dev/homeassistant/components/alexa/smart_home.py)
- [Google Assistant source code](https://github.com/home-assistant/home-assistant/blob/dev/homeassistant/components/google_assistant/smart_home.py)
- [Cloud component in Home Assistant](https://github.com/home-assistant/home-assistant/blob/dev/homeassistant/components/cloud/) is powered by [our hass-nabucasa library](https://github.com/NabuCasa/hass-nabucasa)