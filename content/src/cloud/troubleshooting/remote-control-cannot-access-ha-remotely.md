---
zendesk:
  article_id: 26205112162461
  name: Remote control - Cannot access Home Assistant remotely
  position: 12
  labels: cloud
---

## Symptom

One of your Home Assistant users cannot access Home Assistant remotely.

## Cause

This indicates that this user is restricted to local access.

## Resolution

To allow people to access Home Assistant remotely, perform the following steps:

1. Go to [**Settings** > **People**](https://my.home-assistant.io/redirect/people/).
2. Select the user.
3. Enable **Allow person to login**.
4. Make sure the **Can only log in from the local network** option is disabled.

   <img src="/static/img/cloud/login_from_local_network_only.png" alt="Disable toggle on 'Can only login from local network option'">
