---
zendesk:
  article_id: 25619338169501
  name: All about the Home Assistant Cloud backup
  position: 2
  labels: cloud
---

If your backup is smaller than 5GB in size, you have the option to store an encrypted backup on Home Assistant Cloud.

## About Home Assistant Cloud backup

The Home Assistant Cloud backup option is available if you have a Home Assistant Cloud subscription. However, your system needs to meet the [prerequisites](#prerequisites) and you need to [enable the Cloud backup](#to-enable-automated-backups).

### Cloud as your off-site backup option

Home Assistant Cloud Backups stores your latest [Home Assistant backup](https://www.home-assistant.io/common-tasks/general/#backups), helping you to secure your system from hardware failures, data corruption, and unexpected disasters. This backup can be downloaded from your [Nabu Casa account](https://account.nabucasa.com/) page and help restore Home Assistant to a working state. Use Home Assistant Cloud as part of your [3-2-1 backup strategy](https://www.home-assistant.io/blog/2025/01/03/3-2-1-backup/) and minimize your smart home downtime.

### Encrypted and private

To maintain the security and privacy of your smart home, the backup is locked via [encryption](https://www.home-assistant.io/more-info/backup-emergency-kit/), and Nabu Casa cannot access your data.

For more on Home Assistant backups, read the [full documentation](https://www.home-assistant.io/common-tasks/general/#backups).

## Prerequisites

A backup will only be uploaded to Home Assistant Cloud if the following requirements are met:

- You are running Home Assistant 2025.1 or later
- Automatic backups have been enabled
- The backup is under 5GB in size

## To setup a Home Assistant Cloud backup

**_Note_**: Home Assistant Cloud will only store one backup at a time on Home Assistant Cloud. It will always store your most recently made encrypted backup.

<div class='videoWrapper'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/nSSkMVBqChM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

1. To setup a Home Assistant Cloud backup, follow the steps on [setting up an automatic backup](/common-tasks/general/#setting-up-an-automatic-backup-process).
2. In the step on defining the backup location, enable **Home Assistant Cloud**.
   - **Troubleshooting**: If you do not see **Home Assistant Cloud** as an option in the list, you do not have [Home Assistant Cloud enabled](/hc/en-us/articles/25649130769949).

## Downloading a Home Assistant Cloud backup

To download a backup from Home Assistant Cloud, follow the steps on [downloading a backup](https://www.home-assistant.io/common-tasks/general/#downloading-a-backup-from-home-assistant-cloud).

- Note that only your most recent backup is available on Home Assistant Cloud.

## Restoring Home Assistant from backup

If you are downloading the backup in order to restore your Home Assistant instance from it, follow the steps on [restoring your Home Assistant installation](https://www.home-assistant.io/common-tasks/general/#restoring-a-backup).

## About encryption

Encryption is the process of locking files to prevent access without a key, in this case an encryption key made up of 28 characters. We strongly believe if you’re putting data on any cloud, it should be encrypted for your security and privacy. Home Assistant Cloud is the privacy-focused cloud. This is why it will only accept encrypted backups and why we don’t store your encryption key.

**_Note_**: Neither your Home Assistant account password nor your Nabu Casa Account password acts as your Encryption key. It is a distinct password that must be stored somewhere safe alongside those passwords.

**Finding your encryption key** - If you ever lose your encryption key, it can be re-downloaded in Home Assistant’s [Backups settings page](https://my.home-assistant.io/redirect/backup_config/). Navigate to the “Encryption key” section and either select to download your emergency kit or copy the key.

**Lost encryption key** - If you do not have the key, you will not be able to use your backups to restore your system. Nabu Casa does not store your encryption key and cannot provide support in decrypting backups if the key goes missing.

## Backup keeps failing

**Backup is too large** - Check that your backup is under 5 gigabytes (GB) in size. If it is too large to upload, you should receive a repair message. You can reduce the size of your backup by going to the Home Assistant [Backups settings page](https://my.home-assistant.io/redirect/backup_config/), and removing large folders (the media and share folders can sometimes be quite large) or add-ons.

**Backup is not encrypted** - If you are using an Automation, Blueprint, or Add-on to backup your system on a scheduled basis, and encryption is not set, those backups will not be uploaded. Set a password on those backups if you want them uploaded to Home Assistant Cloud.

**Local storage is full** - If your local storage is full, or even nearing full, it may not be possible to generate the backup to upload online. Check if you have enough space in the [storage settings](https://my.home-assistant.io/redirect/storage/) to generate your backup.

## Security

Nabu Casa uses Cloudflare as its storage provider for Home Assistant Cloud Backups. It specifically uses Cloudflare’s West Europe servers due to high privacy standards compared to other regions. Home Assistant will only upload encrypted backups to Home Assistant Cloud, which are secured with AES-128 encryption. Importantly, Nabu Casa does not have access to the encryption key. This ensures that your smart home data remains private and inaccessible to Nabu Casa - or anyone without the key - while stored away from your Home Assistant system.

## Related topics

- [About the backup emergency kit](https://www.home-assistant.io/more-info/backup-emergency-kit/)
- [Creating a backup in Home Assistant](https://www.home-assistant.io/common-tasks/general/#backups)
- [Nabu Casa account page](https://account.nabucasa.com/)
- [Downloading a backup](https://www.home-assistant.io/common-tasks/general/#downloading-a-backup-from-home-assistant-cloud)
- [Restoring your Home Assistant installation](https://www.home-assistant.io/common-tasks/general/#restoring-a-backup)