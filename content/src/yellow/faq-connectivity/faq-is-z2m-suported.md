---
zendesk:
  article_id: 25590244122269
  name: Is Zigbee2MQTT supported by the on-board radio?
  position: 1
  labels: yellow, faq, connectivity
---


The Home Assistant Yellow team officially supports [ZHA](/integrations/zha/) (Zigbee Home Automation), the Zigbee stack integrated into [Home Assistant Core](https://www.home-assistant.io/docs/glossary/#home-assistant-core).

The [Zigbee2MQTT](https://www.zigbee2mqtt.io/) project has [experimental support](https://www.zigbee2mqtt.io/guide/adapters/#experimental) (in beta stage) for the Silicon Labs radio on Home Assistant Yellow. With this setting, Zigbee2MQTT is known to work on Home Assistant Yellow.

**Note**: The Zigbee Home Automation integration is active by default! If you are using Zigbee2MQTT, remember to delete and ignore the discovered Zigbee Home Automation integration to avoid interference.

**Note**: When setting up Zigbee2MQTT with Home Assistant Yellow, you will need to configure the adapter type in Zigbee2MQTT. Make sure the following is present in your Zigbee2MQTT [configuration file](https://www.home-assistant.io/docs/glossary/#configuration-file):

```yaml
serial:
    adapter: ezsp
    port: /dev/ttyAMA1
    baudrate: 115200
    rtscts: true
```

## Related topics

- [ZHA](/integrations/zha/)
- [Zigbee2MQTT](https://www.zigbee2mqtt.io/)
- [Configuration file](https://www.home-assistant.io/docs/glossary/#configuration-file)
- [Zigbee2MQTT experimental support](https://www.zigbee2mqtt.io/guide/adapters/#experimental)