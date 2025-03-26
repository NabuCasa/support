---
zendesk:
  article_id: 25616122309405
  name: About firmware options
  position: 3
  labels: yellow, about, Zigbee, Thread, multiprotocol
---

This section has two goals:

1. List the currently available firmware options for Home Assistant Yellow and Connect ZBT-1 (the two devices have the same radio chip built-in).
2. List the different add-ons and integrations related to these options and show their relationships.

## Currently available firmware

There are currently 2 different firmware options for Home Assistant Yellow:

### Zigbee firmware

This is the firmware that runs a Zigbee network. It is preinstalled on Connect ZBT-1 and Yellow.
Bundled in the Silicon Labs Flasher add-on. In case you have installed one of the other two options at some point, this add-on allows you to re-install the Zigbee firmware. Note that the add-on is only used to flash the firmware. It is never used during operation: Zigbee Home Automation (ZHA) communicates with the Zigbee firmware directly.
Other terms you may have seen to designate this firmware: EmberZNet firmware, EZSP firmware, Zigbee EZSP.

### Thread firmware

This firmware allows using Yellow or Connect ZBT-1 as a dedicated Thread border router when used with the Open Thread Border Router addon.
Bundled in the Open Thread Border Router add-on.
Other terms you may have seen to designate this firmware: OpenThread RCP, RCP OT

#### Overview of Zigbee and Thread firmware options, add-ons, and integrations in Home Assistant.

![Chart illustrating the relationships between Zigbee and Thread firmware options, add-ons, and integrations in Home Assistant.](/static/img/yellow/firmware-options-no-multiprotocol.svg)

Chart illustrating the relationships between Zigbee and Thread firmware options, add-ons, and integrations in Home Assistant.

## Related topics

[Zigbee Home Automation integration documentation](https://www.home-assistant.io/integrations/zha/)
[Thread integration documentation](https://www.home-assistant.io/integrations/thread/)
