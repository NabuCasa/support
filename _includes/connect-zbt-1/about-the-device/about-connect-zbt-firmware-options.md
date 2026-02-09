This section has 2 goals:

1. List the currently available firmware options for {{ productName }}.
2. List the different apps and integrations related to these options and show their relationships.

## Currently available firmware for {{ productName }}

There are currently 2 different recommended firmware options available for {{ productName }}:

### Zigbee firmware

- This is the firmware that runs a Zigbee network. It is preinstalled on {{ productName }}.
- Other terms you may have seen to designate this firmware: EmberZNet firmware, {% abbr "EZSP" %} firmware, Zigbee EZSP.
- Home Assistant supports installing and updating the Zigbee firmware: You can install the firmware from the {{ productName }} integration page. If there is a firmware update for {{ productName }} available, Home Assistant will show an update notification.

### Thread firmware

- This firmware allows the use of {{ productName }} as a dedicated Thread border router when used with the **Open Thread Border Router** app (formerly known as an add-on).
- Other terms you may have seen to designate this firmware: OpenThread RCP, RCP OT.
- Home Assistant supports installing and updating the Thread firmware: You can install the firmware from the {{ productName }} integration page. If there is a firmware update for {{ productName }} available, Home Assistant will show an update notification.

### Overview of Zigbee and Thread firmware options, apps, and integrations in Home Assistant

![Chart illustrating the relationships between Zigbee and Thread firmware options, apps, and integrations in Home Assistant.](/static/img/connect-zbt-1/firmware-options-no-multiprotocol-2.svg)

*Chart illustrating the relationships between Zigbee and Thread firmware options, apps, and integrations in Home Assistant.*
