---
zendesk:
  article_id: 40528804425245
  name: "Using Connect AUX-2 with Modbus devices"
  position: 40
  labels: connect aux-2
---

Home Assistant Connect AUX-2 connects Modbus devices that use RS-485, such as solar inverters, boilers, and sensors, to an existing Modbus integration in Home Assistant. A Waveshare USB TO RS485 (B) dongle in the USB-A port makes the RS-485 connection, and the integration talks to your device through Connect AUX-2.

{% image "/static/img/connect-aux-2/dongle-waveshare-usb-to-rs485-b.jpg" "Waveshare USB TO RS485 (B) dongle" %}

## Prerequisites

- A [Waveshare USB TO RS485 (B)](https://www.waveshare.com/usb-to-rs485-b.htm) dongle, the only USB-to-serial dongle Connect AUX-2 supports. See [Using a USB-to-serial dongle](/hc/en-us/articles/40528805559965).
- A Modbus integration for your device that works with Connect AUX-2. See [Compatible integrations](#compatible-integrations).
- Home Assistant 2026.9 or newer.
- Connect AUX-2 set up in Home Assistant through the ESPHome integration. See [Set up Home Assistant Connect AUX-2](/hc/en-us/articles/40527754954653).

## Connect the dongle

1. Plug the dongle into the USB-A port of Connect AUX-2. The dongle takes the USB-A port, so you can't use a Connect radio adapter at the same time.
2. Wire the dongle's A+, B-, and GND terminals to the matching RS-485 terminals on your Modbus device.
3. In Home Assistant, check that the dongle appears on the Connect AUX-2 device as a serial proxy named "USB Serial Port".

## Add the Modbus integration

1. In Home Assistant, add the Modbus integration for your device.
2. During setup, select the Connect AUX-2 "USB Serial Port" from the list of serial ports.

## Compatible integrations

Find the integration for your device in Home Assistant's [Modbus-controlled category](https://www.home-assistant.io/integrations/#modbus-controlled). Integrations that offer a serial (RS-485) connection can use Connect AUX-2. Integrations that connect only over the network, such as Fronius and Sofar, can't.

Examples of integrations that offer a serial connection:

- [SolarEdge Modbus](https://www.home-assistant.io/integrations/solaredge_modbus/), for SolarEdge inverters
- [Flexit](https://www.home-assistant.io/integrations/flexit/), for Flexit air handling units. Serial proxy support is experimental.

### Community integrations

Community integrations are made and maintained by their developers, outside Home Assistant. Community integrations for Modbus devices over RS-485:

- [SAJ R5 inverter](https://github.com/wimb0/home-assistant-saj-r5-modbus)
- [Remeha boiler](https://github.com/houthacker/remeha-modbus)
- [FoxESS T-Series inverter](https://github.com/LucasTor/FoxESS-T-series)
- [SHT20 sensor](https://github.com/remmob/sht20)
- [FalCAN Probe](https://github.com/AndersBNielsen/FalCAN_fw)

To build your own Modbus integration, see [Building serial and Modbus integrations](/hc/en-us/articles/40529019010717).
