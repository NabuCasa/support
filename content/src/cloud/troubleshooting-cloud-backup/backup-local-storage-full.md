---
zendesk:
  article_id: 26323082445085
  name: Backup - Local storage is full
  position: 6
  labels: cloud
---

## Symptom

You have [Home Assistant Cloud backup enabled](/hc/en-us/articles/26294320337181-Enabling-a-cloud-backup) in Home Assistant. You see a message stating that the **Local storage is full**.

## Cause

If your local storage is full, or even nearing full, it may not be possible to generate the backup because there is not enough space for that backup.

## Resolution

- To see how much space you have left, check the [storage settings](https://my.home-assistant.io/redirect/storage/).
- Follow the steps on freeing disk space](https://www.home-assistant.io/more-info/free-space) on your Home Assistant system.

## Related topics

- [Freeing disk space](https://www.home-assistant.io/more-info/free-space)
- [Creating a backup in Home Assistant](https://www.home-assistant.io/common-tasks/general/#backups)
- [Network storage](https://www.home-assistant.io/common-tasks/os/#network-storage)
