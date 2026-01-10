The Home Assistant team officially supports [Zigbee Home Automation (ZHA integration)](https://www.home-assistant.io/integrations/zha), the Zigbee stack built into [Home Assistant Core](https://www.home-assistant.io/docs/glossary/#home-assistant-core).

The Zigbee2MQTT (Z2M) project does also have [official compatibility](https://www.zigbee2mqtt.io/guide/adapters/#recommended) with Silicon Labs radios like {{ productName }} when using EmberZNet Zigbee firmware, support questions are then handled via their [Zigbee2MQTT community forum](https://github.com/Koenkk/zigbee2mqtt/discussions) (or their community own Discord). 

When setting up Zigbee2MQTT with {{ productName }}, you will need to configure the adapter type in Zigbee2MQTT. With the following settings, Zigbee2MQTT is known to work with {{ productName }}, make sure the following is present in your Zigbee2MQTT configuration:

**Note:** The [Zigbee Home Automation integration](https://www.home-assistant.io/integrations/zha) is active in Home Assistant by default! If you are using Zigbee2MQTT with Home Assistant, remember to delete and ignore the discovered Zigbee Home Automation integration in Home Assistant to avoid interference.
