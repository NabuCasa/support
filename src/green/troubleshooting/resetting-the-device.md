---
zendesk:
  article_id: 25161225495837
  name: Resetting the device
  position: 1
  labels: green, troubleshooting
---

Perform this procedure if you have Home Assistant 13.1 or later and you want to do a factory reset. If you have a new device, you likely have an older version of Home Assistant Operating System (older than 13.1). In this case, [reset the device using an SD card](/hc/en-us/articles/25162566451485)

## Prerequisites

- Home Assistant Green
- Home Assistant Operating System 13.1 or later installed.
  - To see which version you have, go to [**Settings** > **About**](https://my.home-assistant.io/redirect/info/).
- PC with internet access
- You have [created a backup](/hc/en-us/articles/25154828325917) and stored it on another system.

![image showing a green without an SD card](/static/img/green/green_without_sd_card.png)

{% include 'about-device-reset.md' %}

## To reset the device

{% steps %}
{% step "Shutting down the system" %}
{% image "/static/img/green/shutdown_system.png" "Shutting down the system" %}
{% stepContent %}

   1. In your Home Assistant UI, go to **Settings** > **System** and in the top right, select the three-dots menu. Select **Restart Home Assistant**.
      - Then, select **Shut down system**.
      - Wait until all the LEDs turned off.
   2. In case the shutdown via UI should not work:
      - To shutdown gracefully, press the power button for 6 seconds.
      - For a hard shutdown (do this only if all else fails), press the power button for 12 seconds.
   3. Remove the power cable to remove power from the system.

{% endstepContent %}
{% endstep %}

{% step "Powering up the system" %}
{% image "/static/img/green/green_reset.webp" "Powering up the system" %}
{% stepContent %}

   1. Press and hold the button.
      - Reapply power and make sure the system has an Internet connection.
      - Keep the button pressed until the yellow LED turns on solid.
      - **Troubleshooting**: The yellow LED blinks, instead of turning on solid. This means you do not have the HAOS version required to perform this procedure. In this case, [reset the device using an SD card](/hc/en-us/articles/25162566451485)
   2. Release the button.
      - The LEDs start blinking.
      - The Home Assistant Operating System now downloads the latest version of Home Assistant Supervisor and Home Assistant Core.
      - Due to the downloads, it can take a while until Home Assistant becomes accessible again.

{% endstepContent %}
{% endstep %}

{% step "Getting started with Home Assistant" %}
{% image "/static/img/green/getting_started_04.png" "Getting started with Home Assistant" %}
{% stepContent %}

- **Info** Initial startup may take a while, depending on your internet connection.

   1. Installing the app.
      - To access Home Assistant from your mobile device, use the QR code to locate the app in the app store.
   2. Selecting your Home Assistant server.
      - **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196:8123`
      - **Desktop**: Visit [http://homeassistant.local:8123](http://homeassistant.local:8123) to access the Home Assistant user interface.
   3. The Home Assistant user interface guides you through the initial onboarding.

      - **Info** For further information, refer to the instructions.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Creating a backup](/hc/en-us/articles/25154828325917)
- [Onboarding](https://www.home-assistant.io/getting-started/onboarding/)
- [Can't access homeassistant.local:8123](/hc/en-us/articles/25140903526301)
