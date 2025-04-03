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

If you are using an automation, blueprint, or [add-on](https://www.home-assistant.io/integrations/?search=backup) to create backups of your system on a scheduled basis, and encryption is not set, those backups will not be uploaded to Home Assistant Cloud.

## Resolution

- Set a password on those backups if you want them uploaded to Home Assistant Cloud.
- If you do not want to use encryption, remove Home Assistant Cloud as a [backup location](https://www.home-assistant.io/common-tasks/general/#defining-backup-locations).

## Related topics

- [About the backup emergency kit](https://www.home-assistant.io/more-info/backup-emergency-kit/)
- [Creating a backup in Home Assistant](https://www.home-assistant.io/common-tasks/general/#backups)
- [Backup location](https://www.home-assistant.io/common-tasks/general/#defining-backup-locations)
- [Selection of add-ons that can be used for backups](https://www.home-assistant.io/integrations/?search=backup) (This list is not complete, it could be any add-on that has access to backups)
