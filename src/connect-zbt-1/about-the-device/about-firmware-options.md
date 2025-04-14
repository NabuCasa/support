---
zendesk:
  article_id: 26124493529117
  name: About firmware options
  position: 1
  labels: connect zbt-1, about the device, firmware
---

This section has two goals:

1. List the currently available firmware options for Home Assistant Connect&nbsp;ZBT-1.
2. List the different add-ons and integrations related to these options and show their relationships.

## Currently available firmware for Home Assistant Connect ZBT-1

There are currently two different recommended firmware options available for Home Assistant Connect&nbsp;ZBT-1:

### Zigbee firmware

- This is the firmware that runs a Zigbee network. It is preinstalled on Home Assistant Connect&nbsp;ZBT-1.
- Bundled in the **Silicon Labs Flasher** add-on. If you have installed one of the other two options at some point, this add-on allows you to re-install the Zigbee firmware. Note that the add-on is only used to flash the firmware. It is never used during operation: Zigbee Home Automation (ZHA) communicates with the Zigbee firmware directly.
- Other terms you may have seen to designate this firmware: EmberZNet firmware, <abbr title="EmberZnet serial protocol">EZSP</abbr> firmware, Zigbee EZSP.

### Thread firmware

- This firmware allows the use of Home Assistant Connect&nbsp;ZBT-1 as a dedicated Thread border router when used with the **Open Thread Border Router** add-on.
- Bundled in the **Open Thread Border Router** add-on.
- Other terms you may have seen to designate this firmware: OpenThread RCP, RCP OT.

### Overview of Zigbee and Thread firmware options, add-ons, and integrations in Home Assistant

![Chart illustrating the relationships between Zigbee and Thread firmware options, add-ons, and integrations in Home Assistant.](/static/img/connect-zbt-1/firmware-options-no-multiprotocol.svg)

*Chart illustrating the relationships between Zigbee and Thread firmware options, add-ons, and integrations in Home Assistant.*

## Related topics

- [Firmware updates for Connect ZBT-1](/hc/en-us/articles/26124447269917)
- [Zigbee Home Automation integration documentation](https://www.home-assistant.io/integrations/zha/)
- [Thread integration documentation](https://www.home-assistant.io/integrations/thread/)
