---
zendesk:
  article_id: 26152445484573
  name: Can I migrate from a deCONZ or Zigbee2MQTT stick to Home Assistant Connect ZBT-1 and keep using the old stick?
  position: 6
  labels: connect zbt-1, faq
---

No, you can't continue to use both.

### Why not?

During migration, the IEEE address of the Connect&nbsp;ZBT-1 is replaced by the IEEE address of the old stick.

- **Result**: This means that your old stick and your new stick will have the same IEEE address.
- This is required for the migration process to complete successfully.

### What should I do?

After migration, don't operate the old stick in the same area.

(In theory, you could not migrate the IEEE address. But if you do not migrate the IEEE address from your old stick, you'll have to re-pair many of your devices in order to keep them working).
