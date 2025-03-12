---
zendesk:
  article_id: 25162566451485
  name: Resetting the device using an SD card
  position: 2
  labels: green, troubleshooting
---

Perform this procedure if you want to perform a factory reset on your device.

## Prerequisites

- Home Assistant Green
- microSD card
- Memory card reader for microSD (your computer might have an integrated card reader, otherwise use an external one)
- Computer with internet access
- You have [created a backup](/hc/en-us/articles/25154828325917-Creating-a-backup) and stored it on another system

![Image showing a Home Assistant Green without an SD card](/static/img/green/green_without_sd_card.png)

> **Note**
> This process clears the data disk on your Green. Unless you [create a backup](https://www.home-assistant.io/guides/create-backup/), you will lose all data and configuration settings.
> A device reset wipes the data partition of your device. It removes all user data as well as Home Assistant Core, Supervisor, and any installed add-ons. The Home Assistant Operating System stays on the system.
> Once a device wipe is initiated, the data partition is marked as to be cleared on boot. Then, the system reinstalls the latest version of all Home Assistant components.

## To copy the Home Assistant Green OS to the SD card

1. To download the Home Assistant Green OS installer, paste this [URL](https://github.com/NabuCasa/buildroot-installer/releases/tag/green-installer-20240410) into your browser.
   - To start the download, select the file *green-installer-20240410.img.xz*.
   - Download and start [Balena Etcher](https://www.balena.io/etcher).
      - You may need to run it with administrator privileges on Windows.
   ![Downloading the required software](/static/img/green/download-circle-outline.svg)

2. To select the image, select **Flash from file** and select the image you just downloaded.

   ![Selecting the image](/static/img/green/etcher1_file.png)

3. To select the target, insert the SD card to your computer.
   - Select the **Select target** button and select the SD card as target.

   ![Selecting the target](/static/img/green/etcher3.png)

4. To start writing the image to the SD card, select **Flash!**.

   ![Writing the image](/static/img/green/etcher5.png)

5. Flash complete.

   - Once Balena Etcher has finished writing the image, you will see a confirmation.
   - You can now remove the SD card.

   ![Flash complete](/static/img/green/etcher6.png)

## To reset the device using an SD card

1. Shutting down the system.

   1. In your Home Assistant UI, go to **Settings** > **System** and in the top right, select the three-dots menu. Select **Restart Home Assistant**.
      - Then, select **Shut down system**.
      - Wait until all the LEDs turned off.
   2. In case the shutdown via UI should not work:
      - To shutdown gracefully, press the power button for 6 seconds.
      - For a hard shutdown (do this only if all else fails), press the power button for 12 seconds.
   3. Remove the power cable to remove power from the system.

   ![Shutting down the system](/static/img/green/shutdown_system.png)

2. Inserting the SD card.

   - Insert the SD card with the Home Assistant Green OS installer.
   - Make sure the Home Assistant Green is connected to the Internet.

   ![Inserting the SD card](/static/img/green/green_reset_insert_sd.webp)

3. Powering up the system.

   - Press the power button.
   - The operating system is being written to the eMMC.
   - During this time, the yellow LED is blinking fast.
   - Wait for the LEDs to turn off.

   ![Powering up the system](/static/img/green/green_reset_power-up_after_sd-insert.webp)

4. Removing the SD card.
   - When the LEDs turn off, the operating system has been written to the eMMC.
   - Remove the SD card.

   ![Removing the SD card](/static/img/green/green_reset_remove_sd-card.webp)

5. Powering up the system.

   - Press the power button.
   - Once the yellow LED blinks in a heartbeat pattern, the system is ready.

   ![Powering up the system](/static/img/green/green_reset_power-up_heartbeat.webp)

6. Getting started with Home Assistant.

   - **Info**: Initial startup may take a while, depending on your internet connection.
   1. Install the app: To access Home Assistant from your mobile device, use the QR code to locate the app in the app store.
   2. Select your Home Assistant server:
      - **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196:8123`.
      - **Desktop**: Visit [http://homeassistant.local:8123](http://homeassistant.local:8123) to access the Home Assistant user interface.
   3. The Home Assistant user interface guides you through the initial onboarding.
      - **Info**: For further information, refer to the instructions provided.

   ![Getting started with Home Assistant](/static/img/green/getting_started_04.png)

## Related topics

- [Creating a backup](/hc/en-us/articles/25154828325917-Creating-a-backup)
- [Onboarding](https://www.home-assistant.io/getting-started/onboarding/)
- [Can't access homeassistant.local:8123](/hc/en-us/articles/25140903526301-I-can-t-access-the-system-via-http-homeassistant-local-8123-what-can-I-do)
