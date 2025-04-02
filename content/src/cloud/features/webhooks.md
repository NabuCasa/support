---
zendesk:
  article_id: 25619382358685
  name: Webhooks
  position: 20
  labels: cloud
---

Webhooks allow you to send data to your Home Assistant instance via Home Assistant Cloud. You can use these webhooks for example to trigger automations.

## Triggering an automation with a webhook trigger

This tutorial will show you the following:

1. How to manually create a webhook.
1. How to use this webhook in an automation.
1. We will be able to trigger this automation from anywhere in the world and use the data in the trigger.

To create a webhook trigger and use it in an automation, follow these steps:

1. To start creating a new automation, go to [**Settings** > **Automations & scenes**](https://my.home-assistant.io/redirect/automations/).

   - In the bottom right corner, select **Create automation**, then, select **Create new automation**.

1. Under **Trigger**, select **Webhook**.

   - Under **Webhook ID**, leave the ID as is.
   - Select the cogwheel, and make sure the **Only accessible from the local network** is cleared (de-selected).
     - This means your webhook is now accessible via cloud.
       <img src="/static/img/cloud/webhooks-01.png" alt="Screenshot of the webhook automation trigger">

1. Under **Action**, in the **Search action** field, type "li" and select **Light Turn On** from the list.
   - In the bottom right corner, select **Save**.
   - Your automation is now created.
1. Go to [**Settings** > **Cloud**](https://my.home-assistant.io/redirect/cloud/) and scroll to the webhooks card.
   - You will now see your newly created webhook.
     <img src="/static/img/cloud/webhooks-02.png" alt="Screenshot of the webhooks card in the Cloud panel" style="max-width: 500px;">
1. Next to the webhook, select **Manage**.

   - A dialog opens, showing you a unique URL. You can use to this URL to trigger your automation.
   - If you're on a Linux or Mac, you can test it out with the following commands:

   ```bash
   curl -X POST <the webhook url>
   ```

   - Form data or JSON data sent to the webhook endpoint will be available to templates in your automation as `trigger.data` or `trigger.json`.

   <img src="/static/img/cloud/webhooks-03.png" alt="Screenshot of the webhook info dialog">

### Related information

For more information about webhook triggers, refer to the [documentation](https://www.home-assistant.io/docs/automation/trigger/#webhook-trigger).
