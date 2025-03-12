---
zendesk:
  article_id: 25619338169501
  name: Cloud Backups
  position: 2
  labels: cloud
---

Home Assistant Cloud Backups stores your latest [Home Assistant backup](https://www.home-assistant.io/common-tasks/general/#backups), helping you to secure your system from hardware failures, data corruption, and unexpected disasters. This backup can be downloaded from your [Nabu Casa account](https://account.nabucasa.com/) page and help restore Home Assistant to a working state. To maintain the security and privacy of your smart home, the backup is locked via [encryption](https://www.home-assistant.io/more-info/backup-emergency-kit/), and Nabu Casa cannot access your data. Use Home Assistant Cloud as part of your [3-2-1 backup strategy](https://www.home-assistant.io/blog/2025/01/03/3-2-1-backup/) and minimize your smart home downtime.

For more on Home Assistant backups, read the [full documentation](https://www.home-assistant.io/common-tasks/general/#backups).

## Backup requirements

A backup will only be uploaded to Home Assistant Cloud if the following requirements are met:

- You are running Home Assistant 2025.1 or later
- Automatic backups have been enabled
- The backup is under 5GB in size

## To enable automated backups

<div class='videoWrapper'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/nSSkMVBqChM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

1. **Update to the latest version**: You’ll need to [update](https://www.home-assistant.io/common-tasks/os/#updating-home-assistant) to Home Assistant 2025.1 or above to use automated Cloud backup.
2. **Navigate to Backups**: Go to [Settings > System > Backups](https://my.home-assistant.io/redirect/backup/) in your Home Assistant installation, then select “Set up backups” and select next.
3. **Save Your Encryption Key**: Copy and save the provided encryption key (preferably in a password manager) or download the “Emergency kit” and store it somewhere safe, as it’s required to access your backups.
4. **Use Recommended Settings**: These settings will make a backup daily, storing three backups locally, and automatically upload your most recent backup to all integrated locations. As a Home Assistant Cloud user, your most recent backup will be uploaded automatically.

   **_Note_**: Home Assistant Cloud will only store one backup at a time and will always store your most recently made encrypted backup.

5. **Complete Your First Backup**: Once settings are chosen, the creation of your first backup starts immediately.

## Disable Home Assistant Cloud backups

If you do not want to upload your backups to Home Assistant Cloud. Navigate to the Home Assistant [Backups settings page](https://my.home-assistant.io/redirect/backup_config/), and under “Locations” turn off Home Assistant Cloud.

## Retrieving automated backups

Your Home Assistant backup can be downloaded from the [Nabu Casa account page](https://account.nabucasa.com/) and can help restore your Home Assistant system. On the account page, scroll to the section titled “Stored Files” and select the download button. You can [restore your Home Assistant installation](https://www.home-assistant.io/common-tasks/general/#restoring-a-backup) with your backup file and encryption key. Though your Home Assistant system may contain multiple recent backups, only one backup is stored on Home Assistant Cloud, which is your most recently made backup.

## Encryption

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
