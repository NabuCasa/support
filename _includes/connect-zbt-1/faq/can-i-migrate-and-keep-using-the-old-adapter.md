No, you can't continue to use both adapters with the same Home Assistant hub.

### Why not?

During migration, the IEEE address of the {{ productName }} is replaced by the IEEE address of the old adapter.

- **Result**: This means that your old adapter and your new adapter will have the same IEEE address.
- This is required for the migration process to complete successfully.

### What should I do?

After migration, don't operate the old adapter with the same Home Assistant hub.

(In theory, you could not migrate the IEEE address. But if you do not migrate the IEEE address from your old adapter, you'll have to re-pair many of your devices in order to keep them working).
