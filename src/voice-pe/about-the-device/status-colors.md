---
zendesk:
  article_id: 25764604971421
  name: Status colors
  position: 2
  labels: voice pe, about the system, status colors
---


| Color pattern                                                                                                  | Status                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Red**<br>The two LEDs closest to the microphones are red.<br>![Muted](/static/img/voice-pe/status_muted.png) | **Muted**<br>The microphones are off.                                                                                                                                                                                                                         |
| **Red**<br>The LED closest to the speaker is red.<br>![Silent](/static/img/voice-pe/status_silent.png)         | **Silent**<br>If the media player volume is set to 0, the LED closest to the speaker is red, indicating the device cannot produce sound.                                                                                                                      |
| **Red twinkle**<br>![Disconnected](/static/img/voice-pe/status_red_twinkle.gif)                                | **Disconnected**<br>The device is disconnected from Home Assistant. This is common during an update of Home Assistant. In case it happens outside updates, it usually means that there is a network issue preventing the device from reaching Home Assistant. |
| **Red flashing**<br>![Error](/static/img/voice-pe/status_red_flashing.png)                                     | **Error**<br>The voice assistant encountered an error.                                                                                                                                                                                                        |
| **White twinkle**<br>![No Wi-Fi credentials](/static/img/voice-pe/status_white_twinkle.gif)                    | **No Wi-Fi credentials**<br>No Wi-Fi credentials are stored on the device. Use your phone to push Wi-Fi credentials via Bluetooth using the Home Assistant Companion App.                                                                                     |
| **Solid white**<br>![Wi-Fi connection initializing](/static/img/voice-pe/status_white.png)                     | **Wi-Fi connection initializing**<br>Wi-Fi credentials are stored on the device. The Wi-Fi hardware and connection are initializing.                                                                                                                          |
| **Blue twinkle**<br>![Waiting for connection](/static/img/voice-pe/status_blue.gif)                            | **Waiting for connection**<br>Waiting for a connection from Home Assistant.                                                                                                                                                                                   |

## Related topics

- [About Home Assistant Voice Preview Edition](/hc/en-us/articles/25764286546717-About-Home-Assistant-Voice-Preview-Edition)
- [Device overview and interfaces](/hc/en-us/articles/25764488568605-Device-overview)