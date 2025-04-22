---
zendesk:
  article_id: 26709825280797
  name: Installation on Yellow Kit - The yellow LED keeps blinking
  description: Troubleshooting steps if the yellow LED keeps blinking while your installing Home Assistant on Yellow Kit.
  position: 4
  labels: yellow, setup, troubleshooting
---

## Symptom

During installation on a Yellow Kit, the yellow LED keeps blinking steadily.

## Cause

If this LED pattern persists during the installation and the LED never changes to solid on, this indicates an issue with the installer. It may not be able to connect to the internet.

## Resolution

You can install Home Assistant OS directly onto the internal eMMC using the `rpiboot` boot method. Follow these steps to do so:

1. Download the Yellow operating system:
   - Go to the [operating system repository release page](https://github.com/home-assistant/operating-system/releases) on GitHub and download the latest stable version of the `haos_yellow-xx.x.img.xz` file.

2. Install `rpiboot` onto your computer:
   - Using [Windows Installer](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)
   - From [source code](https://www.raspberrypi.com/documentation/computers/compute-module.html#building-rpiboot-on-your-host-system-cygwinlinux)

3. Reinstall the operating system on Yellow:
   - Open the procedure on [how to reinstall the operating system](/hc/en-us/articles/25484982657309-Reinstall-the-Home-Assistant-Operating-System-on-Raspberry-Pi-CM4).
   - Follow the procedure **Option 2: Reinstall Home Assistant OS using rpiboot** up to step 8.
   - To install the Home Assistant Operating System directly, follow these steps:
     1. Run [Step 1 through 5](/hc/en-us/articles/25298668266269-Home-Assistant-Yellow-Kit-with-CM4-and-optional-NVMe) from the **Installing Home Assistant Software on Kit** procedure.
     2. In step 3, use the image you just downloaded, instead of the image provided by the Raspberry Pi Imager.
     3. Windows might bring up a message asking to insert a disk. Close this message.
     4. Ignore the Raspberry Pi Imager prompt to remove the SD card.
     5. Select **Continue** and close the Raspberry Pi Installer.

4. Remove power from the board.

5. Set JP1 to UART.

6. Power up your board.
   - **Result**: Your system should now start up.
   - Follow the steps under [Get started with Home Assistant](/hc/en-us/articles/25298668266269-Home-Assistant-Yellow-Kit-with-CM4-and-optional-NVMe).

## Related topics

- [Operating system repository release page](https://github.com/home-assistant/operating-system/releases)
- [Windows Installer](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)
- [Source code](https://www.raspberrypi.com/documentation/computers/compute-module.html#building-rpiboot-on-your-host-system-cygwinlinux)
- [Reinstalling the operating system](/hc/en-us/articles/25484982657309-Reinstall-the-Home-Assistant-Operating-System-on-Raspberry-Pi-CM4)
- [Get started with Home Assistant](/hc/en-us/articles/25298668266269-Home-Assistant-Yellow-Kit-with-CM4-and-optional-NVMe)