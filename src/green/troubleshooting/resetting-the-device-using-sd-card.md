---
zendesk:
  article_id: 25162566451485
  name: Resetting the device using an SD card
  position: 2
  labels: green, troubleshooting
---

Perform this procedure if you want to perform a factory reset on your device.

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/green/green_without_sd_card.png" "Image showing a Home Assistant Green without an SD card" %}
{% stepContent %}

- Home Assistant Green
- microSD card
- Memory card reader for microSD (your computer might have an integrated card reader, otherwise use an external one)
- Computer with internet access
- You have [created a backup](/hc/en-us/articles/25154828325917) and stored it on another system

{% endstepContent %}
{% endprereq %}
{% endsteps %}

{% hazard "notice" %}

**Risk of losing your configuration**

This process clears the data disk on your Green. Unless you [create a backup](https://www.home-assistant.io/common-tasks/general/#backups), you will lose all data and configuration settings.

- A device reset wipes the data partition of your device. It removes all user data as well as Home Assistant Core, Supervisor, and any installed add-ons. The Home Assistant Operating System stays on the system.
- Once a device wipe is initiated, the data partition is marked as to be cleared on boot. Then, the system reinstalls the latest version of all Home Assistant components.

- To avoid losing data and configuration settings, [create a backup](https://www.home-assistant.io/common-tasks/general/#backups) and [define a backup location](https://www.home-assistant.io/common-tasks/general/#defining-backup-locations) outside of your Home Assistant.

{% endhazard %}

## To copy the Home Assistant Green OS to the SD card

{% steps %}
{% step "Downloading the Home Assistant Green OS installer" %}
{% image "/static/img/green/download-circle-outline.svg" "Downloading the required software" %}
{% stepContent %}

1. To download the Home Assistant Green OS installer, paste this into your browser.

    ```text
      https://github.com/NabuCasa/buildroot-installer/releases/tag/green-installer-20240410
    ```

2. To start the download, select the file *green-installer-20240410.img.xz*.
3. Download and start [Balena Etcher](https://www.balena.io/etcher).
   - You may need to run it with administrator privileges on Windows.

{% endstepContent %}
{% endstep %}

{% step "Selecting the image" %}
{% image "/static/img/green/etcher1_file.png" "Selecting the image" %}
{% stepContent %}

- Choose **Flash from file**, then select the image you just downloaded.

{% endstepContent %}
{% endstep %}

{% step "Selecting the target" %}
{% image "/static/img/green/etcher3.png" "Selecting the target" %}
{% stepContent %}

- To select the target, insert the SD card to your computer.
  - **Select target**, then pick the SD card as target.

{% endstepContent %}
{% endstep %}

{% step "Writing the image" %}
{% image "/static/img/green/etcher5.png" "Writing the image" %}
{% stepContent %}

- To start writing the image to the SD card, select **Flash!**.

{% endstepContent %}
{% endstep %}

{% step "Flash complete" %}
{% image "/static/img/green/etcher6.png" "Flash complete" %}
{% stepContent %}

- Once Balena Etcher has finished writing the image, you will see a confirmation.
- You can now remove the SD card.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## To reset the device using an SD card

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

{% step "Inserting the SD card" %}
{% image "/static/img/green/green_reset_insert_sd.webp" "Inserting the SD card" %}
{% stepContent %}

- Insert the SD card with the Home Assistant Green OS installer.
- Make sure the Home Assistant Green is connected to the Internet.

{% endstepContent %}
{% endstep %}

{% step "Powering up the system" %}
{% image "/static/img/green/green_reset_power-up_after_sd-insert.webp" "Powering up the system" %}
{% stepContent %}

- Press the power button.
- The operating system is being written to the eMMC.
- During this time, the yellow LED is blinking fast.
- Wait for the LEDs to turn off.

{% endstepContent %}
{% endstep %}

{% step "Removing the SD card" %}
{% image "/static/img/green/green_reset_remove_sd-card.webp" "Removing the SD card" %}
{% stepContent %}

- When the LEDs turn off, the operating system has been written to the eMMC.
- Remove the SD card.

{% endstepContent %}
{% endstep %}

{% step "Powering up the system" %}
{% image "/static/img/green/green_reset_power-up_heartbeat.webp" "Powering up the system" %}
{% stepContent %}

- Press the power button.
- Once the yellow LED blinks in a heartbeat pattern, the system is ready.

{% endstepContent %}
{% endstep %}

{% step "Getting started with Home Assistant" %}
{% image "/static/img/green/getting_started_04.png" "Getting started with Home Assistant" %}
{% stepContent %}

- **Info**: Initial startup may take a while, depending on your internet connection.

1. Install the app: To access Home Assistant from your mobile device, use the QR code to locate the app in the app store.
2. Select your Home Assistant server:
   - **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196:8123`.
   - **Desktop**: Visit [http://homeassistant.local:8123](http://homeassistant.local:8123) to access the Home Assistant user interface.
3. The Home Assistant user interface guides you through the initial onboarding.
   - **Info**: For further information, refer to the instructions provided.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Creating a backup](/hc/en-us/articles/25154828325917)
- [Onboarding](https://www.home-assistant.io/getting-started/onboarding/)
- [Can't access homeassistant.local:8123](/hc/en-us/articles/25140903526301)
