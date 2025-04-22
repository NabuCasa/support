---
zendesk:
  article_id: 25484982657309
  name: Reinstall the Home Assistant Operating System on Raspberry Pi CM4
  position: 4
  labels: yellow, troubleshooting
---

Note: It is very unlikely that reinstalling the Home Assistant Operating System is necessary. Before going through this procedure, make sure to [reset the device](/hc/en-us/articles/25463622043165).

To reinstall [Home Assistant Operating System](https://www.home-assistant.io/docs/glossary/#home-assistant-operating-system) on a CM4, the **Home Assistant OS Installer for Yellow** flashed on a USB flash drive needs to be used. However, the Raspberry Pi Compute Module 4 has a fixed boot order: **eMMC** -> **NVMe SSD** -> **USB flash drive**.

There are currently 2 options on how to reinstall the Home Assistant OS:

- **Option 1** disables booting of Home Assistant OS (from eMMC or NVMe SSD), which makes it possible to start the Installer again from a USB flash drive. This option only works if you currently have Home Assistant OS installed!
- **Option 2** uses rpiboot. Use this option if option 1 doesn't work for you.

## Option 1 (recommended): Reinstalling Home Assistant OS on CM4 using red and blue button

1. Make sure no USB device is plugged into the device. Remove power from your system.
2. Power up the system.
3. Within 3 seconds (or from start), press and hold the red and blue button on the backside of the device simultaneously.
4. Hold the two buttons for approximately 10 seconds. The Yellow LED should not start blinking!
5. Remove power from your system.
6. Follow the instructions to [install the Home Assistant Software on kit](/hc/en-us/articles/25298668266269) using the **Home Assistant OS Installer for Yellow** from a USB flash drive.

## Option 2: Reinstall Home Assistant OS using rpiboot

1. Install rpiboot onto your computer.
   - Using [Windows Installer](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)
   - [From source code](https://github.com/raspberrypi/usbboot?tab=readme-ov-file#building)
2. [Open](/hc/en-us/articles/25298668266269) the Home Assistant Yellow enclosure to access jumpers on the PCB.
3. Set JP1 to USB.
4. Plug-in a USB-C cable to Home Assistant Yellow and connect it to your PC.
5. Press and hold the **USB-C Recvry** push button. Older Home Assistant Yellow versions: Bridge JP2 (USB-C Rcvry).
6. Power up the board by plugging in the 12V DC connector or Ethernet cable (if PoE is used). Only the red LED should be on at this point (solid, not blinking).
7. Release the **USB-C Recvry** push button. Older Home Assistant Yellow versions: Un-bridge JP2.
8. Run rpiboot on your PC and let it run through.
   - If you are on Windows, it might ask you if you want to reformat the disk. Select **Cancel** each time.
   - Afterwards, the green LED should be on.
9. To flash the **Home Assistant OS Installer for Yellow** onto the eMMC ("RPi-MSD"), run the Raspberry Pi Imager.
   - Follow [step 1 through 5](/hc/en-us/articles/25298668266269) from the **Installing Home Assistant Software on Kit** procedure.
   - Windows might bring up a message asking to insert a disk. Close this message.
   - Ignore the Raspberry Pi Imager prompt to remove the SD card.
   - Select **Continue** and close the Raspberry Pi Installer.
10. Remove power from the board.
11. Set JP1 to UART.
12. To connect Ethernet and power, follow the instructions [from step 8](/hc/en-us/articles/25298668266269) from the **Installing Home Assistant Software on Kit** procedure. Note that because the installer is now installed to the eMMC, no USB flash drive is required.

## Related topics

- [Resetting the device](/hc/en-us/articles/25463622043165)
- [Windows Installer](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)
- [Rpiboot from source code](https://github.com/raspberrypi/usbboot?tab=readme-ov-file#building)
- [Install the Home Assistant Software on kit](/hc/en-us/articles/25298668266269)
