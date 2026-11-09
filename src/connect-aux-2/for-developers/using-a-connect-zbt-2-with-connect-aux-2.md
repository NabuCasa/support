---
zendesk:
  article_id: 40529064396445
  name: "Using a Connect ZBT-2 with Connect AUX-2"
  position: 30
  labels: connect aux-2
---

Plug a Home Assistant Connect ZBT-2 into Home Assistant Connect AUX-2 to run your Zigbee network from Connect AUX-2 instead of your Home Assistant server. With Connect AUX-2 powered over Ethernet, the Connect ZBT-2 can sit in a more central spot in your home. Home Assistant reaches the Connect ZBT-2 over the network through the Zigbee Home Automation (ZHA) integration.

{% callout "important" %}

Connect AUX-2 supports Zigbee through a Connect ZBT-2 as an experimental feature. This setup hasn't been widely tested yet. If you need the most stable Zigbee network, keep the Connect ZBT-2 plugged into your Home Assistant server.

{% endcallout %}

## Before you start

- Home Assistant 2026.11 or newer.
- Connect AUX-2 firmware 2026.10.4 or newer. See [Updating the firmware](/hc/en-us/articles/40528920875037).
- Connect AUX-2 set up in Home Assistant through the ESPHome integration. See [Set up Home Assistant Connect AUX-2](/hc/en-us/articles/40527754954653).
- One Connect ZBT-2. Connect ZBT-1 isn't currently supported.
- The Zigbee Home Automation (ZHA) integration. Zigbee2MQTT doesn't work with this setup.

## Move your Connect ZBT-2 to Connect AUX-2

Use these steps if your Connect ZBT-2 already runs your Zigbee network from your Home Assistant server. Your Zigbee devices stay paired and your network settings stay the same.

1. Unplug the Connect ZBT-2 from your Home Assistant server.
2. Plug the Connect ZBT-2 into the USB-A port of Connect AUX-2.
3. Wait a few seconds. ZHA reconfigures automatically and runs the network through Connect AUX-2. You don't need to restart or reload anything.

## Move your Connect ZBT-2 back to your Home Assistant server

1. Unplug the Connect ZBT-2 from Connect AUX-2.
2. Plug the Connect ZBT-2 into your Home Assistant server.

ZHA switches the network back to your Home Assistant server.

{% callout "note" %}

**If a device stops responding after a move**

When the Connect ZBT-2 moves, your Zigbee devices stay paired, but the network has to find new routes. Devices that connected directly to the Connect ZBT-2 now reach it through a different path. Most devices re-route on their own. If a device stops responding, restart it. If it still doesn't respond, pair it again.

{% endcallout %}

## Set up a new Connect ZBT-2 on Connect AUX-2

You can start a new Zigbee network with a Connect ZBT-2 plugged into Connect AUX-2.

1. Find a good location for the Connect ZBT-2. Keep it away from thick walls, wire mesh, metal such as server racks or wall brackets, other transmitters such as computers, routers, USB 3.0 ports, or SSDs, and aquariums.
2. Screw the antenna onto the base, and place the Connect ZBT-2 so the antenna stands upright. Don't overtighten the antenna, as that can damage the device. Don't fix the device in place yet. Once it's connected, check for interference and move it if it seems unresponsive.
3. Plug the Connect ZBT-2 into the USB extension cable, then plug the cable into the USB-A port of Connect AUX-2.
4. In Home Assistant, go to **Settings** > **Devices & services**. The Connect ZBT-2 shows as discovered. Select **Add**. If it isn't discovered, see [Troubleshooting](/hc/en-us/articles/40528982833565).
5. In the dialog, select **Use as Zigbee adapter**. Thread setup stops with an error message on Connect AUX-2.
6. Select **Recommended installation**. This sets up Zigbee with the Zigbee Home Automation (ZHA) integration. Custom installations such as Zigbee2MQTT don't work with Connect AUX-2.
7. Follow the steps on screen. When prompted, add the Zigbee adapter to an area, then select **Finish**.
8. Add your Zigbee devices:
    1. Go to **Settings** > **Devices & services** and select the **Zigbee Home Automation** integration.
    2. Select **Add device**. ZHA searches for Zigbee devices in pairing mode.
    3. Put your Zigbee device into pairing mode.

## Network connection

Connect AUX-2 works best with an Ethernet connection when it hosts a Connect ZBT-2. Wi-Fi also works. See [Power and network options](/hc/en-us/articles/40528734420253).

{% callout "note" %}

If Connect AUX-2 uses Wi-Fi, place the Connect ZBT-2 as far from Connect AUX-2 as you reasonably can. The Wi-Fi signal from Connect AUX-2 is much stronger than the Zigbee signal from the Connect ZBT-2, and it interferes with Zigbee when the two are close together.

{% endcallout %}
