---
zendesk:
  article_id: 24980017436701
  name: Getting started
  position: 1
  labels: voice pe, getting started
---

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

If you don't wan't to use a phone and your Home Assistant has Bluetooth: either onboard Bluetooth, or an ESPHome device set up as a [Bluetooth proxy](https://esphome.io/projects/?type=bluetooth) and connected to Home Assistant.

## To connect the device to your Wi-Fi and to Home Assistant

1. Connecting the device to power source.

    ![Image showing the white twinkle status animation](/static/img/voice-pe/status_white_twinkle.gif)

2. Opening the Home Assistant UI.

    ![Illustration representing the Home Assistant UI](/static/img/voice-pe/ha_companion_app.png)

3. Adding the integration.

    ![Screenshot of Bluetooth discovery](/static/img/voice-pe/voice_ble_improv_discovered.png)

4. Entering your Wi-Fi credentials.

    ![Screenshot of Wi-Fi dialog](/static/img/voice-pe/voice_enter_wi-fi_creds.png)

5. Authorizing your connection.

    ![Image showing a hand pressing the central button](/static/img/voice-pe/voice_authorize.png)

6. Completing device discovery.

    ![Screenshot showing how to add the integration](/static/img/voice-pe/voice_add_integration_01.png)

7. Following the wizard steps.

    ![Screenshot of onboarding wizard](/static/img/voice-pe/voice_choose_hw_for_processing.png)

8. Talking to Home Assistant.

    ![Speech bubbles](/static/img/voice-pe/speak.png)

## Related topics

- [Home Assistant installation documentation](https://www.home-assistant.io/installation/)
- [Home Assistant Companion app](https://companion.home-assistant.io/)