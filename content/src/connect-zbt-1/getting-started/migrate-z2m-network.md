---
zendesk:
  article_id: 26123745634845
  name: Migrate a Zigbee2MQTT network using Zigbee Home Automation (ZHA)
  position: 3
  labels: connect zbt-1, getting started, migrate, migration
---

Follow this guide if you have a Zigbee2MQTT network running and want to migrate to Connect ZBT-1 and ZHA.

Note: this procedure only helps migrate basic network settings to your Home Assistant Connect ZBT-1, customizations like device names will be lost and automations will need to be updated. Most powered devices like lightbulbs will be re-discovered over time (you can speed this up by rebooting the device) but your battery-powered devices may need to be re-joined to the network for the migration to complete. There is currently no migration path to migrate all settings and devices.

If you no longer have the old stick, you can migrate via z2m backup.

## To migrate an existing ZHA network to Connect&nbsp;ZBT-1

{% partial 'connect-zbt-1/migrate-zha-only.md' %}