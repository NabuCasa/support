---
zendesk:
  article_id: 25463622043165
  name: Resetting the device
  position: 1
  labels: yellow, handling data
---


## About resetting the device

{% partial 'about-device-reset.md' %}

## Resetting the  device

The steps to clear the data disk differ, depending on whether you use a Raspberry Pi Compute Module 4 or 5 with your Home Assistant Yellow.

### Prerequisites

- During this procedure, Home Assistant needs an Internet connection.
- You need Administrator rights to do this procedure

## To reset a device with a CM5

If you use Home Assistant Yellow with a Raspberry Pi Compute Module 5, the red button cannot be used for factory reset. Instead, follow these steps:

1. Make sure you do not lose your automations and configuration settings: [Create a backup](/hc/en-us/articles/25454640981533-Creating-a-backup).
2. [Connect via serial console from Windows](/hc/en-us/articles/25454894609693-Using-the-serial-console-for-debugging-Windows) or [connect via serial console from Linux or Mac](/hc/en-us/articles/25454972435357-Using-the-serial-console-for-debugging-Linux-macOS).
3. Follow the steps on [wiping the data disk via command line](https://www.home-assistant.io/common-tasks/os/#wiping-the-data-disk-from-the-command-line).

## To reset a device with a CM4

If you use Home Assistant Yellow with a Raspberry Pi Compute Module 4, follow these steps to clear all user data and reinstall the latest version of Home Assistant components.

1. Make sure you do not lose your automations and configuration settings: [Create a backup](/hc/en-us/articles/25454640981533-Creating-a-backup).
2. Shut down the system.
    - Go to [**Settings** > **System**](https://my.home-assistant.io/redirect/system_dashboard/), and in the top right corner, select the shut down icon. Select **Shut down system**.
    - Wait for the LEDs to turn off, except the red power LED.
    - Remove power from the system.
3. Power up the system:
    - Make sure the system has an Internet connection.
    - Press and **hold** the red button and reapply power.
    - Keep the red button pressed until the yellow LED turns on or starts flashing.
    - **Release** the red button.
      - The green and the yellow LEDs start blinking.
      - The [Home Assistant Operating System](https://www.home-assistant.io/docs/glossary/#home-assistant-operating-system) now downloads the latest version of [Home Assistant Supervisor](https://www.home-assistant.io/docs/glossary/#home-assistant-supervisor) and [Home Assistant Core](https://www.home-assistant.io/docs/glossary/#home-assistant-core).
      - Due to the downloads, it can take a while until Home Assistant becomes accessible again.

## Related topics

- [Creating a backup](/hc/en-us/articles/25454640981533-Creating-a-backup)
- [Wiping the data disk via command line](https://www.home-assistant.io/common-tasks/os/#wiping-the-data-disk-from-the-command-line)