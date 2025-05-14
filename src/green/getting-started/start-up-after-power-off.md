---
zendesk:
  article_id: 25209783508125
  name: Starting up the device
  position: 10
  labels: green, getting started
---

There are 2 different start up procedures, depending on the current state of your system.

- [Starting up if the system is still connected to power and Etherent](#starting-up-the-system-if-it-is-still-connected-to-ethernet-and-power)
- [Starting up if the system has been disconnected ](#starting-up-the-system-if-it-has-been-disconnected)

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/green/green_getting-started_prereq.png" "Image showing the Home Assistant Green with power supply and Ethernet cable" %}
{% stepContent %}

- Home Assistant Green with power and Ethernet cable
- Home Assistant Green has previously been set up, but was powered off temporarily
- You have your Home Assistant credentials
- If these conditions are not met, or this is your first time using Home Assistant Green, instead, follow the [getting started](/hc/en-us/articles/24737667232413-Getting-started-with-Home-Assistant-Green) procedure.

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## Starting up the system if it is still connected to Ethernet and power

{% steps %}
{% step "Powering up the system" %}
{% image "/static/img/green/green_connect_ethernet.webp" "Clip showing how to plug i the Ethernet cable" %}
{% stepContent %}

 - Press the power button.
 - Once the yellow LED blinks in a heart beat pattern, the system is ready.

{% endstepContent %}
{% endstep %}

{% step "Connecting to Home Assistant" %}
{% image "/static/img/green/lovelace.png" "Screenshot showing a Home Assistant dashboard" %}
{% stepContent %}

   - Select your Home Assistant server:
      - **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196:8123`
      - **Desktop**: Visit [http://homeassistant.local:8123](http://homeassistant.local:8123) to access the Home Assistant user interface.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Starting up the system if it has been disconnected

Follow these steps if you want to start up the system after it has been powered off.

{% steps %}
{% step "Connecting the device to the Internet" %}
{% image "/static/img/green/green_reset_power-up_heartbeat.webp" "Clip showing the where to press the button on the device" %}
{% stepContent %}

   - Plug in your Ethernet cable and make sure it is locked into place.
   - Connect the other end of the Ethernet cable to your router or switch.

{% endstepContent %}
{% endstep %}

{% step "Connecting power" %}
{% image "/static/img/green/green_connect_power.webp" "Clip showing the where to press the button on the device" %}
{% stepContent %}

- Connect the power to the electrical outlet and then to the Home Assistant Green.

{% endstepContent %}
{% endstep %}

{% step "Connecting to Home Assistant" %}
{% image "/static/img/green/lovelace.png" "Screenshot showing a Home Assistant dashboard" %}
{% stepContent %}

   - Select your Home Assistant server:
      - **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196:8123`.
      - **Desktop**: Visit [http://homeassistant.local:8123](http://homeassistant.local:8123) to access the Home Assistant user interface.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Getting started](/hc/en-us/articles/24737667232413)
- [Shutting down the device](/hc/en-us/articles/25207565119133)
- [About the LEDs](/hc/en-us/articles/25210352599197)
