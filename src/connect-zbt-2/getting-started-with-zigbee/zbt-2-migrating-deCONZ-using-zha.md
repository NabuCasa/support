---
zendesk:
  article_id: 29400714818973
  name:  Migrating a deCONZ network to Home Assistant Connect ZBT-2 using Zigbee Home Automation (ZHA)
  position: 30
  labels: connect-zbt-2, getting-started
productName: "Home Assistant Connect&nbsp;ZBT-2"
type: "zbt2"
---

Follow this guide if you have a deCONZ network running with a ConBee III, a ConBee II, or a RaspBee II and want to migrate to {{ productName }} and the **Zigbee Home Automation** integration.

{% callout "note" %}

{% include 'fragments/zbt-1-2-not-possible-to-migrate-all.md' %}

{% endcallout %}

This migration includes the following steps:

1. [Prerequisites](#prerequisites).
2. [Migrating the deCONZ network from the old adapter to ZHA](#to-migrate-a-deconz-network-from-the-old-adapter-to-zha).
3. [Migrating this ZHA network to {{ productName }}](#to-migrate-the-zha-network-to-connectzbt-2).

## Prerequisites

{% include "fragments/zbt-1-2-migrate-deconz-prereqs.md" %}

### Updating the deCONZ adapter

{% include "connect-zbt-1/getting-started/zbt1-2-updating-deconz-adapter.md" %}

## To migrate a deCONZ network from the old adapter to ZHA

{% include "connect-zbt-1/getting-started/zbt-1-2-migrate-deconz-to-zha.md" %}

## To migrate the ZHA network to Connect&nbsp;ZBT-2

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

- Select **Recommended installation**.
  - This adds the device to Home Assistant, backs up your old adapter and moves those network settings to {{ productName }}.

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