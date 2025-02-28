# Installation Steps

1. Installing the Raspberry Pi Imager.

   - Install the Raspberry Pi Imager on your computer as described under [https://www.raspberrypi.com/software/](https://www.raspberrypi.com/software/)
   - Info: If your platform doesn't support the Raspberry Pi Imager, you can use another imager (e.g. balenaEtcher) and flash the Home Assistant OS Installer for Yellow directly from [GitHub releases](https://github.com/NabuCasa/yellow-buildroot/releases).
   ![rpi_imager.png](/static/img/yellow/rpi_imager.png)

2. Open Raspberry Pi Imager.
   - Under **Raspberry Pi Device**, select **Raspberry Pi 5**.
   ![yellow_rpi-imager_select_device_cm5.png](/static/img/yellow/yellow_rpi-imager_select_device_cm5.png)

3. Choosing the operating system.

   - Select **Choose OS**.
   - Choose **Other specific-purpose OS**.
   - Choose **Home assistants and home automation**.
   - Choose **Home Assistant**.
   - Choose **Home Assistant OS x.y (Yellow)**.
   ![yellow_rpi-imager_cm5_module_image.webp](/static/img/yellow/yellow_rpi-imager_cm5_module_image.webp)

4. Choosing storage.

   - Select **Choose storage** and from the dropdown menu, select your Raspberry Pi module.
   ![rpi_choose_storage_cm5.png](/static/img/yellow/rpi_choose_storage_cm5.png)

5. Writing the installer onto the drive

   1. Select the **Next** button to start the process.
   2. Wait for the Home Assistant OS Installer to be written to the internal eMMC storage on your module.
   3. Follow the wizard.
   4. When the steps are complete, close the rpi-installer.
   ![rpi_choose_next.png](/static/img/yellow/rpi_choose_next.png)

6. Unplug and set to UART

   1. Unplug the USB cable.
   2. Unplug the power cable.
   3. Set the JP1 jumper to UART.
   ![yellow_jp1_to_uart.png](/static/img/yellow/yellow_jp1_to_uart.png)
