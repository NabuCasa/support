---
zendesk:
  article_id: 31346954875421
  name: Is Zigbee2MQTT supported by Home Assistant Connect ZBT-2?
  position: 30
  labels: connect-zbt-2, faq
productName: "Home Assistant Connect&nbsp;ZBT-2"
---

{% include "connect-zbt-1/faq/is-z2m-supported.md" %}

After copying the example below, replace the `<usb-serial-number>` placeholder with the actual serial number.

You can find the port information under [Settings > System > Hardware](https://my.home-assistant.io/redirect/hardware/), then on the menu button, select **All Hardware** and search for `zbt`.

```yaml
serial:
  adapter: ember
  port: /dev/serial/by-id/usb-Nabu_Casa_ZBT-2_<usb-serial-number>-if00-port0
  baudrate: 460800
  rtscts: true
```

![Connect ZBT-2 Identification](/static/img/connect-zbt-2/connect-zbt-2-id.png)

## Related topics

- [Zigbee2MQTT support](https://www.zigbee2mqtt.io/guide/adapters/#recommended)
- [ZHA integration](https://www.home-assistant.io/integrations/zha/)