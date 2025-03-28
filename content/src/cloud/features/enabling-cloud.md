---
zendesk:
  article_id: 25649130769949
  name: Enabling Home Assistant Cloud
  position: 0
  labels: cloud
---

1. In Home Assistant, go to [**Settings** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/).
   <img src="/static/img/cloud/ha-settings-panel.png" alt="Home Assistant Settings panel">

      <div class="alert alert-primary">

   If you do not see **Home Assistant Cloud** under **Settings**, you might have removed the [`default_config`](https://www.home-assistant.io/integrations/default_config/) integration from your `configuration.yaml`.
   Add `cloud:` to the `configuration.yaml` file.

   ```yml
   # configuration.yaml entry to enable the cloud integration
   cloud:
   ```

   </div>

1. If you already have an account, sign in.
   - The account name is case-sensitive.
1. If you do not have an account yet, start a trial:
   - Select **Start your free 1 month trial**.
   - To create an account, enter **Email address** and **Password**.
   - Select **Start trial**.
1. Under [**Settings** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/), you should now see that you are connected to Home Assistant Cloud.

   <img src="/static/img/cloud/ha_cloud_connected.png" alt="Home Assistant Cloud connected">

1. That's it. You are ready to go with Home Assistant Cloud.
