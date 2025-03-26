---
zendesk:
  article_id: 26124431414557
  name: Connectivity issues due to interference
  position: 3
  labels: connect zbt-1, about the device, interference, connectivity issues
---

Zigbee devices, including Home Assistant Connect ZBT-1, can't communicate reliably if they are too close to other electronics which cause interference. Especially USB 3.0 devices are known to interfere with the 2.4&nbsp;GHz based protocols such as Zigbee or Thread.

The video below demonstrates this effect: when the stick is moved closely to a source of interference, the light switch and the light cannot communicate.

<iframe width="960" height="540" src="https://www.youtube.com/embed/tHqZhNcFEvA" title="Demo: Zigbee interference caused by USB 3.0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" controls>
</iframe>

**Technical note**: Home Assistant Connect&nbsp;ZBT-1's IEEE&nbsp;802.15.4 radio (like any Zigbee radio) uses a technique called Clear Channel Assessment (CCA). Before transmitting, the radio listens on the channel it intends to use. If there is traffic on the channel, it prevents the sender from becoming active. This traffic is not limited to the Zigbee protocol; it also includes other protocols using the same 2.4&nbsp;GHz band, as well as electromagnetic interference from other devices.

For an in-depth description of the issue, refer to the white paper issued in 2012 by Intel Corporation:
[USB 3.0* Radio Frequency Interference Impact on 2.4&nbsp;GHz Wireless Devices](https://www.usb.org/sites/default/files/327216.pdf)

## Countering interference

In some cases, the extension cable delivered with Home Assistant Connect&nbsp;ZBT-1 may not be sufficient to mitigate interference. If this occurs, try the following steps:

1. Use a longer and/or shielded extension cable.
2. Ensure the Home Assistant Connect&nbsp;ZBT-1 is not placed near any of the following devices:
   - USB&nbsp;3.0 devices or hubs
   - External SSDs or HDDs
   - 2.4&nbsp;GHz wireless devices, routers, or SBCs such as a Raspberry Pi

## Related topics

- [USB 3.0* Radio Frequency Interference Impact on 2.4&nbsp;GHz Wireless Devices](https://www.usb.org/sites/default/files/327216.pdf)