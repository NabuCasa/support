---
zendesk:
  article_id: 40528929207453
  name: "Specifications and resources"
  position: 30
  labels: connect aux-2
---

## Product

| | |
| --- | --- |
| Model No. | NC-AUX-9758 |
| Conformity | CE, FCC, RCM |
| FCC-ID | 2A8ZE06 |
| Origin | Made in China |

## Product details

| | |
| --- | --- |
| SoC | ESP32-S3R8, 8 MB PSRAM, 8 MB flash |
| Audio DAC | TI PCM5122 (112 dB SNR) |
| Ethernet | W5500 |
| Power | <ul><li>USB-C 5 V ⎓ 2 A</li><li>Power over Ethernet (802.3af or better)</li><li>Power draw under 1 W (typical)</li></ul> |

## Audio

| | |
| --- | --- |
| Connectivity | 3.5 mm audio output, analog or optical S/PDIF (one at a time), output only |
| Analog | 16-bit / 48 kHz stereo |
| Digital | 16-bit / 48 kHz stereo |
| Codecs | Music Assistant converts audio before sending it over Sendspin, so you can play any format it supports. Decoded on the device: FLAC, MP3, WAV. |
| Sendspin | Yes, native Sendspin player. On by default. Plays synchronized audio from any Sendspin source, such as Music Assistant. |
| Bluetooth audio | Not supported |

## Serial and USB

| | |
| --- | --- |
| RS-232 Port 1 and Port 2 | 3.5 mm RS-232 (±5 V), with TX/RX switch |
| USB-A: Connect radio adapter | One at a time: Connect ZWA-2 (Z-Wave), or Connect ZBT-2 (Zigbee). Zigbee through a Connect ZBT-2 is an experimental feature. Connect ZBT-1 isn't currently supported. See [Using a Connect ZBT-2 with Connect AUX-2](/hc/en-us/articles/40529064396445). |
| USB-A: USB-to-serial dongle | Waveshare USB TO RS485 (B) only. Exposed as an RS-485 serial proxy. |

## Connectivity

| | |
| --- | --- |
| Wireless | <ul><li>Wi-Fi (2.4 GHz, 802.11b/g/n)</li><li>Bluetooth 5 (LE)</li></ul> |
| Wired | <ul><li>Power over Ethernet (PoE, 802.3af or better)</li><li>Ethernet (USB-C power required)</li></ul> |
| Bluetooth proxy | <ul><li>Bluetooth Low Energy (BLE) only</li><li>Up to 3 active connections at a time. Passive BLE sensors don't count toward this limit.</li></ul> |
| Thread | Not supported |

## Software

| | |
| --- | --- |
| Built for Home Assistant | Yes |
| Built on ESPHome | Yes |
| Unlocked bootloader | Yes, can be flashed with custom firmware |
| Firmware source | [NabuCasa/aux-2 on GitHub](https://github.com/NabuCasa/aux-2), everything needed to build the complete firmware |

## Device characteristics

| | |
| --- | --- |
| Dimensions & weight | 106 × 63 × 25 mm, 104 g |
| Boxed dimensions & weight | 110 × 72 × 28 mm, 136 g |
| Enclosure | Polycarbonate plastic; white and semi-transparent |
| Operating conditions | Indoor use only; 0–65 °C (32–149 °F); non-condensing humidity; keep dry, out of direct sunlight and heat |

## Resources

- Product page: [nabucasa.com/hardware/aux-2](https://www.nabucasa.com/hardware/aux-2/)
- Factory firmware web installer: [firmware.nabucasa.com/install/aux-2](https://firmware.nabucasa.com/install/aux-2/)
- [Declaration of Conformity for EU (PDF)](/static/docs/connect-aux-2/nc-aux-9758-eu-doc-v1.0-nov-2026.pdf)
- [Warranty and Safety Information (PDF)](/static/docs/connect-aux-2/ha-connect-aux-2_warranty-and-safety-information_v1-2.pdf)
