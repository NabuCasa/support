---
zendesk:
  article_id: 26323056475293
  name: Backup is not encrypted
  position: 5
  labels: cloud
---

## Symptom

In Home Assistant, you're seeing a notification **Backup is not encrypted**.

## Cause

If you are using an automation, blueprint, or add-on to create backups of your system on a scheduled basis, and encryption is not set, those backups will not be uploaded to Home Assistant Cloud.

## Remedy

Set a password on those backups if you want them uploaded to Home Assistant Cloud.

## Related topics

- [About the backup emergency kit](https://www.home-assistant.io/more-info/backup-emergency-kit/)
- [Creating a backup in Home Assistant](https://www.home-assistant.io/common-tasks/general/#backups)
- [Nabu Casa account page](https://account.nabucasa.com/)
- [Downloading a backup](https://www.home-assistant.io/common-tasks/general/#downloading-a-backup-from-home-assistant-cloud)
- [Restoring your Home Assistant installation](https://www.home-assistant.io/common-tasks/general/#restoring-a-backup)