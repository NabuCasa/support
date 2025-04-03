---
zendesk:
  article_id: 26323056475293
  name: Backup is not encrypted
  position: 5
  labels: cloud
---

## Symptom

You have [Home Assistant Cloud backup enabled](/hc/en-us/articles/26294320337181-Enabling-a-cloud-backup) in Home Assistant and you're now seeing a notification **Backup is not encrypted**.

## Cause

If you are using an automation, blueprint, or [add-on](https://www.home-assistant.io/integrations/?search=backup) to create backups of your Home Assistant on a scheduled basis, and encryption is not set, those backups will not be uploaded to Home Assistant Cloud. This is because only encrypted backups can be stored on Home Assistant Cloud. For more information, refer to the documentation [about Home Assistant Cloud backup](/hc/en-us/articles/25619338169501-About-the-Home-Assistant-Cloud-backup).

## Resolution

- Set a password on those backups if you want them uploaded to Home Assistant Cloud.
- If you do not want to use encryption, remove Home Assistant Cloud as a [backup location](https://www.home-assistant.io/common-tasks/general/#defining-backup-locations).

## Related topics

- [About Home Assistant Cloud backup](/hc/en-us/articles/25619338169501-About-the-Home-Assistant-Cloud-backup)
- [About the backup emergency kit](https://www.home-assistant.io/more-info/backup-emergency-kit/)
- [Creating a backup in Home Assistant](https://www.home-assistant.io/common-tasks/general/#backups)
- [Backup location](https://www.home-assistant.io/common-tasks/general/#defining-backup-locations)
- [Selection of add-ons that can be used for backups](https://www.home-assistant.io/integrations/?search=backup) (This list is not complete, it could be any add-on that has access to backups)
