{% steps %}
{% step "Connecting the device to the internet" %}
{% image "/static/img/yellow/plug-ethernet-power.jpeg" "Home Assistant Yellow with power supply" %}
{% stepContent %}

- Plug in your Ethernet cable and make sure it is locked into place.
- The other end of the Ethernet cable will need to be connected to your router or switch and connected to the internet.
- If you are not using PoE, connect the power to the wall and then to the Home&nbsp;Assistant Yellow.

{% endstepContent %}
{% endstep %}

{% step "Getting started with Home Assistant" %}
{% image "/static/img/green/getting_started_04.png" "Home Assistant user interface on a screen" %}
{% stepContent %}

1. Get started with Home Assistant.

   1. Initial startup may take a while, depending on your internet connection.
   2. Install the app.

      To access Home Assistant from your mobile device, use the QR code to locate the app in the app store.

   3. Select your Home Assistant server.

      **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196`

      **Desktop**: Visit [http://homeassistant.local](http://homeassistant.local) to access the Home Assistant user interface.

      **Info**: If that address doesn't load, add `:8123` to the end of either address. Home Assistant uses one of these two ports depending on how and when it was installed.

   4. The Home Assistant user interface guides you through the initial onboarding.

   5. For further information, refer to the instructions provided under [https://www.home-assistant.io/getting-started/onboarding/](https://www.home-assistant.io/getting-started/onboarding/).

{% endstepContent %}
{% endstep %}
{% endsteps %}
