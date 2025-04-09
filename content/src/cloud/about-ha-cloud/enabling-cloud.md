---
zendesk:
  article_id: 25649130769949
  name: Enabling Home Assistant Cloud
  position: 2
  labels: cloud
---

Before you can use the [features provided by Home Assistant Cloud](/hc/en-us/articles/26260474250269/), you have to enable Home Assistant Cloud in Home Assistant.

## To enable Home Assistant Cloud

1. In Home Assistant, go to [**Settings** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/).

   <img src="/static/img/cloud/ha-settings-panel.png" alt="Home Assistant Settings panel">

   - **Troubleshooting**: If you do not see **Home Assistant Cloud** under **Settings**, you might have removed the [`default_config`](https://www.home-assistant.io/integrations/default_config/) integration from your `configuration.yaml`.
   Add `cloud:` to the `configuration.yaml` file.

    ```yml
    # configuration.yaml entry to enable the cloud integration
    cloud:
    ```

2. If you already have an account, sign in.
   - The account name is case-sensitive.
3. If you do not have an account yet, start a trial:
   - Select **Start your free 1 month trial**.
   - To create an account, enter **Email address** and **Password**.
   - Select **Start trial**.
4. Under [**Settings** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/), you should now see that you are connected to Home Assistant Cloud.

   <img src="/static/img/cloud/ha_cloud_connected.png" alt="Home Assistant Cloud connected">

5. That's it. You are ready to go with Home Assistant Cloud.

## Related topics

- [Nabu Casa account pricing](https://www.nabucasa.com/pricing/)
- [Nabu Casa account log in page](https://account.nabucasa.com/)
- [Features provided by Home Assistant Cloud](/hc/en-us/articles/26260474250269/)