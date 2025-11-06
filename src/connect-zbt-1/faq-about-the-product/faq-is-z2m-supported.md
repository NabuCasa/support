---
zendesk:
  article_id: 26152555195933
  name: Is Zigbee2MQTT supported by Home Assistant Connect ZBT-1?
  position: 7
  labels: connect zbt-1, faq
productName: "Home Assistant Connect&nbsp;ZBT-1 (or Home Assistant SkyConnect, if you have that variant)"
---

{% include "connect-zbt-1/faq/is-z2m-supported.md" %}

After copying the example below, replace the `<usb-serial-number>` placeholder with the actual serial number.

```yaml
serial:
  adapter: ember
  port: /dev/serial/by-id/usb-Nabu_Casa_SkyConnect_v1.0_<usb-serial-number>-if00-port0
  baudrate: 115200
  rtscts: true
```

You can find the port information under [Settings > System > Hardware](https://my.home-assistant.io/redirect/hardware/), then on the menu button, select **All Hardware** and search for **Connect**.

![Connect ZBT-1 Identification](/static/img/connect-zbt-1/connect-zbt-1-id.png)

## Related topics

- [Zigbee2MQTT support](https://www.zigbee2mqtt.io/guide/adapters/#recommended)
- [ZHA integration](https://www.home-assistant.io/integrations/zha/)