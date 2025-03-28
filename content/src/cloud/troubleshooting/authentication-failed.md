---
zendesk:
  article_id: 25836973464733
  name: Can't log into Cloud. "Authentication failed", or "Unexpected error - software token MFA"
  position: 8
  labels: cloud, troubleshooting, mfa
---

### Symptom

You are in Home Assistant and when trying to log into Home Assistant Cloud, you are getting a message saying  _"Authentication failed"_, with something like _"Unexpected error - software token MFA"_. You can't log into Home Assistant Cloud.

### Cause

_"Authentication failed"_, with _"Unexpected error - software token MFA"_ indicate that the software version on your Home Assistant is too old to support MFA for Home Assistant Cloud.

### Resolution

1. In Home Assistant, check if you have Home Assistant version 2025.1.0 or later
   - Open [**Settings** > **About**](https://my.home-assistant.io/redirect/info/).
2. If you're version is older, choose one of the following options:
   - **Option 1**: [Update](https://www.home-assistant.io/common-tasks/os/#updating-home-assistant) Home Assistant.
   - **Option 2**: [Disable MFA](https://support.nabucasa.com/hc/en-us/articles/25807025727005) for Home Assistant Cloud.

## Related topics

- [Disable MFA](https://support.nabucasa.com/hc/en-us/articles/25807025727005)
- [Update Home Assistant](https://www.home-assistant.io/common-tasks/os/#updating-home-assistant)