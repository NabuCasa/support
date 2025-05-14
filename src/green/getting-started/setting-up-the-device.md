---
zendesk:
  article_id: 24737667232413
  name: Getting started with Home Assistant Green
  position: 1
---

This sections shows you how to setup your device and get started with Home Assistant

 <div class='videoWrapper'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/u8sk6B8_Qkc?start=33" videotitle="Getting started with Home Assistant Green" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" controls>
    </iframe>
  </div>

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/green/green-box-contents.webp" "Home Assistant Green with power supply" %}
{% stepContent %}

- Home Assistant Green
- Ethernet connection to your local network and internet access
- Web browser, tablet, or phone (Android or iOS)
- Electrical outlet

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To get started with Home Assistant Green

{% steps %}
{% step "Connecting the Ethernet cable" %}
{% image "/static/img/green/green_connect_ethernet.webp" "Connecting the Ethernet cable to the device" %}
{% stepContent %}

   1. Plug in your Ethernet cable and make sure it is locked into place.
   2. Connect the other end of the Ethernet cable to your router or switch.

{% endstepContent %}
{% endstep %}

{% step "Powering up" %}
{% image "/static/img/green/green_connect_power.webp" "Connecting the power cable to the device" %}
{% stepContent %}

   - Connect the power to the electrical outlet and then to the Home Assistant Green.

{% endstepContent %}
{% endstep %}

{% step "Checking the status light" %}
{% image "/static/img/green/green_yellow_heartbeat.webp" "Yellow status light blinking in a heartbeat pattern" %}
{% stepContent %}

   - Wait for a few minutes until the yellow light starts blinking in a heartbeat pattern.

{% endstepContent %}
{% endstep %}

{% step "Getting started with Home Assistant" %}
{% image "/static/img/green/getting_started_04.png" "Home Assistant user interface on a screen" %}
{% stepContent %}

   1. Initial startup may take a while, depending on your internet connection.
   2. Install the app.

      To access Home Assistant from your mobile device, use the QR code to locate the app in the app store.

   3. Select your Home Assistant server.

      **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196:8123`

      **Desktop**: Visit [http://homeassistant.local:8123](http://homeassistant.local:8123) to access the Home Assistant user interface.

   4. The Home Assistant user interface guides you through the initial onboarding.

   5. For further information, refer to the instructions provided under [https://www.home-assistant.io/getting-started/onboarding/](https://www.home-assistant.io/getting-started/onboarding/).

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Home Assistant Onboarding](https://www.home-assistant.io/getting-started/onboarding/)
- [About the LEDs](/hc/en-us/articles/25210352599197)
- [I can't access the system via http://homeassistant.local:8123](/hc/en-us/articles/25140903526301)