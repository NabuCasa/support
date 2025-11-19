---
zendesk:
  article_id: 29400651300893
  name:  Migrate a Zigbee2MQTT network to Home Assistant Connect ZBT-2 using Zigbee Home Automation (ZHA)
  position: 30
  labels: connect-zbt-2, getting-started
productName: "Home Assistant Connect&nbsp;ZBT-2"
---

Follow this guide if you have a Zigbee2MQTT network running and want to migrate to {{ productName }} and Zigbee Home Automation (ZHA).

This migration is done in 2 steps:

1. [Migrating the Zigbee2MQTT network to ZHA using the old adapter](#migrating-a-zigbee-network-from-zigbee2mqtt-to-zha-using-the-old-adapter).
2. [Migrating this ZHA network to {{ productName }}](#migrating-the-zha-network-to-home-assistant-connect-zbt-2)

{% callout "note" %}

**Not possible to migrate all settings and devices**

This procedure only helps migrate basic network settings to {{ productName }}.

- Customizations like device names will be lost and automations will need to be updated.
- Most powered devices like light bulbs will be re-discovered over time (you can speed this up by rebooting the device) but your battery-powered devices may need to be re-joined to the network for the migration to complete.
- There is currently no migration path to migrate all settings and devices.

{% endcallout %}

If you no longer have the old adapter, you can [migrate via a Zigbee2MQTT backup](/hc/en-us/articles/29400771412893).

## Migrating a Zigbee network from Zigbee2MQTT to ZHA using the old adapter

{% include 'connect-zbt-1/getting-started/migrate-z2m-to-zha-on-old-adapter.md' %}

## Migrating the ZHA network to Home Assistant Connect ZBT-2

{% include 'connect-zbt-2/getting-started/zbt-2-migrate-zha-only.md' %}

## Related topics

- [Connectivity issues due to interference](/hc/en-us/articles/31347207026845)