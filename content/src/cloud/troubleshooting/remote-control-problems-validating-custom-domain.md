---
zendesk:
  article_id: 25620466293533
  name: Remote control
  position: 9
  labels: cloud
---

## Problems validating custom domain

If you are using Cloudflare for DNS, make sure the records do not have proxy enabled for the DNS records.

You can use a tool like [dnschecker.org](https://dnschecker.org/) to see if the DNS records has the expected values.

## "User cannot use remote control"

### Symptom

One of your Home Assistant users cannot access Home Assistant remotely.

### Cause

This indicates that this user is restricted to local access.

### Resolution

To allow people to access Home Assistant remotely, perform the following steps:

1. Go to [**Settings** > **People**](https://my.home-assistant.io/redirect/people/).
2. Select the user.
3. Enable **Allow person to login**.
4. Make sure the **Can only log in from the local network** option is disabled.
   <img src="/static/img/cloud/login_from_local_network_only.png" alt="Disable toggle on 'Can only login from local network option'">
