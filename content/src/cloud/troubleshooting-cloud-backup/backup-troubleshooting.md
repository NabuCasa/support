---
zendesk:
  article_id: 26315342429597
  name: Backup - Troubleshooting
  position: 16
  labels: cloud
---

**Finding your encryption key** - If you ever lose your encryption key, it can be re-downloaded in Home Assistant’s [**Backup settings**](https://my.home-assistant.io/redirect/backup_config/) page. Navigate to the **Encryption key** section and either select to download your emergency kit or copy the key.

**Lost encryption key** - If you do not have the key, you will not be able to use your backups to restore your system. Nabu Casa does not store your encryption key and cannot provide support in decrypting backups if the key goes missing.

## Backup keeps failing


**Backup is not encrypted** - If you are using an Automation, Blueprint, or Add-on to backup your system on a scheduled basis, and encryption is not set, those backups will not be uploaded. Set a password on those backups if you want them uploaded to Home Assistant Cloud.

**Local storage is full** - If your local storage is full, or even nearing full, it may not be possible to generate the backup to upload online. Check if you have enough space in the [storage settings](https://my.home-assistant.io/redirect/storage/) to generate your backup.

## Related topics

- [About the backup emergency kit](https://www.home-assistant.io/more-info/backup-emergency-kit/)
- [Creating a backup in Home Assistant](https://www.home-assistant.io/common-tasks/general/#backups)
- [Nabu Casa account page](https://account.nabucasa.com/)
- [Downloading a backup](https://www.home-assistant.io/common-tasks/general/#downloading-a-backup-from-home-assistant-cloud)
- [Restoring your Home Assistant installation](https://www.home-assistant.io/common-tasks/general/#restoring-a-backup)