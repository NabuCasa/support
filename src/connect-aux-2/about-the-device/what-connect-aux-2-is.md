---
zendesk:
  article_id: 40528879660317
  name: "What Connect AUX-2 is and how it works"
  position: 10
  labels: connect aux-2
---

Home Assistant Connect AUX-2 is the missing link between classic audio gear and Home Assistant. It connects to your Home Assistant system over the network and adds several capabilities in one small device.

Connect AUX-2 is built on an ESP32-S3 and runs ESPHome. You add it to Home Assistant through the ESPHome integration, the same way as any other ESPHome device. Adoption sets up an encrypted connection between Connect AUX-2 and Home Assistant.

## What each function does

- **Lossless audio streaming:** a 3.5 mm audio output, analog or optical (S/PDIF), for a stereo, AV receiver, or active speakers, via a high-quality DAC. Connect AUX-2 is a native Sendspin player, so any Sendspin source, such as Music Assistant, can play on it in sync with your other speakers. Use Music Assistant to play music on it. Sendspin is on by default. See [Streaming audio with Sendspin](/hc/en-us/articles/40528779913373).
- **Device control over serial (RS-232):** two serial ports to control TVs, receivers, projectors, UPS units, climate controllers, Modbus-capable devices, and more. Each serial connection is exposed as a serial proxy, provided by the ESPHome integration. Serial traffic travels over the encrypted ESPHome connection. Integrations that support serial proxies let you pick the port from a list. See [Controlling devices over serial](/hc/en-us/articles/40528797748125) and [Learn more about serial proxies](https://www.home-assistant.io/blog/2026/05/06/release-20265/#serial-ports-over-the-network-with-esphome).
- **USB-to-serial dongle:** a supported dongle in the USB-A port appears as an extra serial proxy. See [Using a USB-to-serial dongle](/hc/en-us/articles/40528805559965).
- **USB host for a Connect radio adapter:** plug a Connect ZWA-2 into the USB-A port to use its Z-Wave network over your network connection. Home Assistant discovers it automatically. See [Using a Connect radio adapter over the network](/hc/en-us/articles/40528828414237).
- **Bluetooth proxy:** extend Home Assistant's Bluetooth range with a dedicated on-board Bluetooth antenna. Connect AUX-2 works as a Home Assistant Bluetooth proxy. See [Using Connect AUX-2 as a Bluetooth proxy](/hc/en-us/articles/40528878292765).

## What Connect AUX-2 doesn't include

Connect AUX-2 works with the Connect ZWA-2 for Z-Wave, one adapter at a time. Connect AUX-2 supports Zigbee through a Connect ZBT-2 as an experimental feature. This setup works with the ZHA integration only and hasn't been widely tested yet. See [Using a Connect ZBT-2 with Connect AUX-2](/hc/en-us/articles/40529064396445). Connect AUX-2 doesn't currently support Connect ZBT-1, and it doesn't support Thread.

Connect AUX-2 outputs audio only. It has no audio input. It doesn't power speakers, so unpowered speakers need an audio amplifier.

## Why protocol support lives in Home Assistant

Connect AUX-2 is a generic ESPHome-based proxy. The knowledge of each device protocol lives in Home Assistant, not in the device firmware. New device protocols arrive through Home Assistant updates or the Home Assistant Marketplace, without a firmware upgrade on Connect AUX-2. This is part of the Open Home Foundation's [Proxy all the things](https://www.openhomefoundation.org/blog/proxy-all-the-things-no-device-left-behind/) effort.

## Firmware

Connect AUX-2 updates over the air through ESPHome. It has an unlocked bootloader, so you can also run your own firmware. See [Updating the firmware](/hc/en-us/articles/40528920875037) and [Custom firmware and restoring factory firmware](/hc/en-us/articles/40528961462941).

## Related topics

- [Home Assistant documentation](https://www.home-assistant.io/docs/)
- [ESPHome](https://esphome.io/)
- [Music Assistant](https://www.home-assistant.io/integrations/music_assistant/)
- [Sendspin](https://www.sendspin-audio.com/)
- [Home Assistant integrations](https://www.home-assistant.io/integrations/)
