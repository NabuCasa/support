---
zendesk:
  article_id: 25454972435357
  name: Using the serial console for debugging (Linux/macOS)
  position: 2
  labels: yellow, troubleshooting
---

Connecting to Yellow via serial console can be helpful for troubleshooting. For example, if you need to export a log file.

## To connect the serial console from Yellow to a Linux or macOS machine

1. Make sure *GNU Screen* is installed on your system.
   - On Linux, use your distribution's package manager (e.g. `sudo apt install screen`).
   - On macOS, use [Homebrew](https://formulae.brew.sh/formula/screen): `brew install screen`.
2. On your desktop/laptop, open a terminal.
3. List the USB port numbers:
   - On Linux, use `ls /dev/ttyUSB*`
   - On macOS, use `ls /dev/cu.*`. If the Silicon Labs CP2102N driver is installed, you will see both `/dev/cu.SLAB_USBtoUART` and `/dev/cu.usbserial-110` (`/dev/cu.usbserial-210`, depending on which port the Yellow is plugged in to).
4. Connect the Yellow with USB C to your computer.

   **Note:** If Yellow is not powered on yet, it is normal for no lights to be on.
5. List the USB port numbers again (see step above on Listing the USB port numbers). The new entry is for Yellow.

   **Troubleshooting:** In case no new entry appears, make sure JP1 is at the right position (UART) and your USB-C cable supports at least USB 2.0 signals (try using a different USB-C cable if in doubt).
6. Start GNU Screen and point it to this USB port. E.g.:

   ```sh
   screen /dev/ttyUSB0 115200
   ```

   **Troubleshooting:** If your account does not have permission to access serial ports, you may have to run the command with `sudo`. If Screen immediately prints `[screen is terminating]`, this is likely the problem.

   **Note:** Screen typically doesn't display anything on startup. You see only the cursor in the top left corner of the window.
7. **Troubleshooting:** If the device doesn't appear, check if the jumper JP1 is in the right position. It should be set to UART:
   1. Power off and unplug Yellow. [Open the case](/hc/en-us/articles/25298668266269-Home-Assistant-Yellow-Kit-with-CM4-and-optional-NVMe).
   2. Make sure JP1 is set to UART.
   3. [Close the case](/hc/en-us/articles/25298668266269-Home-Assistant-Yellow-Kit-with-CM4-and-optional-NVMe).
   4. Connect Yellow to your router again via Ethernet and make sure there is an internet connection.
   5. Power the Yellow back on with either the DC adapter or Power over Ethernet (if supported).
8. Hit the **Enter** key until prompted for credentials.
   - Homeassistant login: `root`
   - No password is required. Hit the **Enter** key.
9. The console offers the Home Assistant CLI under the command `ha`. The command allows to get information about the state of the system.
    Typically useful commands are:
    - To print the supervisor logs, type:

      ```sh
      ha supervisor logs
      ```

    - To print out the network info, type:

      ```sh
      ha network info
      ```

10. To save the boot log into a file, perform the following steps:
    1. Reboot Yellow:

       ```sh
        reboot
        ```

    2. To save the bootlogs, press `Ctrl`+`A` and then type:

        ```sh
        :hardcopy -h /tmp/boot.log
        ```

11. To exit GNU Screen, press `Ctrl`+`A` and then `D`.
