---
zendesk:
  article_id: 40527754954653
  name: "Set up Home Assistant Connect AUX-2"
  position: 10
  labels: connect aux-2
---

This article takes you from an unboxed Home Assistant Connect AUX-2 to a device that's ready to use in Home Assistant.

{% hazard "notice" %}

**The three 3.5 mm ports are not interchangeable**

RS-232 Port 1 and Port 2 carry RS-232 signaling at ±5 V and can damage audio equipment. Use the 3.5 mm audio output for audio equipment only, and Port 1 and Port 2 for serial equipment only. See [Ports and controls](/hc/en-us/articles/40528853274909).

{% endhazard %}

{% image "/static/img/connect-aux-2/aux-2-port-front.png" "Front of Connect AUX-2 with port labels" %}

## Prerequisites

- Home Assistant 2026.9 or newer.
- Power: a Power over Ethernet (PoE) switch or injector, or a USB-C supply. Use one power source at a time.
- Network: wired (Ethernet or PoE) or Wi-Fi. Wi-Fi is off while an Ethernet cable is connected. See [Power and network options](/hc/en-us/articles/40528734420253).
- Cabling for your setup. See [What's in the box](/hc/en-us/articles/40528614062621).
- A spot within reach of your power, network, and audio equipment. See [Choosing a location](/hc/en-us/articles/40528741239965).

## Set up the device

Set up Connect AUX-2 within 15 minutes of powering it on. After that, it leaves pairing mode. To return to pairing mode, disconnect the power and connect it again.

The steps differ for a wired connection and for Wi-Fi.

### Over Ethernet

1. Add your Connect AUX-2 to the same network as Home Assistant with an Ethernet cable. With PoE, the same cable powers it. Without PoE, also connect a USB-C supply.
2. In Home Assistant, go to **Settings** > **Devices & services**.
3. Under **Discovered**, select **Configure** on the Connect AUX-2 card and [follow the ESPHome adoption flow](https://esphome.io/guides/made_for_esphome/).
4. Assign it to an area and finish.

### Over Wi-Fi

Wi-Fi setup uses Improv via BLE. Home Assistant sends your Wi-Fi details to Connect AUX-2 over Bluetooth, which needs one of the following:

- A Bluetooth proxy in Home Assistant, in range of Connect AUX-2.
- The Home Assistant app on your phone, with Bluetooth turned on and Bluetooth access allowed for the app.

1. Power Connect AUX-2 from a USB-C supply, with no Ethernet cable connected.
2. In Home Assistant, go to **Settings** > **Devices & services**.
3. Under **Discovered**, select **Add** on the Connect AUX-2 card marked "Improv via BLE".
4. Choose your Wi-Fi network, enter its password, and [follow the ESPHome adoption flow](https://esphome.io/guides/made_for_esphome/).
5. Assign it to an area and finish.

{% image "/static/img/connect-aux-2/ha-discovered-card.png" "Connect AUX-2 in the Discovered list in Home Assistant, ready for Wi-Fi setup with Improv via BLE" %}

Connect AUX-2 runs on ESPHome and is adopted like any other ESPHome device. To see what happens after adoption, read [What Connect AUX-2 is and how it works](/hc/en-us/articles/40528879660317). To pick a first project, see Starter projects.
