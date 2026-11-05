---
zendesk:
  article_id: 26294322128669
  name: Disabling the off-site backup
  position: 50
  labels: cloud, link
---

## Prerequisites

- You have administrator rights in Home Assistant
- You have [enabled the off-site backup](/hc/en-us/articles/26294320337181/)
- You're logged in to Home Assistant Link

## To disable the off-site backup

If you no longer want to upload your backups off-site, you can turn off the **Home Assistant Cloud** backup location.

1. In Home Assistant, go to  the [**Settings** > **System** > **Backups** > **Backup settings**](https://my.home-assistant.io/redirect/backup_config/).
2. Under **Locations**, turn off **Home Assistant Cloud**.
   - **Result**: Your next backup will not be uploaded off-site. Your last backup will remain available, unless you [delete it](https://www.home-assistant.io/common-tasks/general/#deleting-obsolete-backups).

## Related topics

- [Enabling the off-site backup](/hc/en-us/articles/26294320337181/)
- [Home Assistant backup locations](https://www.home-assistant.io/common-tasks/general/#to-define-the-backup-location-for-automatic-backups)
- [Deleting the off-site backup](https://support.nabucasa.com/hc/en-us/articles/26294412868381)
- [Nabu Casa account page](https://account.nabucasa.com/)
