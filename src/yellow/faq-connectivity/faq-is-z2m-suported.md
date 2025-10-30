---
zendesk:
  article_id: 25590244122269
  name: Is Zigbee2MQTT supported by the on-board radio of Home Assistant Yellow?
  position: 1
  labels: yellow, faq, connectivity
---

{% include "connect-zbt-1/faq/is-z2m-supported.md" %}

```yaml
serial:
  adapter: ezsp
  port: /dev/ttyAMA1
  baudrate: 115200
  rtscts: true
```

## Related topics

- [ZHA](https://www.home-assistant.io/integrations/zha/)
- [Zigbee2MQTT](https://www.zigbee2mqtt.io/)
- [Configuration file](https://www.home-assistant.io/docs/glossary/#configuration-file)
- [Zigbee2MQTT support](https://www.zigbee2mqtt.io/guide/adapters/#recommended)
