<!---Powering up the Yellow with CM5 and NVMe after a migration from CM4 with NVMe-->

{% steps %}
{% step "Powering up your Home Assistant Yellow" %}
{% image "/static/img/yellow/yellow_heartbeat_yellow_led.webp" "Home Assistant Yellow with power supply" %}
{% stepContent %}

- Plug in your Ethernet cable and make sure it is locked into place.
- The other end of the Ethernet cable will need to be connected to your router or switch and connected to the internet.
- If you are not using PoE, connect the power to the wall and then to the Home&nbsp;Assistant Yellow.

{% endstepContent %}
{% endstep %}

{% step "Getting started with Home Assistant" %}
{% image "/static/img/yellow/section_view.png" "Home Assistant user interface on a screen" %}
{% stepContent %}

**Notice**: Initial startup may take a while, depending on your internet connection.

1. Open Home Assistant.

    **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196:8123`

    **Desktop**: Visit [http://homeassistant.local:8123](http://homeassistant.local:8123) to access the Home Assistant user interface.

2. As your data is stored on the NVMe, your dashboard comes up as usual. No additional steps required.

{% endstepContent %}
{% endstep %}
{% endsteps %}
