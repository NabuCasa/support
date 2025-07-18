---
zendesk:
  article_id: 28699323695389
  name: Using Home Assistant Voice Preview Edition
  position: 1
  labels: voice pe, operation, using the device
---

Once you have connected the device with Home Assistant, you can start talking to Assist.

{% steps %}
{% step "Talking to Home Assistant" %}
{% image "/static/img/voice-pe/speak.png" "Speech bubbles" %}
{% stepContent %}

   - Start controlling Home Assistant by saying a [supported voice command](https://www.home-assistant.io/voice_control/builtin_sentences/):
     - For example, “What's the time”, “Turn on the light in the living room”, “Set the timer to 5 minutes”, “Is the front door locked”.
       - Make sure you’re using the area name exactly as you defined it in Home Assistant.
     - **Troubleshooting**: Is the device you want to control via Assist (for example a specific light) not responding to your voice commands? Make sure the device is [exposed to Assist](https://www.home-assistant.io/voice_control/voice_remote_expose_devices/).

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Supported voice commands](https://www.home-assistant.io/voice_control/builtin_sentences/)
- [Exposing entities to Assist](https://www.home-assistant.io/voice_control/voice_remote_expose_devices/)
- [Automating on a button press](https://www.home-assistant.io/integrations/event/#automating-on-a-button-press)
- [Using the center button to stop the current process](/hc/en-us/articles/25774498553629)
- [About Home Assistant Voice Preview Edition](2869/hc/en-us/articles/9323695389)
