---
zendesk:
  article_id: 25619338169501
  name: About the Home Assistant Cloud backup
  position: 10
  labels: cloud
---

You have the option to store an encrypted [Home Assistant backup](https://www.home-assistant.io/common-tasks/general/#backups) on Home Assistant Cloud.

The Home Assistant Cloud backup option is available if you have a Home Assistant Cloud subscription, at no additional cost.

- If Home Assistant Cloud backup is enabled in Home Assistant, 1 encrypted backup file is stored on Home Assistant Cloud
- Home Assistant Cloud will only store the latest backup. Older versions will be deleted automatically.
- The backup file must be smaller than 5GB in size. Larger files cannot be stored on Home Assistant Cloud.
  - If the backup file is larger, you’ll be notified to repair.
  - In this case, check the steps on [preparing a backup](https://www.home-assistant.io/common-tasks/general/#preparing-for-a-backup) to learn how to reduce the size of a backup.
- The backup on Home Assistant Cloud is always encrypted.
  - The key required to decrypt the backup is stored in the [backup emergency kit](https://www.home-assistant.io/more-info/backup-emergency-kit/)
  - If you ever lose your encryption key, it can be re-downloaded in Home Assistant’s [Backups settings page](https://my.home-assistant.io/redirect/backup_config/).
  - If you do not have the key and don't have access to your Home Assistant, you will not be able to use your backups to restore your system. Nabu Casa does not store your encryption key and cannot provide support in decrypting backups if the key goes missing.
- Nabu Casa can not access your data.

## Why store a backup in Home Assistant Cloud?

You can use Home Assistant Cloud as part of your [3-2-1 backup strategy](https://www.home-assistant.io/blog/2025/01/03/3-2-1-backup/) to minimize your smart home downtime.

### Cloud as your off-site backup location

Storing your latest [Home Assistant backup](https://www.home-assistant.io/common-tasks/general/#backups) on Cloud allows you to recover your system from hardware failures, data corruption, and unexpected disasters affecting your local system. As it is stored outside your system, and off-site, this Home Assistant backup will still be available even if your local Home Assistant system is affected.

### Encrypted and private

Home Assistant Cloud is the privacy-focused cloud. Nabu Casa uses Cloudflare as its storage provider for Home Assistant Cloud Backups. It specifically uses Cloudflare’s West Europe servers due to high privacy standards compared to other regions. To maintain the security and privacy of your smart home, backups stored on Home Assistant Cloud are always encrypted using [AES-128](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard). Encryption is a method of converting data into a coded format so that it can only be read by someone who has the encryption key. This ensures that your data about your home remains private. So even if someone else had a copy of your Home Assistant backup, it is unreadable for them without the encryption key. Nabu Casa does not have access to the [encryption key](ttps://www.home-assistant.io/more-info/backup-emergency-kit/).

**_Note_**: Neither your Home Assistant account password nor your Nabu Casa Account password acts as your encryption key. It is a distinct password that must be stored somewhere safe alongside those passwords.

## Related topics

- [About the backup emergency kit](https://www.home-assistant.io/more-info/backup-emergency-kit/)
- [Creating a backup in Home Assistant](https://www.home-assistant.io/common-tasks/general/#backups)
- [Nabu Casa account page](https://account.nabucasa.com/)
- [Downloading a backup](https://www.home-assistant.io/common-tasks/general/#downloading-a-backup-from-home-assistant-cloud)
- [Restoring your Home Assistant installation](https://www.home-assistant.io/common-tasks/general/#restoring-a-backup)