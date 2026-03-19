---
zendesk:
  article_id: 25764604971421
  name: Status colors of the LEDs (status LEDs) on Home Assistant Voice Preview Edition
  position: 20
  labels: voice pe, about-the-device, status colors
---

{% steps %}
{% step "The LED closest to the speaker is red." "1 red LED" %}
{% image "/static/img/voice-pe/status_silent.png" "1 red LED" %}
{% stepContent %}

**Silent**

If the media player volume is set to 0, the LED closest to the speaker is red, indicating the device cannot produce sound.

{% endstepContent %}
{% endstep %}

{% step "The two LEDs closest to the microphones are red." "2 red LEDs" %}
{% image "/static/img/voice-pe/status_muted.png" "2 red LEDs" %}
{% stepContent %}

**Muted**

The microphones are off.

{% endstepContent %}
{% endstep %}

{% step "Fatal error" "4 red LEDs" %}
{% image "/static/img/voice-pe/status-fatal-error.png" "4 red LEDs" %}
{% stepContent %}

**Fatal error**

The device encountered a fatal error. Contact the vendor the device was ordered from to arrange for an RMA (Return Merchandise Authorization).

{% endstepContent %}
{% endstep %}

{% step "Disconnected" "Red twinkle" %}
{% image "/static/img/voice-pe/status_red_twinkle.gif" "Red twinkle" %}
{% stepContent %}

**Disconnected**

The device is disconnected from Home Assistant. This is common during an update of Home Assistant. In case it happens outside updates, it usually means that there is a network issue preventing the device from reaching Home Assistant.

{% endstepContent %}
{% endstep %}

{% step "Error" "Red flashing" %}
{% image "/static/img/voice-pe/status_red_flashing.png" "Red flashing" %}
{% stepContent %}

**Error**

The voice assistant encountered an error.

{% endstepContent %}
{% endstep %}

{% step "No Wi-Fi credentials" "White twinkle" %}
{% image "/static/img/voice-pe/status_white_twinkle.gif" "White twinkle" %}
{% stepContent %}

**No Wi-Fi credentials**

No Wi-Fi credentials are stored on the device. Use your phone to push Wi-Fi credentials via Bluetooth using the Home Assistant Companion App.

{% endstepContent %}
{% endstep %}

{% step "Wi-Fi connection initializing" "Solid white" %}
{% image "/static/img/voice-pe/status_white.png" "Solid white" %}
{% stepContent %}

**Wi-Fi connection initializing**

Wi-Fi credentials are stored on the device. The Wi-Fi hardware and connection are initializing.

{% endstepContent %}
{% endstep %}

{% step "Waiting for connection" "Blue twinkle" %}
{% image "/static/img/voice-pe/status_blue.gif" "Blue twinkle" %}
{% stepContent %}

**Waiting for connection**

Waiting for a connection from Home Assistant.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [About Home Assistant Voice Preview Edition](/hc/en-us/articles/25764286546717)
- [Device overview and interfaces](/hc/en-us/articles/25764488568605)