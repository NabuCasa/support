---
zendesk:
  article_id: 25800241218717
  name: Reinstalling the firmware
  position: 3
  labels: voice pe, troubleshooting, reinstall
---

It is not usually necessary to reinstall the firmware. Only follow this procedure if you have a good reason to do so. Normally, you receive an update notification for the Home Assistant Voice Preview Edition software, just like any other Home Assistant update.

## To reinstall the firmware

{% steps %}
{% step "Connecting the device to your computer" %}
{% image "/static/img/voice-pe/voice_esp_connect_usb.png" "Screenshot showing USB device list" %}
{% stepContent %}

   1. Take a USB-C cable and connect the device to your computer.
   2. Open the ESPHome [web installer page for Home Assistant Voice Preview Edition](https://esphome.github.io/home-assistant-voice-pe/).
      - **Info**: The web installer page is a tool that allows you to install firmware to your device.
   3. On the web installer page, select **Connect** and select the device from the list of USB devices.
   4. Select **Connect** again.

{% endstepContent %}
{% endstep %}

{% step "Installing the firmware" %}
{% image "/static/img/voice-pe/voice_esp_install.png" "Screenshot showing installation wizard" %}
{% stepContent %}

   1. Select **Install** and follow the wizard.
   2. When prompted, enter the credentials to your Wi-Fi network.
      - If you have different SSIDs (Wi-Fi network names) for the 2.4 GHz and the 5 GHz Wi-Fi networks, make sure you use the credentials for the 2.4 GHz network, as the device cannot connect to 5 GHz Wi-Fi networks.
   3. Congratulations! You have successfully reinstalled the firmware.
      - **Troubleshooting**: If the reinstallation was not successful, try to [reinstall the firmware from bootloader mode](/hc/en-us/articles/25800285426589).
   4. To add the device to Home Assistant, follow the [Getting started](/hc/en-us/articles/25918770371229) steps.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [ESPHome web installer page for Home Assistant Voice Preview Edition](https://esphome.github.io/home-assistant-voice-pe/)
- [Reinstall the firmware from bootloader mode](/hc/en-us/articles/25800285426589)
- [Getting started with Home Assistant Voice Preview Edition](/hc/en-us/articles/25918770371229)