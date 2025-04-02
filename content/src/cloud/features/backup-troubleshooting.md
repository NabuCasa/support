---
zendesk:
  article_id:
  name: Backup - Troubleshooting
  position: 16
  labels: cloud
---

**Finding your encryption key** - If you ever lose your encryption key, it can be re-downloaded in Home Assistant’s [Backups settings page](https://my.home-assistant.io/redirect/backup_config/). Navigate to the **Encryption key** section and either select to download your emergency kit or copy the key.

**Lost encryption key** - If you do not have the key, you will not be able to use your backups to restore your system. Nabu Casa does not store your encryption key and cannot provide support in decrypting backups if the key goes missing.

## Backup keeps failing

**Backup is too large** - Check that your backup is under 5 gigabytes (GB) in size. If it is too large to upload, you should receive a repair message. You can reduce the size of your backup by going to the Home Assistant [Backups settings page](https://my.home-assistant.io/redirect/backup_config/), and removing large folders (the media and share folders can sometimes be quite large) or add-ons.

**Backup is not encrypted** - If you are using an Automation, Blueprint, or Add-on to backup your system on a scheduled basis, and encryption is not set, those backups will not be uploaded. Set a password on those backups if you want them uploaded to Home Assistant Cloud.

**Local storage is full** - If your local storage is full, or even nearing full, it may not be possible to generate the backup to upload online. Check if you have enough space in the [storage settings](https://my.home-assistant.io/redirect/storage/) to generate your backup.

## Related topics

- [About the backup emergency kit](https://www.home-assistant.io/more-info/backup-emergency-kit/)
- [Creating a backup in Home Assistant](https://www.home-assistant.io/common-tasks/general/#backups)
- [Nabu Casa account page](https://account.nabucasa.com/)
- [Downloading a backup](https://www.home-assistant.io/common-tasks/general/#downloading-a-backup-from-home-assistant-cloud)
- [Restoring your Home Assistant installation](https://www.home-assistant.io/common-tasks/general/#restoring-a-backup)