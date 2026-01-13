---
zendesk:
  article_id: 31368700350109
  name:  Home Assistant Connect ZBT-2 status light (LEDs)
  position: 30
  labels: connect-zbt-2, about-the-device
---

The following status light patterns are used to indicate a status on Home Assistant Connect ZBT-2:

Most of the time, the status light is off. It means the device is in normal operation.

{% steps %}

{% step "Off" "Status" %}
{% stepContent %}

- Most of the time, the status light is off.
- It means the device is joined to a Zigbee or Thread network and in normal operation.
- The light is also off if the device is powered off.

{% endstepContent %}
{% endstep %}

{% step "Pulsing" "Status" %}
{% stepContent %}

- Device is connecting to a Zigbee or Thread network.

{% endstepContent %}
{% endstep %}

{% step "Blinking fast" "Status" %}
{% stepContent %}

**Suboptimal antenna orientation**
- If the status light is blinking fast, the device is not mounted correctly.<br>
- Remount the device so that the antenna is in a vertical position.

{% endstepContent %}
{% endstep %}

{% endsteps %}