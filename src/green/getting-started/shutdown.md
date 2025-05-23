---
zendesk:
  article_id: 25207565119133
  name: Shutting down the device
  position: 10
  labels: green, getting started
---

Follow these steps if you want to shut down the system.

## To shut down the system

{% steps %}
{% step "Shutting down the system from the UI" "Option 1" %}
{% image "/static/img/green/shutdown_system.png" "Image showing the shutdown dialog in the UI" %}
{% stepContent %}

- In your Home Assistant UI, go to [**Settings** > **System**](https://my.home-assistant.io/redirect/system_dashboard/).
- In the top-right corner, select the three-dots menu. Select **Restart Home Assistant**.
- Then, select **Shut down system**
- Wait until all the LEDs turned off.

{% endstepContent %}
{% endstep %}

{% step "Shutting down the system using the hardware button" "Option 2" %}
{% image "/static/img/green/green_reset_power-up_after_sd-insert.webp" "Clip showing where to press the button on the device" %}
{% stepContent %}

- Use this option in case the shutdown via UI doesn't work.
- To shutdown gracefully, press the power button for 6 seconds.
- For a hard shutdown (do this only if all else fails), press the power button for 12 seconds.
- Wait until all the LEDs turned off.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Starting up the device](/hc/en-us/articles/25209783508125/)