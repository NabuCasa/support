---
zendesk:
  article_id: 40528878292765
  name: "Using Connect AUX-2 as a Bluetooth proxy"
  position: 60
  labels: connect aux-2
---

Home Assistant Connect AUX-2 has a dedicated on-board Bluetooth antenna and works as a Home Assistant Bluetooth proxy with no configuration. The proxy supports Bluetooth Low Energy (BLE) devices only.

- Once Connect AUX-2 is connected to Home Assistant, supported BLE devices in range are discovered automatically.
- Some devices need the proxy switched from passive to active mode.

To extend Bluetooth coverage across your home, follow the [Connect AUX-2 Bluetooth guide](https://www.nabucasa.com/hardware/aux-2/bluetooth/).

Connect AUX-2 doesn't support Bluetooth audio. It can't play audio to Bluetooth speakers or headphones, or receive audio from a phone over Bluetooth.

Connect AUX-2 receives the broadcasts of every BLE device in range. This is how most devices, such as passive BLE sensors, send their data to Home Assistant, and there is no limit on how many. Devices that need a direct connection use an active connection, and Connect AUX-2 handles up to 3 active connections at a time.

The Bluetooth proxy works the same with every power source and network connection. See [Power and network options](/hc/en-us/articles/40528734420253).

## Community integrations

Community integrations for Bluetooth devices:

- [Zendure SolarFlow](https://pypi.org/project/solarflow-ble/)
