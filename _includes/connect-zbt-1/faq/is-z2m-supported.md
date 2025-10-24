The Home Assistant team officially supports **Zigbee Home Automation**, the Zigbee stack integrated into [Home Assistant Core](https://www.home-assistant.io/docs/glossary/#home-assistant-core).

The Zigbee2MQTT project has [experimental support](https://www.zigbee2mqtt.io/guide/adapters/#experimental) (in beta stage) for the Silicon Labs radio on {{ productName }}. With this setting, Zigbee2MQTT is known to work.

**Note:** The Zigbee Home Automation integration is active by default! If you are using Zigbee2MQTT, remember to delete and ignore the discovered Zigbee Home Automation integration to avoid interference.

**Note:** When setting up Zigbee2MQTT with {{ productName }}, you will need to configure the adapter type in Zigbee2MQTT. Make sure the following is present in your Zigbee2MQTT configuration: