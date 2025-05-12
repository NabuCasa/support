---
zendesk:
  article_id: 25294047501341
  name: Home Assistant Yellow Standard (with CM4 pre-installed)
  description: Home Assistant Yellow Standard with a Raspberry Pi Compute Module 4 preinstalled. This variant is no longer manufactured.
  position: 10
  labels: yellow, getting started, standard, CM4 pre-installed, CM4
---

> **Note**
> Although this variant is no longer manufactured, it will continue to receive the same support as the kit models.
> If you are looking for more of a plug-and-play experience, take a look at the [Home Assistant Green](https://www.home-assistant.io/green).

## Prerequisites

- Home Assistant Yellow
- Ethernet cable
- Power supply

![Home Assistant Yellow with Ethernet cable and power supply](/static/img/yellow/yellow-standard-unboxed.jpeg)

## To get started with Home Assistant Yellow

{% steps %}
{% step "Connect the device to the internet" %}
{% image "/static/img/yellow/yellow-standard-unboxed.jpeg" "Home Assistant Yellow with power supply" %}
{% stepContent %}

- Plug in your Ethernet cable and make sure it is locked into place.
- The other end of the Ethernet cable will need to be connected to your router or switch and connected to the internet.
- **Note**: Internet is required because the newly installed Home Assistant OS does not contain all Home Assistant components yet. It downloads the latest version of Home Assistant Core on first start.

{% endstepContent %}
{% endstep %}

{% step "Power it up" %}
{% image "/static/img/yellow/plug-ethernet-power.jpeg" "Connecting the power cable to the device" %}
{% stepContent %}

- Connect the power to the electrical outlet and then to the Home Assistant Yellow.

{% endstepContent %}
{% endstep %}

{% step "Get started with Home Assistant" %}
{% image "/static/img/green/getting_started_04.png" "Home Assistant user interface on a screen" %}
{% stepContent %}

1. Initial startup may take a while, depending on your internet connection.
2. Install the app.

   - To access Home Assistant from your mobile device, use the QR code to locate the app in the app store.

3. Select your Home Assistant server.

  **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196:8123`

  **Desktop**: Visit [http://homeassistant.local:8123](http://homeassistant.local:8123) to access the Home Assistant user interface.

4. The Home Assistant user interface guides you through the initial onboarding.

5. For further information, refer to the instructions provided under [https://www.home-assistant.io/getting-started/onboarding/](https://www.home-assistant.io/getting-started/onboarding/).

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Getting started with Home Assistant](https://www.home-assistant.io/getting-started/onboarding/)
- [Home Assistant Green](https://www.home-assistant.io/green)
