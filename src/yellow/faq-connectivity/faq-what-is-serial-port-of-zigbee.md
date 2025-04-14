---
zendesk:
  article_id: 25590430268701
  name: What is the serial port of the Zigbee radio?
  position: 2
  labels: yellow, faq, connectivity
---

The Zigbee/Thread (IEEE 802.15.4) radio is directly connected via serial port to the Raspberry Pi Compute Module 4 on `/dev/ttyAMA1`.

Note that there is no `/dev/serial/by-id` path for this serial port as it's not connected through USB. The above `tty` path will remain static.
