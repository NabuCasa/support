This section has two goals:

1. List the currently available firmware options for {{ productName }}.
2. List the different add-ons and integrations related to these options and show their relationships.

## Currently available firmware for {{ productName }}

There are currently two different recommended firmware options available for {{ productName }}:

### Zigbee firmware

- This is the firmware that runs a Zigbee network. It is preinstalled on {{ productName }}.
- Other terms you may have seen to designate this firmware: EmberZNet firmware, {% abbr "EZSP" %} firmware, Zigbee EZSP. (EZSP is no longer used. It has been replaced by Ember).
- Home Assistant supports installing and updating the Zigbee firmware: You can install the firmware from the {{ productName }} integration page. If there is a firmware update for {{ productName }} available, Home Assistant will show an update notification.

### Thread firmware

- This firmware allows the use of {{ productName }} as a dedicated Thread border router when used with the **Open Thread Border Router** add-on.
- Other terms you may have seen to designate this firmware: OpenThread RCP, RCP OT.
- Home Assistant supports installing and updating the Thread firmware: You can install the firmware from the {{ productName }} integration page. If there is a firmware update for {{ productName }} available, Home Assistant will show an update notification.

### Overview of Zigbee and Thread firmware options, add-ons, and integrations in Home Assistant

![Chart illustrating the relationships between Zigbee and Thread firmware options, add-ons, and integrations in Home Assistant.](/static/img/connect-zbt-1/firmware-options-no-multiprotocol.svg)

*Chart illustrating the relationships between Zigbee and Thread firmware options, add-ons, and integrations in Home Assistant.*
