---
zendesk:
  article_id: 26152445484573
  name: Can I migrate from a deCONZ or Zigbee2MQTT adapter to Home Assistant Connect ZBT-1 and keep using the old adapter?
  position: 6
  labels: connect zbt-1, faq
---

No, you can't continue to use both.

### Why not?

During migration, the IEEE address of the Connect&nbsp;ZBT-1 is replaced by the IEEE address of the old adapter.

- **Result**: This means that your old adapter and your new adapter will have the same IEEE address.
- This is required for the migration process to complete successfully.

### What should I do?

After migration, don't operate the old adapter in the same area.

(In theory, you could not migrate the IEEE address. But if you do not migrate the IEEE address from your old adapter, you'll have to re-pair many of your devices in order to keep them working).
