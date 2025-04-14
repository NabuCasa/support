<!---Installing Home Assistant Software on Kit, CM4-->

1. Installing the Raspberry Pi Imager

   - Install the Raspberry Pi Imager on your computer as described under [https://www.raspberrypi.com/software/](https://www.raspberrypi.com/software/).
      - **Info**: If your platform doesn't support the Raspberry Pi Imager, you can use another imager (e.g. balenaEtcher) and flash the Home Assistant OS Installer for Yellow directly from [GitHub releases](https://github.com/NabuCasa/yellow-buildroot/releases).
      - **Important**: If you are using a Raspberry Pi Compute Module 4 (CM4) that already has software on it, this procedure does not work. Ignore this and the following steps.
         - Instead, follow the procedure [Option 2: Reinstall Home Assistant OS using rpiboot]().
         - The reason is that by default, the CM4 tries to boot from the internal eMMC before booting from the USB flash drive.

   ![Screenshot of Raspberry Pi Imager Download page](/static/img/yellow/rpi_imager.png)

1. Open Raspberry Pi Imager.

   - Under **Raspberry Pi Device**, select **Raspberry Pi 4**.

   ![Raspberry Pi Imager start page](/static/img/yellow/start_rpi_imager.png)

1. Choosing the operating system to install on CM4.

   - Select **Choose OS**.
   - Choose **Other specific-purpose OS**.
   - Choose **Home assistants and home automation**.
   - Choose **Home Assistant**.
   - Choose **Home Assistant OS Installer for Yellow**.

   ![Clip showing how to choose the Home Assistant Operating System](/static/img/yellow/rpi_choose_ha_os.gif)

1. Choosing storage.

   - Insert the USB flash drive into the computer. Note: The contents of this drive will be overwritten.
   - From the dropdown menu, select your USB flash drive.

   ![Screenshot showing the external storage](/static/img/yellow/rpi_choose_storage.png)

1. Writing the installer onto the drive.

   - Select the **Next** button to start the process.
   - Wait for the Home Assistant OS Installer to be written to the USB flash drive.

   ![Screenshot showing the next button](/static/img/yellow/rpi_choose_next.png)

1. Eject the USB flash drive.

1. Insert the USB flash drive with the Home&nbsp;Assistant OS Installer into your Home&nbsp;Assistant&nbsp;Yellow&nbsp;Kit.

   ![Image showing the flash drive plugged into Home Assistant Yellow](/static/img/yellow/plug-usb-flash.jpeg)

1. Connect the Ethernet cable to your Home Assistant Yellow Kit and make sure it has access to the internet.

   - **Note**: Internet is required because the newly installed Home Assistant OS does not contain all Home Assistant components yet. It downloads the latest version of Home Assistant Core on first start.

   ![Image showing the flash drive and the Ethernet cable plugged into Home Assistant Yellow](/static/img/yellow/plug-usb-flash-ethernet.jpeg)

1. Connecting the power supply (if you don't have PoE).

   - If you are not using PoE, connect the power supply to Home Assistant Yellow Kit.
   - **Info**: For CM4 Lite, Home Assistant OS is automatically installed on the NVMe SSD. For regular CM4s, Home Assistant OS is installed onto the eMMC by default.
   - **Advanced**: Forcing installation onto the NVMe SSD when using CM4 with eMMC:
      - Press the blue button while the yellow LED is on constantly (during the 5s window, see next step).

   ![Image showing the flash drive, Ethernet cable, and power supply all plugged into Home Assistant Yellow](/static/img/yellow/plug-usb-flash-ethernet-power.jpeg)

1. Watching the LEDs.

   - Wait for Home Assistant Yellow to start booting from the USB flash drive.
   - During boot, the Yellow LED will blink steadily.
   - Once the installer is ready, the Yellow LED will be constantly on for 5 seconds.
   - **Troubleshooting**: If the LED is stuck in steady blinking or constantly on for an extended period of time, this could indicate that the installer cannot connect to the internet. Follow this procedure to troubleshoot.

   ![Clip showing the LED pattern with the yellow LED blinking steady](/static/img/yellow/led-pattern-blink-steady.webp)

1. Waiting.
   - During installation, the LED will blink fast.
   - Wait for Home Assistant Yellow to finish installing the Home Assistant Operating System.
   - Once the installer finishes installing the Home Assistant Operating System, only the red LED will be on.

   ![Clip showing the LED pattern with the yellow LED blinking fast](/static/img/yellow/led-pattern-install-blink-fast.webp)

1. Disconnecting everything.

   - Remove the USB flash drive.
   - Remove the power cable.

   ![Image showing the connectors of the Yellow with nothing connected to them](/static/img/yellow/plug-nothing.jpeg)

1. Reconnecting power.

   - Reinsert the Ethernet cable.
   - Reinsert the power cable to start Home Assistant (if PoE is not used).

   ![Image showing the the Yellow with Ethernet and power connected](/static/img/yellow/plug-ethernet-power.jpeg)

1. Get started with Home Assistant.

    **Notice**: Initial startup may take a while, depending on your internet connection.

    ![Home Assistant user interface on a screen](/static/img/yellow/HA-get-started-02.png)

   1. Install the app.

      To access Home Assistant from your mobile device, use the QR code to locate the app in the app store.

   1. Select your Home Assistant server.

      **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196:8123`

      **Desktop**: Visit [http://homeassistant.local:8123](http://homeassistant.local:8123) to access the Home Assistant user interface.

   1. The Home Assistant user interface guides you through the initial onboarding.

   1. For further information, refer to the instructions provided under [https://www.home-assistant.io/getting-started/onboarding/](https://www.home-assistant.io/getting-started/onboarding/).
