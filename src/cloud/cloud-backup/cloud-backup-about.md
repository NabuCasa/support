---
zendesk:
  article_id: 25619338169501
  name: About the off-site backup
  position: 10
  labels: cloud, link
---

You have the option to store an encrypted [Home Assistant backup](https://www.home-assistant.io/common-tasks/general/#backups) in off-site storage hosted by Nabu Casa.

The off-site backup is included in your Home Assistant Link subscription, at no additional cost.

- If the off-site backup is enabled in Home Assistant, 1 encrypted backup file is stored off-site.
- Only the latest backup is stored. Older versions will be deleted automatically.
- The backup file must be smaller than 5GB in size. Larger files cannot be stored off-site.
  - If the backup file is larger, you’ll be [notified to repair](/hc/en-us/articles/26323079049245-Backup-is-too-large).
- The off-site backup is always [encrypted](#encrypted-and-private).
  - The key required to decrypt the backup is stored in the [backup emergency kit](https://www.home-assistant.io/more-info/backup-emergency-kit/).
- Nabu Casa can not access your data or the encryption key required to decrypt your backup.

## Why keep an off-site backup?

You can use the off-site backup as part of your [3-2-1 backup strategy](https://www.home-assistant.io/blog/2025/01/03/3-2-1-backup/) to minimize your smart home downtime.

### A backup that survives your hardware

Storing your latest [Home Assistant backup](https://www.home-assistant.io/common-tasks/general/#backups) off-site allows you to recover your system from hardware failures, data corruption, and unexpected disasters. Because it is kept away from your home, it is still available even if your local system is lost.

### Encrypted and private

Home Assistant Link is built with privacy first. Nabu Casa uses Cloudflare as its storage provider for off-site backups. It specifically uses Cloudflare’s West Europe servers due to high privacy standards compared to other regions.

To maintain the security and privacy of your smart home, off-site backups are always encrypted using [AES-128](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard). Encryption is a method of converting data into a coded format so that it can only be read by someone who has the encryption key. This ensures that your data about your home remains private. So even if someone else had a copy of your Home Assistant backup, it is unreadable for them without the encryption key.

Nabu Casa does not have access to the [encryption key](https://www.home-assistant.io/more-info/backup-emergency-kit/).

**_Note_**: Neither your Home Assistant account password nor your Nabu Casa Account password acts as your encryption key. It is a distinct password that must be stored somewhere safe alongside those passwords.

## Related topics

- [About the backup emergency kit](https://www.home-assistant.io/more-info/backup-emergency-kit/)
- [Creating a backup in Home Assistant](https://www.home-assistant.io/common-tasks/general/#backups)
- [Nabu Casa account page](https://account.nabucasa.com/)
- [Restoring your Home Assistant installation](https://www.home-assistant.io/common-tasks/general/#restoring-a-backup)
- [Troubleshooting: backup is too large](/hc/en-us/articles/26323079049245)
- [Troubleshooting: can't find the encryption key](/hc/en-us/articles/26323093151901)
