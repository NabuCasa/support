---
zendesk:
  article_id: 31369193447325
  name: Resetting your Home Assistant Connect ZBT-2
  position: 20
  labels: connect-zbt-2, data-handling
productName: "Home Assistant Connect&nbsp;ZBT-2"
---

If you are running Zigbee on {{ productName }}, a device reset fully wipes the device's NVRAM. This means that the device data is completely erased, all settings of any form are removed, including the Zigbee network information. It's safe to pass it on to someone else.

If you are running Thread on {{ productName }}, you cannot reset the device, as Thread network info is only stored in Home Assistant. Pressing the button has no effect in that case.

## Prerequisites

- If needed, migrate the network to another adapter before resetting {{ productName }}.
- Delete the **{{ productName }}** integration from Home Assistant.
- A pointy tool like a sim tray ejector pin.

## To reset your {{ productName }}

{% steps %}
{% step "Pressing the reset button" "Step" %}
{% image "/static/img/connect-zbt-2/zbt-2-device-reset-press-button.png" "Select use as Zigbee adapter" %}
{% stepContent %}

1. To reset the device, press and hold the button.
   - The device LED starts blinking orange 4 times.
      - If you stop pressing during that time, the reset is not started.
2. When the LED starts blinking red, the firmware is being reset.
   - After reset, the device automatically reboots.
   - The blue pulsing light shows that its rebooting and ready to connect to a hub again.

{% endstepContent %}
{% endstep %}
{% endsteps %}
