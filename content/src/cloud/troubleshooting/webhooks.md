---
zendesk:
  article_id: 25620473014685
  name: Webhooks
  position: 5
  labels: cloud
---

## Webhook Response Codes

Calling a webhook URL can return various status codes for different problems. Below is a list of the most common codes and reasons.

| Code | Description                                                                                                                                                                                                         |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 404  | The webhook URL you tried is not valid. Visit the [Cloud panel](https://my.home-assistant.io/redirect/cloud/) to verify the URL you are using.                                                                      |
| 405  | The method (GET/POST/etc.) used for the webhook is not allowed. Check the trigger configuration of your [automation](https://my.home-assistant.io/redirect/automations/) to make sure you are calling it correctly. |
| 503  | Your Home Assistant instance is not connected properly to our services. Check your [system health section](https://my.home-assistant.io/redirect/system_health/).                                                   |
