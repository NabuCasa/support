---
zendesk:
  article_id: 25775743017629
  name: Changing the wake word for Home Assistant Voice Preview Edition
  position: 80
  labels: voice pe, operation, using the device, change wake word, nabu
---

A wake word is the phrase that wakes your voice assistant so it starts listening for a command. Nabu, the private voice assistant for your Home Assistant smart home, has a wake word trained on open-source voice samples from the Home Assistant community.

"Okay Nabu" is the Nabu wake word, and it runs entirely on-device. Home Assistant Voice Preview Edition can listen for "Okay Nabu" or for one of the other wake words below.

To get Nabu, [install Home Assistant](https://www.home-assistant.io/installation/), then set up Nabu under [**Settings** > **Voice assistants**](https://my.home-assistant.io/redirect/voice_assistants/). Learn more on the [Nabu page](https://www.nabucasa.com/nabu/) and in [Assist](/hc/en-us/articles/25619427296413).

{% steps %}
{% step "Open the integration page" %}
{% image "/static/img/voice-pe/voice_esphome.png" "Screenshot of the device list" %}
{% stepContent %}

   1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/) and select the **ESPHome** integration.
   2. From the list, under **Home Assistant Voice**, select **Device**.

{% endstepContent %}
{% endstep %}

{% step "Select your wake word" %}
{% image "/static/img/voice-pe/voice_config_change_wake_word.png" "Screenshot showing the wake word selector" %}
{% stepContent %}

   - On the device page, under **Configuration**, select your wake word.
      - The default options are `Hey Jarvis`, `Hey Mycroft`, and `Okay Nabu`.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Turning the wake sound on or off](/hc/en-us/articles/25774481113629)
- [Conversing without wake word](/hc/en-us/articles/25775805328029)
