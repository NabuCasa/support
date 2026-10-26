---
zendesk:
  article_id: 25775743017629
  name: Changing the wake word for Home Assistant Voice Preview Edition
  position: 80
  labels: voice pe, operation, using the device, change wake word, nabu
---

A wake word is the phrase that activates your voice assistant so it starts listening for a command. To improve the voice assistant experience in Home Assistant, Nabu Casa built Nabu: technology designed to enhance Assist, powering features like the dedicated "Okay Nabu" wake word.

Trained on open-source voice samples contributed directly by the Home Assistant community, "Okay Nabu" runs entirely on-device for fast, private detection. Home Assistant Voice Preview Edition can listen for "Okay Nabu" or any of the other supported wake words listed below.

To use the "Okay Nabu" wake word with Assist, [install Home Assistant](https://www.home-assistant.io/installation/) and set up Assist under [**Settings** > **Voice assistants**](https://my.home-assistant.io/redirect/voice_assistants/). Learn more on the [Nabu page](https://www.nabucasa.com/nabu/) and in our [guide to Assist](/hc/en-us/articles/25619427296413).

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
      - The available options are `Okay Nabu`, `Hey Jarvis`, and `Hey Mycroft`.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Turning the wake sound on or off](/hc/en-us/articles/25774481113629)
- [Conversing without wake word](/hc/en-us/articles/25775805328029)
