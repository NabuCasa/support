---
zendesk:
  article_id: 25800285426589
  name: Reinstalling the firmware from bootloader mode
  position: 4
  labels: voice pe, troubleshooting, reinstall
---

Reinstalling the firmware from bootloader mode is an **extreme measure**. Only do this if you have tried and failed to using the steps on [reinstalling the firmware](/hc/en-us/articles/25800241218717).

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/voice-pe/voice_prereqs_02.png" "Illustration of prerequisites" %}
{% stepContent %}

- Home Assistant Voice Preview Edition.
- USB-C cable and USB power supply (these are not included in the box).
- Home Assistant installation up and running.
  - If you do not have Home Assistant installed yet, refer to the [installation documentation](https://www.home-assistant.io/installation/) for instructions.
  - You are logged in with a user that has Administrator rights on Home Assistant.
    - To check if a user has Administrator rights, you need to be logged in with Administrator rights.
    - Go to [**Settings** > **People**](https://my.home-assistant.io/redirect/people/) and check the settings for that user.
- This guide was tested using [Home Assistant Operating System](https://www.home-assistant.io/docs/glossary/#home-assistant-operating-system) on [Home Assistant Yellow](https://www.home-assistant.io/yellow/) and on [Home Assistant Green](https://www.home-assistant.io/green/).
- The password to your Wi-Fi network.

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To reinstall the firmware from bootloader mode

{% steps %}
{% step "Entering bootloader mode" %}
{% image "/static/img/voice-pe/voice_authorize.png" "Image showing a hand pressing the central button" %}
{% stepContent %}

   1. Disconnect the device from power.
   2. Press and hold the button.
   3. Connect the device to your computer.
   4. Keep pressing the button for a short moment, then let go.
      - There is no LED or sound indicating it, but the device is now in bootloader mode.

{% endstepContent %}
{% endstep %}

{% step "Opening the web installer page" %}
{% image "/static/img/voice-pe/voice_esp_connect_usb.png" "Screenshot showing USB device list" %}
{% stepContent %}

   1. Open the ESPHome web installer page for Home Assistant Voice Preview Edition.
      - {% stepInfo "The web installer is a tool that allows you to install software on your device." %}
   2. On the web installer page, select **Connect** and select the device from the list of USB devices.
   3. Select **Connect** again.

{% endstepContent %}
{% endstep %}

{% step "Installing the firmware" %}
{% image "/static/img/voice-pe/voice_esp_connect_usb.png" "Screenshot showing USB device list" %}
{% stepContent %}

   1. Select **Install** and follow the wizard.
   2. Once the installation is complete, power-cycle the device:
   3. Unplug the USB-C cable and plug it back in.
   4. To add the device to Home Assistant, follow the [getting started](/hc/en-us/articles/25918770371229) steps.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Reinstalling the firmware of the Home Assistant Voice Preview Edition](/hc/en-us/articles/25800241218717)
- [Home Assistant installation documentation](https://www.home-assistant.io/installation/)
- [Getting started with Home Assistant Voice Preview Edition](/hc/en-us/articles/25918770371229)