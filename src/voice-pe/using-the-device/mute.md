---
zendesk:
  article_id: 25774403768477
  name: Muting the device
  position: 2
  labels: voice pe, operation, using the device, mute
---

If you don’t want the device to listen for a while, you can mute the microphone.

{% steps %}
{% step "Use the hardware mute switch" "Option 1" %}
{% image "/static/img/voice-pe/voice_mute_device.webp" "Clip showing how to move the hardware mute switch" %}
{% stepContent %}

- On the device, move the switch so that you see the red color.
  - **Result**: The light turns red, indicating that the microphone is muted.
- **Info**: When the switch is in this position, you cannot unmute the device from the UI.

{% endstepContent %}
{% endstep %}

{% step "Use the software button" "Option 2" %}
{% image "/static/img/voice-pe/voice_mute.png" "Screenshot showing showing the software mute switch" %}
{% stepContent %}

- To use the mute function in the UI, under **Configuration**, toggle the **Mute** switch.
- **Info**: The switch in the UI does not work when the physical switch is in the muted position.

{% endstepContent %}
{% endstep %}

{% step "Checking the status light" "Step 2" %}
{% image "/static/img/voice-pe/status_muted.png" "Image showing the red status light" %}
{% stepContent %}

1. The red status light indicates the device is muted.
   - If you muted the device, the LEDs closest to the speaker turn red to indicate that the microphones are off.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Turning the wake sound on or off](/hc/en-us/articles/25774481113629)
- [Changing the volume](/hc/en-us/articles/25773395022237)
- [Status colors](/hc/en-us/articles/25764604971421)