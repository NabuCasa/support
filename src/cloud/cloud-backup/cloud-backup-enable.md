---
zendesk:
  article_id: 26294320337181
  name: Enabling the off-site backup
  position: 20
  labels: cloud, link
---

If your backup is smaller than 5GB in size, you have the option to store an encrypted backup off-site with Home Assistant Link.

## Prerequisites

A backup will only be uploaded off-site if the following requirements are met:

- You are running Home Assistant 2025.1 or later
- Automatic backups have been enabled
- The backup is under 5GB in size

## To set up the off-site backup

**_Note_**: Only one backup is stored off-site at a time. It is always your most recently made encrypted backup.

<div class='videoWrapper'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/nSSkMVBqChM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

1. To set up the off-site backup, follow the steps on [setting up an automatic backup](https://www.home-assistant.io/common-tasks/general/#setting-up-an-automatic-backup-process).
2. In the step on defining the backup location, enable **Home Assistant Cloud**.
   - **Troubleshooting**: If you do not see **Home Assistant Cloud** as an option in the list, you do not have [Home Assistant Link enabled](/hc/en-us/articles/25649130769949).

## Related topics

- [About the off-site backup](/hc/en-us/articles/25619338169501)
- [Creating a backup in Home Assistant](https://www.home-assistant.io/common-tasks/general/#backups)
- [Nabu Casa account page](https://account.nabucasa.com/)
- [Downloading a backup](/hc/en-us/articles/26294370569245/)
