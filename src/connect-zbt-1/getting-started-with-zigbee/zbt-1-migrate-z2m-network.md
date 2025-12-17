---
zendesk:
  article_id: 26123745634845
  name: Migrate a Zigbee2MQTT network to Home Assistant Connect ZBT-1 using Zigbee Home Automation (ZHA)
  position: 3
  labels: connect-zbt-1, getting started, migrate, migration
productName: "Home Assistant Connect&nbsp;ZBT-1"
---

Follow this guide if you have a Zigbee2MQTT network running and want to migrate to {{ productName }} and Zigbee Home Automation (ZHA).

This migration is done in 2 steps:

1. [Migrating the Zigbee2MQTT network to ZHA using the old adapter](#migrating-a-zigbee-network-from-zigbee2mqtt-to-zha-using-the-old-adapter).
2. [Migrating this ZHA network to {{ productName }}](#migrating-the-zha-network-to-connect-zbt-1)

{% callout "note" %}

{% include 'fragments/zbt-1-2-not-possible-to-migrate-all.md' %}

{% endcallout %}

If you no longer have the old adapter, you can [migrate via a Zigbee2MQTT backup](/hc/en-us/articles/26700478689949).

## Migrating a Zigbee network from Zigbee2MQTT to ZHA using the old adapter

{% include 'connect-zbt-1/getting-started/migrate-z2m-to-zha-on-old-adapter.md' %}

## Migrating the ZHA network to Home Assistant Connect&nbsp;ZBT-1

{% include 'connect-zbt-1/getting-started/migrate-zha-only.md' %}

## Related topics

- [Connectivity issues due to interference](/hc/en-us/articles/26124431414557)
