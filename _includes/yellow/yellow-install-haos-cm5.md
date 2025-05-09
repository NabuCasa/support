<!--Installing the HAOS on CM5 using the rpi Imager-->

{% steps %}
{% step "Installing the Raspberry Pi Imager." %}
{% image "/static/img/yellow/rpi_imager.png" "Installing the Raspberry Pi Imager" %}
{% stepContent %}

- Install the Raspberry Pi Imager on your computer as described under [https://www.raspberrypi.com/software/](https://www.raspberrypi.com/software/)
- **Info**: If your platform doesn't support the Raspberry Pi Imager, you can use another imager (for example, balenaEtcher) and flash the Home Assistant OS Installer for Yellow directly from [GitHub releases](https://github.com/NabuCasa/yellow-buildroot/releases).

{% endstepContent %}
{% endstep %}

{% step "Opening Raspberry Pi Imager" %}
{% image "/static/img/yellow/yellow_rpi-imager_select_device_cm5.png" "Open Raspberry Pi Imager" %}
{% stepContent %}

- Under **Raspberry Pi Device**, select **Raspberry Pi&nbsp;5**.

{% endstepContent %}
{% endstep %}

{% step "Choosing the operating system" %}
{% image "/static/img/yellow/yellow_rpi-imager_cm5_module_image.webp" "Choosing the operating system" %}
{% stepContent %}

Choose the operating system:

- Select **Choose OS**.
- Choose **Other specific-purpose OS**.
- Choose **Home assistants and home automation**.
- Choose **Home Assistant**.
- Choose **Home Assistant OS x.y (Yellow)**.

{% endstepContent %}
{% endstep %}

{% step "Choosing storage" %}
{% image "/static/img/yellow/rpi_choose_storage_cm5.png" "Choosing storage" %}
{% stepContent %}

- Select **Choose storage** and from the dropdown menu, select your Raspberry Pi module.

{% endstepContent %}
{% endstep %}

{% step "Writing the installer onto the drive" %}
{% image "/static/img/yellow/rpi_choose_next.png" "Writing the installer onto the drive" %}
{% stepContent %}

1. Select the **Next** button to start the process.
2. Wait for the Home Assistant OS Installer to be written to the internal eMMC storage on your module.
3. Follow the wizard.
4. When the steps are complete, close the rpi-installer.

{% endstepContent %}
{% endstep %}

{% step "Unplug and set to UART" %}
{% image "/static/img/yellow/yellow_jp1_to_uart.png" "Unplug and set to UART" %}
{% stepContent %}

1. Unplug the USB cable.
2. Unplug the power cable.
3. Set the JP1 jumper to UART.

{% endstepContent %}
{% endstep %}
{% endsteps %}
