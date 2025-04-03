---
zendesk:
  article_id: 26323093151901
  name: Backup - Can't find encryption key
  position: 16
  labels: cloud
---

## Symptom

You have [Home Assistant Cloud backup enabled](/hc/en-us/articles/26294320337181-Enabling-a-cloud-backup) in Home Assistant and you now want to restore your Home Assistant using the backup you have stored on Home Assistant Cloud.

## Resolution

**Case 1: You can't find your encryption key, but you still have access to Home Assistant**:

- Follow these steps to [retrieve the encryption key](https://www.home-assistant.io/more-info/backup-emergency-kit/#i-lost-my-backup-encryption-key---how-can-i-retrieve-it) for your Home Assistant Cloud backup.

**Case 2: You can't find your encryption key and you do not have access to Home Assistant**:

- You will not be able to use your backups stored on Home Assistant Cloud or on Home Assistant to restore your system. Nabu Casa does not store your encryption key and cannot provide support in decrypting backups if the key goes missing.
- If you have an unencrypted backup stored on a storage medium outside your Home Assistant system, you can use that to restore your system.

## Related topics

- [About the backup emergency kit](https://www.home-assistant.io/more-info/backup-emergency-kit/)
- [Retrieve the encryption key](https://www.home-assistant.io/more-info/backup-emergency-kit/#i-lost-my-backup-encryption-key---how-can-i-retrieve-it)
- [Creating a backup in Home Assistant](https://www.home-assistant.io/common-tasks/general/#backups)
- [Downloading a backup](https://www.home-assistant.io/common-tasks/general/#downloading-a-backup-from-home-assistant-cloud)
- [Restoring your Home Assistant installation](https://www.home-assistant.io/common-tasks/general/#restoring-a-backup)