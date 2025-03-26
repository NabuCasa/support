---
zendesk:
  article_id: 26152555195933
  name: Is Zigbee2MQTT supported by Home Assistant Connect ZBT-1?
  position: 7
  labels: connect zbt-1, faq
---

The Home Assistant team officially supports ZHA (Zigbee Home Automation), the Zigbee stack integrated into [Home Assistant Core](https://www.home-assistant.io/docs/glossary/#home-assistant-core).

The Zigbee2MQTT project has [experimental support](https://www.zigbee2mqtt.io/guide/adapters/#experimental) (in beta stage) for the Silicon Labs radio on Home Assistant Connect ZBT-1 (or Home Assistant SkyConnect, if you have that variant). With this setting, Zigbee2MQTT is known to work on Home Assistant Connect ZBT-1.

**Note:** The Zigbee Home Automation integration is active by default! If you are using Zigbee2MQTT, remember to delete and ignore the discovered Zigbee Home Automation integration to avoid interference.

**Note:** When setting up Zigbee2MQTT with the Home Assistant Connect ZBT-1, you will need to configure the adapter type in Zigbee2MQTT. Make sure the following is present in your Zigbee2MQTT configuration:

```yaml
serial:
  adapter: ezsp
  port: /dev/serial/by-id/usb-Nabu_Casa_SkyConnect_v1.0_<usb-serial-number>-if00-port0
  baudrate: 115200
  rtscts: true
```

```yaml
serial:
  adapter: ezsp
  port: /dev/serial/by-id/usb-Nabu_Casa_Connect_ZBT-1_v1.0_<usb-serial-number>-if00-port0
  baudrate: 115200
  rtscts: true
```

You can find the port information under [Settings > System > Hardware](https://my.home-assistant.io/redirect/hardware/), then on the menu button, select **All Hardware** and search for Connect.

![Connect ZBT-1 Identification](/static/img/connect-zbt-1/connect-zbt-1-id.png)

## Related topics

- [Zigbee2MQTT experimental support](https://www.zigbee2mqtt.io/guide/adapters/#experimental)
- [ZHA integration](https://www.home-assistant.io/integrations/zha/)