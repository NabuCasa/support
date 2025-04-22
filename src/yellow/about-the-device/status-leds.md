---
zendesk:
  article_id: 25410366475165
  name: About the LEDs
  position: 2
  labels: yellow, about the system, status
---

Home Assistant Yellow has 4 LEDs:

- Red LED (D4): Power LED
- Green LED (D5): Activity LED
- Yellow LED (D6): Home Assistant Yellow system health LED
- Blue LED (D2): Radio LED. Indicates network traffic on the radio. The radio can be used for Zigbee or Thread. The behavior of the LED is the same for either.

<img src="/static/img/yellow/yellow_heartbeat_yellow_led.webp" alt="Clip showing 3 LEDs. The red is on solid, the green is blinking, and the yellow LED is blinking in a heartbeat pattern" width="350">

- The red and green LED's behavior is similar to the red and green LED on a Raspberry Pi.
- The yellow LED is specific to Home Assistant Yellow. It indicates Home Assistant specific information.

## Power LED (red)

The power LED indicates whether the CM4 is powered. If the LED is off, check the power supply. If the LED continues to be off, remove power, and check if the CM4 is properly seated on the Yellow PCB.

## Activity LED (green)

The activity LED indicates various firmware and boot loader states at startup. If CM4 fails to boot, the pattern indicates what the reason is. Refer to the LED Warning Flash Codes table of the Raspberry Pi documentation. Once Home Assistant OS has been started, the green LED indicates activity. Activity is defined as disk (eMMC/NVMe) or any CPU load.

## System health LED (yellow)

### Home Assistant OS

| Pattern                                                                                         | Description                                      |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Off                                                                                             | System is in EEPROM firmware or bootloader mode. |
| Heartbeat                                                                                       |
| <img src="/static/img/yellow/yellow_heartbeat_yellow_led.webp" alt="Heartbeat LED" width="350"> | Home Assistant OS is running.                    |

## Home Assistant OS Installer for Yellow on CM4: LED patterns during installation

These LED patterns apply only while you are running the Home Assistant OS Installer on a Raspberry Pi Compute Module 4 (CM4). These LED patterns don't apply during operation.

As the Home Assistant OS Installer is not used for the Raspberry Pi Compute Module 5, this section does not apply for CM5 installation.

| Yellow LED Pattern                                                                                | Meaning                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Off                                                                                               | System is in EEPROM firmware or boot loader mode.                                                 |
| Steady blinking (~30 s) ![Steady blinking](/static/img/yellow/led-pattern-blink-steady.webp)      | Installer is booting.                                                                             |
| Solid on (5 s)                                                                                    | Installer successfully booted and connected to the Internet.                                      |
| Solid on (longer than 5 s)                                                                        | Indicates a network issue if it doesn't switch to fast blinking after steady blinking.            |
| Fast blinking (~3-5 min) ![Fast blinking](/static/img/yellow/led-pattern-install-blink-fast.webp) | Downloading and installing Home Assistant OS.                                                     |
| Off                                                                                               | Installer finished. Green LED blinks a few times before turning off. Only the red LED remains on. |

{% partial 'disable-leds.md' %}
