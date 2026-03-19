---
zendesk:
  article_id: 26123655295261
  name: Migrating an existing Zigbee Home Automation (ZHA) network to Home Assistant Connect ZBT-1
  position: 20
  labels: connect-zbt-1, getting started, migrate, migration
productName: "Home Assistant Connect&nbsp;ZBT-1"
---

Follow this guide if you already have a running Zigbee Home Assistant (ZHA) network and want to migrate to {{ productName }}.

## Prerequisites

- Home Assistant Core 2025.11 or newer.
- A running Zigbee Home Assistant (ZHA) network with a Zigbee adapter.
- A {{ productName }}.
- A free USB port for your new adapter. If you don't have a free port, you can use a USB hub.

## To migrate an existing ZHA network to Connect&nbsp;ZBT-1

{% steps %}

{% include "connect-zbt-1/getting-started/plug-in-zbt-1-and-extension-cable.md" %}

{% step "Locating the Home Assistant Connect&nbsp;ZBT-1 integration" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-add.png" "Locate the Connect ZBT-1 integration" %}
{% stepContent %}

- Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
- The Connect ZBT-1 should now be discovered.
- Select **Add**.

{% endstepContent %}
{% endstep %}

{% step "Picking your protocol" %}
{% image "/static/img/connect-zbt-1/zbt-migrate-zigbee-to-new-adapter.png" "Pick your firmware" %}
{% stepContent %}

- In the dialog, select **Migrate Zigbee to a new adapter**.
- This will move the Zigbee network to your new adapter.

{% endstepContent %}
{% endstep %}

{% step "Select installation type" %}
{% image "/static/img/connect-zbt-1/zbt-select-installation-method.png" "Pick your firmware" %}
{% stepContent %}

- **Option 1**: If you just want to migrate, select **Recommended installation**.
  - This adds the device to Home Assistant, backs up your old adapter and moves those network settings to the Connect ZBT-1.
- **Option 2**: If you run a different Zigbee solution, for example Zigbee2MQTT, select **Custom**.
  - This adds the device to Home Assistant, but you will need to manually configure the software of your choice on your own.
  - Those custom steps are not covered in this documentation.

{% endstepContent %}
{% endstep %}

{% step "Migration complete!" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-12.png" "Screenshot showing the Success dialog" %}
{% stepContent %}

- The migration process is now complete.
- **Info** You won't be able to control the devices until they rejoin the network.
  - Normally, they rejoin within one hour.
  - You may be able to accelerate that process by power-cycling devices.
- You can now remove the old Zigbee adapter.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Connectivity issues due to interference](/hc/en-us/articles/26124431414557)
