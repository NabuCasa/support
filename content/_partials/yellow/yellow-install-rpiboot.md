<!--Installing the rpiboot on your computer and then running rpiboot to install the HAOS on Yellow-->

1. Install rpiboot on your computer.

   1. **rpiboot** is a command line utility for booting a Raspberry Pi in USB device mode. This is needed because the CM5 cannot boot from the USB 2.0 ports of the Yellow.
   2. Install rpiboot on your PC.
      - **Windows**: Download and run the [Windows Installer from Raspberry Pi GitHub](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe).
      - **macOS or Linux**: Install from [source code](https://github.com/raspberrypi/usbboot?tab=readme-ov-file#building).
   3. Install rpiboot, but do not run it yet!

   ![source_code.png](/static/img/yellow/source_code.png)

2. Connect the Yellow to your PC.

   1. On the Yellow board, make sure the JP1 jumper is set to USB.
      - It is there by default, but it is worth to double-check.
   2. Plug-in a USB-C cable to Home Assistant Yellow and connect it to your PC.
      - Make sure the cable supports USB 2.0 data.

   ![yellow_jp1_to_usb.png](/static/img/yellow/yellow_jp1_to_usb.png)

3. Press recovery button and power up.

   1. On the Yellow board, press and **hold** the recovery button.
      - Older Home Assistant Yellow versions: Bridge JP2 (USB-C Rcvry).
   2. Power up the board.
      - Plug in the 12 V DC connector or Ethernet cable (if PoE is used).
      - Only the red LED should be on at this point (solid, not blinking).
   3. Release the recovery push button.
      - Older Home Assistant Yellow versions: Un-bridge JP2.

   ![yellow_usb_recovery_button.png](/static/img/yellow/yellow_usb_recovery_button.png)

4. Run rpiboot

   1. On your PC, run rpiboot and let it run through.
      - If you are using Windows, it might ask you if you want to reformat the disk. Select **Cancel** each time.
      - If you are running an Apple Silicon mac, before running rpiboot, make sure you open the terminal using the “Rosetta” compatibility mode.
      - If you are using Linux or MacOS, use `sudo ./rpiboot -d mass-storage-gadget64` to run the tool.
   2. After a few seconds, the yellow LED on the Yellow board should start blinking.
   3. Afterwards, only the green LED should be on.
   4. The module is now ready to have the Home Assistant Operating System installed on it (next steps).

      ![led-pattern-install-green.png](/static/img/yellow/led-pattern-install-green.png)
