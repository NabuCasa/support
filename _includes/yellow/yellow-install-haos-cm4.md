<!---Installing Home Assistant Software on Kit, CM4-->

{% steps %}
{% step "Installing the Raspberry Pi Imager" %}
{% image "/static/img/yellow/rpi_imager.png" "Screenshot of Raspberry Pi Imager Download page" %}
{% stepContent %}

- Install the Raspberry Pi Imager on your computer as described under [https://www.raspberrypi.com/software/](https://www.raspberrypi.com/software/).
  - **Info**: If your platform doesn't support the Raspberry Pi Imager, you can use another imager (e.g. balenaEtcher) and flash the Home Assistant OS Installer for Yellow directly from [GitHub releases](https://github.com/NabuCasa/yellow-buildroot/releases).
  - **Important**: If you are using a Raspberry Pi Compute Module&nbsp;4 (CM4) that already has software on it, this procedure does not work. Ignore this and the following steps.
    - Instead, follow the procedure [Option 2: Reinstall Home Assistant OS using rpiboot]().
    - The reason is that by default, the CM4 tries to boot from the internal eMMC before booting from the USB flash drive.

{% endstepContent %}
{% endstep %}

{% step "Open Raspberry Pi Imager" %}
{% image "/static/img/yellow/start_rpi_imager.png" "Raspberry Pi Imager start page" %}
{% stepContent %}

- Under **Raspberry Pi Device**, select **Raspberry Pi&nbsp;4**.

{% endstepContent %}
{% endstep %}

{% step "Choosing the operating system to install on CM4" %}
{% image "/static/img/yellow/rpi_choose_ha_os.gif" "Clip showing how to choose the Home Assistant Operating System" %}
{% stepContent %}

- Select **Choose OS**.
- Choose **Other specific-purpose OS**.
- Choose **Home assistants and home automation**.
- Choose **Home Assistant**.
- Choose **Home Assistant OS Installer for Yellow**.

{% endstepContent %}
{% endstep %}

{% step "Choosing storage" %}
{% image "/static/img/yellow/rpi_choose_storage.png" "Screenshot showing the external storage" %}
{% stepContent %}

- Insert the USB flash drive into the computer. Note: The contents of this drive will be overwritten.
- From the dropdown menu, select your USB flash drive.

{% endstepContent %}
{% endstep %}

{% step "Writing the installer onto the drive" %}
{% image "/static/img/yellow/rpi_choose_next.png" "Screenshot showing the next button" %}
{% stepContent %}

- Select the **Next** button to start the process.
- Wait for the Home Assistant OS Installer to be written to the USB flash drive.
- Eject the USB flash drive.

{% endstepContent %}
{% endstep %}

{% step "Inserting the flash drive" %}
{% image "/static/img/yellow/plug-usb-flash.jpeg" "Image showing the flash drive plugged into Home Assistant Yellow" %}
{% stepContent %}

- Insert the USB flash drive with the Home&nbsp;Assistant OS Installer into your Home&nbsp;Assistant&nbsp;Yellow&nbsp;Kit.

{% endstepContent %}
{% endstep %}

{% step "Connecting to the internet" %}
{% image "/static/img/yellow/plug-usb-flash-ethernet.jpeg" "Image showing the flash drive and the Ethernet cable plugged into Home Assistant Yellow" %}
{% stepContent %}

- Connect the Ethernet cable to your Home Assistant Yellow Kit and make sure it has access to the internet.
  - **Note**: Internet is required because the newly installed Home Assistant OS does not contain all Home Assistant components yet. It downloads the latest version of Home Assistant Core on first start.

{% endstepContent %}
{% endstep %}

{% step "Connecting the power supply (if you don't have PoE)" %}
{% image "/static/img/yellow/plug-usb-flash-ethernet-power.jpeg" "Image showing the flash drive, Ethernet cable, and power supply all plugged into Home Assistant Yellow" %}
{% stepContent %}

- If you are not using PoE, connect the power supply to Home Assistant Yellow Kit.
- **Info**: For CM4 Lite, Home Assistant OS is automatically installed on the NVMe SSD. For regular CM4s, Home Assistant OS is installed onto the eMMC by default.
- **Advanced**: Forcing installation onto the NVMe SSD when using CM4 with eMMC:
  - Press the blue button while the yellow LED is on constantly (during the 5s window, see next step).

{% endstepContent %}
{% endstep %}

{% step "Watching the LEDs" %}
{% image "/static/img/yellow/led-pattern-blink-steady.webp" "Clip showing the LED pattern with the yellow LED blinking steady" %}
{% stepContent %}

- Wait for Home Assistant Yellow to start booting from the USB flash drive.
- During boot, the Yellow LED will blink steadily.
- Once the installer is ready, the Yellow LED will be constantly on for 5 seconds.
- **Troubleshooting**: If the LED is stuck in steady blinking or constantly on for an extended period of time, this could indicate that the installer cannot connect to the internet. Follow this procedure to troubleshoot.

{% endstepContent %}
{% endstep %}

{% step "Waiting" %}
{% image "/static/img/yellow/led-pattern-install-blink-fast.webp" "Clip showing the LED pattern with the yellow LED blinking fast" %}
{% stepContent %}

- During installation, the LED will blink fast.
- Wait for Home Assistant Yellow to finish installing the Home Assistant Operating System.
- Once the installer finishes installing the Home Assistant Operating System, only the red LED will be on.

{% endstepContent %}
{% endstep %}

{% step "Disconnecting everything" %}
{% image "/static/img/yellow/plug-nothing.jpeg" "Image showing the connectors of the Yellow with nothing connected to them" %}
{% stepContent %}

- Remove the USB flash drive.
- Remove the power cable.

{% endstepContent %}
{% endstep %}

{% step "Reconnecting power" %}
{% image "/static/img/yellow/plug-ethernet-power.jpeg" "Image showing the the Yellow with Ethernet and power connected" %}
{% stepContent %}

- Reinsert the Ethernet cable.
- Reinsert the power cable to start Home Assistant (if PoE is not used).

{% endstepContent %}
{% endstep %}

{% step "Get started with Home Assistant" %}
{% image "/static/img/green/getting_started_04.png" "Home Assistant user interface on a screen" %}
{% stepContent %}

1. Initial startup may take a while, depending on your internet connection.

2. Install the app.

  To access Home Assistant from your mobile device, use the QR code to locate the app in the app store.

3. Select your Home Assistant server.

    **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196:8123`

    **Desktop**: Visit [http://homeassistant.local:8123](http://homeassistant.local:8123) to access the Home Assistant user interface.

4. The Home Assistant user interface guides you through the initial onboarding.

5. For further information, refer to the instructions provided under [https://www.home-assistant.io/getting-started/onboarding/](https://www.home-assistant.io/getting-started/onboarding/).

{% endstepContent %}
{% endstep %}
{% endsteps %}
