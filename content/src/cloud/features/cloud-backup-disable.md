---
zendesk:
  article_id: 26294322128669
  name: Disabling Home Assistant Cloud backup
  position: 2
  labels: cloud
---

## Prerequisites

- You have administrator rights in Home Assistant
- You have [enabled Home Assistant Cloud backups](/hc/en-us/articles/26294320337181/)

## To disable Home Assistant Cloud backup

If you do no longer want to upload your backups to Home Assistant Cloud, you can disable Cloud as a backup location.

1. In Home Assistant, go to  the [Settings > System > Backups > Backups settings](https://my.home-assistant.io/redirect/backup_config/).
2. Under **Locations**, turn off Home Assistant Cloud.
   - **Result**: Your next backup will not be uploaded to Home Assistant Cloud. Your last backup will remain available, unless you [delete it](/common-tasks/general/#deleting-obsolete-backups).

## Related topics

- [Enabling Home Assistant Cloud backups](/hc/en-us/articles/26294320337181/)
- [Home Assistant backup locations](https://www.home-assistant.io/common-tasks/general/#to-define-the-backup-location-for-automatic-backups)
- [Deleting a Home Assistant Cloud backup](https://support.nabucasa.com/hc/en-us/articles/26294412868381)
- [Nabu Casa account page](https://account.nabucasa.com/)