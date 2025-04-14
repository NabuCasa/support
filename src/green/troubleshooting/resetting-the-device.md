---
zendesk:
  article_id: 25161225495837
  name: Resetting the device
  position: 1
  labels: green, troubleshooting
---

Perform this procedure if you have Home Assistant 13.1 or later and you want to do a factory reset. If you have a new device, you likely have an older version of Home Assistant Operating System (older than 13.1). In this case, [reset the device using an SD card](/guides/reset_with_sd_card/)

## Prerequisites

- Home Assistant Green
- Home Assistant Operating System 13.1 or later installed.
   - To see which version you have, go to [**Settings** > **About**](https://my.home-assistant.io/redirect/info/).
- PC with internet access
- You have [created a backup](/hc/en-us/articles/25154828325917-Creating-a-backup) and stored it on another system.

![image showing a green without an SD card](/static/img/green/green_without_sd_card.png)

{% partial 'about-device-reset.md' %}

## To reset the device

1. Shut down the system

   1. In your Home Assistant UI, go to **Settings** > **System** and in the top right, select the three-dots menu. Select **Restart Home Assistant**.
      - Then, select **Shut down system**.
      - Wait until all the LEDs turned off.
   2. In case the shutdown via UI should not work:
      - To shutdown gracefully, press the power button for 6 seconds.
      - For a hard shutdown (do this only if all else fails), press the power button for 12 seconds.
   3. Remove the power cable to remove power from the system.
   ![Shutting down the system](/static/img/green/shutdown_system.png)

2. Power up the system
   1. Press and hold the button.
      - Reapply power and make sure the system has an Internet connection.
      - Keep the button pressed until the yellow LED turns on solid.
      - **Troubleshooting**: The yellow LED blinks, instead of turning on solid. This means you do not have the HAOS version required to perform this procedure. In this case, [reset the device using an SD card](/guides/reset_with_sd_card/)
   2. Release the button.
      - The LEDs start blinking.
      - The Home Assistant Operating System now downloads the latest version of Home Assistant Supervisor and Home Assistant Core.
      - Due to the downloads, it can take a while until Home Assistant becomes accessible again.
      ![Powering up the system](/static/img/green/green_reset.webp)

3. Getting started with Home Assistant
   - **Info**: Initial startup may take a while, depending on your internet connection.
   1. **Install the app**: To access Home Assistant from your mobile device, use the QR code to locate the app in the app store.
   2. **Select your Home Assistant server**:
      - **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196:8123`
      - **Desktop**: Visit [http://homeassistant.local:8123](http://homeassistant.local:8123) to access the Home Assistant user interface.
   3. The Home Assistant user interface guides you through the initial onboarding.
      - **Info**: For further information, refer to the instructions
   ![Getting started with Home Assistant](/static/img/green/getting_started_04.png)

## Related topics

- [Creating a backup](/hc/en-us/articles/25154828325917-Creating-a-backup)
- [Onboarding](https://www.home-assistant.io/getting-started/onboarding/)
- [Can't access homeassistant.local:8123](/hc/en-us/articles/25140903526301-I-can-t-access-the-system-via-http-homeassistant-local-8123-what-can-I-do)

