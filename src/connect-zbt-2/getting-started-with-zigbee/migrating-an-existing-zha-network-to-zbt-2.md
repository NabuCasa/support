---
zendesk:
  article_id: 29400665034397
  name: Migrating an existing Zigbee Home Automation (ZHA) network to Home Assistant Connect ZBT-2
  labels: connect-zbt-2, getting-started
productName: "Home Assistant Connect&nbsp;ZBT-2"
---

Follow this guide if you already have a running Zigbee Home Assistant (ZHA) network and want to migrate to {{ productName }}.

## Prerequisites

- Home Assistant 2025.11 or newer.
- A running Zigbee Home Assistant (ZHA) network with a Zigbee adapter.
- A {{ productName }}.
- A free USB port for your new adapter. If you don't have a free port, you can use a USB hub.

## To migrate an existing ZHA network to Connect&nbsp;ZBT-2

{% steps %}

{% include "connect-zbt-2/getting-started/plug-in-zbt-2-and-extension-cable.md" %}

{% step "Adding the Home Assistant Connect ZBT-2 integration" %}
{% image "/static/img/connect-zbt-2/connect-zbt-2-add.png" "Locate the Connect ZBT-2 integration" %}
{% stepContent %}

1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
   - {{ productName }} should now be discovered.
2. Select **Add**.

{% endstepContent %}
{% endstep %}

{% step "Picking your protocol" %}
{% image "/static/img/connect-zbt-2/zbt-2-migrate-zigbee-to-new-adapter.png" "Pick your firmware" %}
{% stepContent %}

- In the dialog, select **Migrate Zigbee to a new adapter**.
- This will move the Zigbee network to your new adapter.

{% endstepContent %}
{% endstep %}

{% step "Select installation type" %}
{% image "/static/img/connect-zbt-1/zbt-select-installation-method.png" "Pick your firmware" %}
{% stepContent %}

- **Option 1**: If you just want to migrate, select **Recommended installation**.
  - This adds the device to Home Assistant, backs up your old adapter and moves those network settings to {{ productName }}.
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

- [Connectivity issues due to interference](/hc/en-us/articles/31347207026845)
