---
zendesk:
  article_id: 40528828414237
  name: "Using a Connect radio adapter over the network"
  position: 50
  labels: connect aux-2
---

Plug a Connect ZWA-2 into the USB-A port of Home Assistant Connect AUX-2 to use its Z-Wave network over your network connection. Home Assistant discovers the adapter automatically. Connect AUX-2 supports Zigbee through a Connect ZBT-2 as an experimental feature. See [Using a Connect ZBT-2 with Connect AUX-2](/hc/en-us/articles/40529064396445). Connect ZBT-1 isn't currently supported. See [Specifications](/hc/en-us/articles/40528929207453).

{% image "/static/img/connect-aux-2/aux-2-zwa-2-connection.png" "Connect ZWA-2 connected with a USB cable from the USB-C port in its base to the USB-A port of Connect AUX-2" %}

- Use one adapter at a time.
- A wired connection, over Ethernet or Power over Ethernet (PoE), is recommended for the most reliable radio link. See [Power and network options](/hc/en-us/articles/40528734420253).

## Where your network data lives

Connect AUX-2 stores no Z-Wave network data. The network data lives on the Connect ZWA-2.

You can move a Connect ZWA-2, for example from your Home Assistant server to Connect AUX-2. Home Assistant picks up the change and migrates the adapter to its new location.

If Home Assistant doesn't detect the adapter, see [Troubleshooting](/hc/en-us/articles/40528982833565).
