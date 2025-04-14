---
zendesk:
  article_id: 26294320337181
  name: Enabling a cloud backup
  position: 11
  labels: cloud
---

If your backup is smaller than 5GB in size, you have the option to store an encrypted backup on Home Assistant Cloud.

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

1. To setup a Home Assistant Cloud backup, follow the steps on [setting up an automatic backup](https://www.home-assistant.io/common-tasks/general/#setting-up-an-automatic-backup-process).
2. In the step on defining the backup location, enable **Home Assistant Cloud**.
   - **Troubleshooting**: If you do not see **Home Assistant Cloud** as an option in the list, you do not have [Home Assistant Cloud enabled](/hc/en-us/articles/25649130769949).

## Related topics

- [About Home Assistant Cloud backup](/hc/en-us/articles/25619338169501-About-the-Home-Assistant-Cloud-backup)
- [Creating a backup in Home Assistant](https://www.home-assistant.io/common-tasks/general/#backups)
- [Nabu Casa account page](https://account.nabucasa.com/)
- [Downloading a backup](/hc/en-us/articles/26294370569245/)
