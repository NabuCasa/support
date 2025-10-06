---
zendesk:
  article_id: 26124035750173
  name: Migrating a deCONZ network to Home Assistant Connect ZBT-1 using Zigbee Home Automation (ZHA)
  position: 4
  labels: connect zbt-1, getting started, migrate, migration
---

Follow this guide if you have a deCONZ network running with a ConBee II or RaspBee II and want to migrate to Connect ZBT-1 and {% abbr "ZHA" %}.

{% callout "note" %}

**Not possible to migrate all settings and devices**

This procedure only helps migrate basic network settings to Home Assistant Connect ZBT-1.

- Customizations like device names will be lost and automations will need to be updated.
- Most powered devices like light bulbs will be re-discovered over time (you can speed this up by rebooting the device) but your battery-powered devices may need to be re-joined to the network for the migration to complete.
- There is currently no migration path to migrate all settings and devices.

{% endcallout %}

This migration includes the following steps:

1. [Prerequisites](#prerequisites).
2. [Migrating the deCONZ network from the old adapter to ZHA](#to-migrate-a-deconz-network-from-the-old-adapter-to-zha).
3. [Migrating this ZHA network to Connect ZBT-1](#to-migrate-the-zha-network-to-connectzbt-1).
4. [Renaming the integration and reconfiguring automations](#renaming-the-integration-and-reconfiguring-automations).

## Prerequisites

- a deCONZ network running with a ConBee II or RaspBee II.
- Home Assistant version 2025.10.1 or later.
- firmware version 26720700 or later on the Conbee/Raspbee adapter.
  - Check the steps below to see how to [check the version or update the deCONZ adapter](#updating-the-deconz-adapter).

### Updating the deCONZ adapter

{% steps %}
{% step "Viewing the firmware version of the adapter" %}
{% image "/static/img/connect-zbt-1/conbee-update-05.png" "View the firmware version of the adapter" %}
{% stepContent %}

- In the deCONZ app, under **Settings** > **Gateway**, check the firmware version. It should be version 26720700 or newer.
  - If the version is recent enough, skip the next two steps and continue with Step 4 (Stop the deCONZ add-on).
  - If the version is not up-to-date, select **Update to 26720700**.

{% endstepContent %}
{% endstep %}

{% step "Following the wizard" %}
{% image "/static/img/connect-zbt-1/conbee-update-06.png" "Follow the wizard" %}
{% stepContent %}

- Select **Create backup** and let the wizard guide you through the update process.

{% endstepContent %}
{% endstep %}

{% step "Updating complete" %}
{% image "/static/img/connect-zbt-1/conbee-update-14.png" "Update complete" %}
{% stepContent %}

- Once the update is complete, you will see the new firmware version.

{% endstepContent %}
{% endstep %}

## To migrate a deCONZ network from the old adapter to ZHA

{% step "Stopping the deCONZ add-on" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-02.png" "Stop the deCONZ add-on" %}
{% stepContent %}

1. In the [deCONZ add-on](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_deconz), make sure the **Start on boot** option is disabled.
2. Select **Stop**.

{% endstepContent %}
{% endstep %}

{% step "Removing the deCONZ integration" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-33.png" "Remove the deCONZ integration" %}
{% stepContent %}

1. Under [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/), select the deCONZ integration.
2. Select the three dots menu and select **Delete**.

{% endstepContent %}
{% endstep %}

{% step "Adding a new ZHA integration" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-23.png" "Add a new ZHA integration" %}
{% stepContent %}

1. In the top-right corner, make sure the checkboxes **Show ignored integrations** and **Show disabled integrations** are selected.
2. Check if the ZHA integration shows up.
   - If the ZHA integration does not show up, select **Add integration**, then select **ZHA** from the list.

{% endstepContent %}
{% endstep %}

{% step "Add the Zigbee Home Automation integration" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-04.png" "Configure the new ZHA integration" %}
{% stepContent %}

- Once the ZHA integration has detected ConBee II, select **Add**.

{% endstepContent %}
{% endstep %}

{% step "Submit" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-05.png" "Set up ConBee II as ZHA integration" %}
{% stepContent %}

- To set up ConBee II as ZHA integration, select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Choosing the Zigbee setup" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-21.png" "Choose the network settings for your radio" %}
{% stepContent %}

- Select **Advanced setup**.

{% endstepContent %}
{% endstep %}

{% step "Choosing the network settings for your radio" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-51.png" "Choose the network settings for your radio" %}
{% stepContent %}

- Select **Keep adapter network settings**.
  - This lets Zigbee Home Automation (ZHA) import settings from another device that was used with software other than ZHA.
  - This way, some of the network settings can be migrated automatically.

- {% stepResult "You can now start migrating the ZHA network as described below." %}

{% endstepContent %}
{% endstep %}

{% step "Wait" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-09.png" "Wait" %}
{% stepContent %}

- Wait for the settings to be loaded.
- Once the Conbee/Raspbee adapter has been recognized as your Zigbee coordinator, select **Finish**.

{% endstepContent %}
{% endstep %}

{% step "Wait" %}
{% image "/static/img/connect-zbt-1/z2m-backup-restore-05.png" "Wait for the devices to rejoin the network" %}
{% stepContent %}

- Wait for the devices to rejoin the network
  - Normally, powered devices rejoin within one hour.
  - You may be able to accelerate that process by power-cycling devices.
  - Your battery-powered devices may need to be re-joined to the network manually.
  - Once the devices show up in the integration, select the integration.

{% endstepContent %}
{% endstep %}

## To migrate the ZHA network to Connect&nbsp;ZBT-1

{% include 'connect-zbt-1/migrate-zha-only.md' %}

## Renaming the integration and reconfiguring automations

{% step "Renaming the ZHA integration" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-new-21.png" "Start renaming ZHA integration" %}
{% stepContent %}

- To avoid confusion, rename the ZHA integration.
- Change the ZHA integration name to **Connect ZBT-1**.

{% endstepContent %}
{% endstep %}

{% step "Reconfiguring automations and dashboards" %}
{% image "/static/img/connect-zbt-1/conbee-migrate-zha-new-22.png" "Reconfigure automations and dashboards" %}
{% stepContent %}

- **Info**: All migrated devices have new entity IDs. This means you will need to manually reconfigure automations and dashboard cards.
- **Info**: The names that you manually assigned to your devices won't have been migrated. You will have to rename the devices again.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Connectivity issues due to interference](/hc/en-us/articles/26124431414557)