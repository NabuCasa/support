---
zendesk:
  article_id: 25918770371229
  name: Getting started with Home Assistant Preview Edition
  position: 1
  labels: voice pe, getting started
---

<div class='videoWrapper'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZgoaoTpIhm8?start=1940" frameborder="0" videotitle="Introducing the Home Assistant Voice Preview Edition - Voice: Chapter 8" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" controls></iframe>
</div>

## Prerequisites

- Home Assistant Voice Preview Edition
- USB-C cable and USB power supply (these are not included in the box)
- Home Assistant installation.
  - Make sure you have the most recent version installed.
  - If you do not have Home Assistant installed yet, refer to the [installation documentation](https://www.home-assistant.io/installation/) for instructions.
  - You are logged in with a user that has Administrator rights on Home Assistant
    - To check if a user has Administrator rights, you need to be logged in with Administrator rights.
    - Go to [**Settings** > **People**](https://my.home-assistant.io/redirect/people/) and check the [settings](https://www.home-assistant.io/integrations/person/#adding-a-person-to-home-assistant) for that user.
- This guide was tested using [Home Assistant Operating System](https://www.home-assistant.io/docs/glossary/#home-assistant-operating-system) on [Home Assistant Yellow](https://www.home-assistant.io/yellow/) and on [Home Assistant Green](https://www.home-assistant.io/green/).
- The password to your Wi-Fi network

### Onboarding via phone

Using your iPhone/Android is the easiest way to connect your Home Assistant Voice to your Wi-Fi network.

- Have the [Home Assistant Companion](https://companion.home-assistant.io/) app installed on your iPhone or Android and configured to connect to your Home Assistant instance.
- Make sure the version is up to date.
- You are logged in to your Home Assistant Companion app with a user that has Administrator rights.
- On your phone, make sure Bluetooth is enabled.
- Make sure the Home Assistant Companion App has Bluetooth permission:
  - **On iPhone**, go to **Settings** > **Privacy & Security** and enable Bluetooth for Home Assistant.
  - **On Android**: make sure you’ve enabled precise location service permissions for Home Assistant. It is used for onboarding only. You can disable it again afterward.
    - Go to **Settings** > **Apps** > **Home Assistant** > **Permissions** and enable Location, **Allow all the time and Use precise location**.

### Onboarding via Bluetooth

If you don't want to use a phone and your Home Assistant has Bluetooth: either onboard Bluetooth, or an ESPHome device set up as a [Bluetooth proxy](https://esphome.io/projects/?type=bluetooth) and connected to Home Assistant.

## To connect the device to your Wi-Fi and to Home Assistant

{% steps %}

{% step "Connecting the device to the power source" %}
{% image "/static/img/voice-pe/status_video-white-twinkle.gif" "Image showing the white twinkle status animation" %}
{% stepContent %}

- Use the USB-C cable to connect the device to a power source.
  - {% stepInfo "You should see a warm white twinkle animation." %}

{% endstepContent %}
{% endstep %}

{% step "Opening the Home Assistant UI" %}
{% image "/static/img/voice-pe/ha_companion_app.png" "Illustration representing the Home Assistant UI" %}
{% stepContent %}

- If you're using your phone, open the Home Assistant Companion App.
- If your Home Assistant has Bluetooth, open Home Assistant in a browser.

{% endstepContent %}
{% endstep %}

{% step "Adding the integration" %}
{% image "/static/img/voice-pe/voice_ble_improv_discovered.png" "Screenshot of Bluetooth discovery" %}
{% stepContent %}

   1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/) and under **Discovered**, you should see the device as "home-assistant-xx Improv via BLE".
   2. Select **Add**, then **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Entering your Wi-Fi credentials" %}
{% image "/static/img/voice-pe/voice_enter_wi-fi_creds.png" "Screenshot of Wi-Fi dialog" %}
{% stepContent %}

   - In the SSID field, enter the name of your Wi-Fi.
   - If you have different Wi-Fi names for the 2.4 GHz and the 5 GHz Wi-Fi networks, make sure you use the credentials for the 2.4 GHz network.

{% endstepContent %}
{% endstep %}

{% step "Authorizing your connection" %}
{% image "/static/img/voice-pe/voice_authorize.png" "Image showing a hand pressing the central button" %}
{% stepContent %}

   1. When prompted, press the center button on Home Assistant Voice.
      - {% stepInfo "This is to confirm that you are the one trying to connect the device." %}
      - **Troubleshooting**: If you now see a message “Failed to connect”, continue with the [Troubleshooting steps](/hc/en-us/articles/25800488193949).
      - Success! Your device is now connected to your Wi-Fi. Close.

{% endstepContent %}
{% endstep %}

{% step "Completing device discovery" %}
{% image "/static/img/voice-pe/voice_add_integration_01.png" "Screenshot showing how to add the integration" %}
{% stepContent %}

   1. Under **Discovered**, add the **Home Assistant Voice XXX**.
   2. **Discovered ESPHome node**: select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Following the wizard steps" %}
{% image "/static/img/voice-pe/voice_choose_hw_for_processing.png" "Screenshot of onboarding wizard" %}
{% stepContent %}

   1. The wizard starts checking for updates.
      - Follow the instructions on screen.
   2. If you are connected to Home Assistant Cloud, the Cloud Assistant is used. Your job is done here.
   3. If you are not connected to Home Assistant Cloud, you will see a step What Hardware do you want to use?:
      - **Option 1**: If you choose Home Assistant Cloud:
        - If you already have Home Assistant Cloud account, select **Log in** and enter your login credentials. If not, enter email and password, select **Next** and follow the wizard.
        - If you do not have an account yet, select **Learn more**, then **Try 1 month for free**.
        - For more information, refer to the guide on [Getting started with Home Assistant Cloud](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/).
      - **Option 2**: If you choose **Do it yourself**:
        - {% stepInfo "If you have lower-power hardware, this option is not recommended. Weaker Home Assistant hardware can lead to slow speech processing." %}
        - Select **Setup with add-ons**.
        - **Result**: The required add-ons are being installed: **Whisper**, **Piper**.
   4. On the integrations page, under **Discovered**, **Add** the **Whisper** and **Piper** integrations.

{% endstepContent %}
{% endstep %}

{% step "Talking to Home Assistant" %}
{% image "/static/img/voice-pe/speak.png" "Speech bubbles" %}
{% stepContent %}

   - Start controlling Home Assistant by saying a [supported voice command](https://www.home-assistant.io/voice_control/builtin_sentences/):
     - For example, “What's the time” “Turn on the light in the living room”, “Set the timer to 5 minutes”, “Is the front door locked”.
       - Make sure you’re using the area name exactly as you defined it in Home Assistant.
     - **Troubleshooting**: Is the device you want to control via Assist (for example a specific light) not responding to your voice commands? Make sure the device is [exposed to Assist](https://www.home-assistant.io/voice_control/voice_remote_expose_devices/).

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Home Assistant installation documentation](https://www.home-assistant.io/installation/)
- [Home Assistant Companion app](https://companion.home-assistant.io/)
- [Supported voice commands](https://www.home-assistant.io/voice_control/builtin_sentences/)
- [Exposing devices to Assist](https://www.home-assistant.io/voice_control/voice_remote_expose_devices/)
