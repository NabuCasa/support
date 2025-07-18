---
zendesk:
  article_id: 25775743017629
  name: Changing the wake word
  position: 8
  labels: voice pe, operation, using the device, change wake word
---

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
      - If needed, change the **Finished speaking detection**.
        - This setting defines how much silence is needed for Assist to find you're done speaking and it can start processing your command.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Turning the wake sound on or off](/hc/en-us/articles/25774481113629)
- [Conversing without wake word](/hc/en-us/articles/25775805328029)
