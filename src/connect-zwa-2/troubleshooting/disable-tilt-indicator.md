---
zendesk:
  article_id: 28670788982941
  name: Disabling the tilt indicator (stop fast blinking) on Home Assistant Connect ZWA-2
  position: 20
  labels: connect zwa-2
---

For ideal signal transmission, the antenna should be placed in a vertical position.  If the antenna is not in a vertical position, the LED blinks fast.

It is not recommended to do this, but if you want to mount it horizontally or in a tilted position, you can disable this tilt indicator.

{% steps %}
{% step "Open the Z-Wave integration page" %}
{% image "/static/img/connect-zwa-2/zwa-2-select-adapter.png" "Screenshot showing the the Z-Wave integration page" %}
{% stepContent %}

1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/) and select the **Z-Wave** integration card.
2. From the list, next to  Home Assistant Connect ZWA-2, select the arrow button..

{% endstepContent %}
{% endstep %}

{% step "Enable the tilt indicator entity" %}
{% image "/static/img/connect-zwa-2/zwa-2-enable-tilt-indicator-entity.png" "Screenshot showing the configuration section and the inactive tilt indicator entity" %}
{% stepContent %}

1. Under **Configuration**, select **enableTiltIndicator**.
   - In the dialog, select the cogwheel and **Enable** the entity.
2. It takes a while for the entity to become active.

{% endstepContent %}
{% endstep %}

{% step "Disable the tilt indicator" %}
{% image "/static/img/connect-zwa-2/zwa-2-enable-tilt-indicator.png" "Screenshot showing the configuration section and the selector to enable the tilt indicator" %}
{% stepContent %}

Once the entity is enabled, you can now disable the tilt indicator.

**Result**: The LED no longer blinks fast when the device is tilted.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Status colors (LED)](/hc/en-us/articles/28670086157853)
- [Finding an installation location](/hc/en-us/articles/28670284336925)
- [Installing the device](/hc/en-us/articles/28685750450205)