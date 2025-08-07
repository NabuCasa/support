---
zendesk:
  article_id: 29060874688285
  name: Turning the status light (LED) on or off
  position: 20
  labels: connect zwa-2
---


I you want, you can turn off the status light (LED).

{% steps %}
{% step "Open the Z-Wave integration page" %}
{% image "/static/img/connect-zwa-2/zwa-2-select-adapter.png" "Screenshot showing the the Z-Wave integration page" %}
{% stepContent %}

1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/) and select the **Z-Wave** integration card.
2. From the list, next to  Home Assistant Connect ZWA-2, select the arrow button.

{% endstepContent %}
{% endstep %}

{% step "Turn the light off or on" %}
{% image "/static/img/connect-zwa-2/zwa-2-led-toggle.png" "Screenshot showing the LED toggle button" %}
{% stepContent %}

1. Under **Configuration**, toggle the light.

   - **Result**: The LED is off. However, it also no longer indicates a status.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Status colors (LED)](/hc/en-us/articles/28670086157853)
- [Disabling the tilt indicator LED](/hc/en-us/articles/28670788982941)
- [Device overview](/hc/en-us/articles/28670192316189)