---
zendesk:
  article_id: 26474279202973
  name: Enabling remote access to Home Assistant
  position: 2
  labels: cloud
---

Remote access allows you to connect to your Home Assistant instance from outside of your home network. So that you can start the vacuum cleaner from your phone while you are on the train for your daily commute, for example.

By default, remote access is not enabled. To enable it, you can use one of the following methods:

- [Enabling remote access from within your network](#to-enable-remote-access-to-home-assistant)
- [Enabling remote access from outside of your network](#to-activate-remote-control-from-outside-your-network)
- [Using an automation to enable or disable remote connection](#using-an-automation-to-enable-and-disable-the-remote-connection)

## To enable remote access to Home Assistant while your inside the network

1. In Home Assistant, go to [**Settings** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/).
2. Make sure you are logged in to Home Assistant Cloud.
   - If you only just logged in for the first time, you might see a message _"Remote control is being prepared. We will notify you when it's ready."_.
   - In this case, wait a few minutes and refresh the page.
3. Under **Remote access**, enable the toggle.

    <img src="/static/img/cloud/ha-remote-access-enable-01.png" alt='Screenshot of the remote control option.' class='img-fluid'>

   - The first time you enable it, Home Assistant Cloud will have to generate and validate the certificate. This can take up to 60 seconds.
   - The link shown here is the link that you need to use when connecting remotely to your instance.

4. This URL is only accessible if your local instance is connected to the remote access server.

   - By default, Home Assistant maintains a connection if remote access is enabled.
   - When not connected, the remote URL will not be accessible.
   - If you want to be able to activate remote access from outside your network, enable **Allow external activation of remote access**.

   <img src="/static/img/cloud/ha-remote-access-activate-from-outside.png" alt='Screenshot of the option to enable remote access from outside the network.' class='img-fluid'>

5. Congratulations! you can now access your Home Assistant from outside your home network using a URL.

## To activate remote access from outside your network

If you are away from home and want to access your Home Assistant, but the remote access setting on your instance is disabled (as shown below), you can activate remote access from your account page.

<img src="/static/img/cloud/ha-remote-access-disabled.png" alt='Screenshot showing a disabled remote access option on the Home Assistant instance.' class='img-fluid'>

Activating remote control from outside your network only works if under [**Settings** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/) you previously enabled **Allow external activation of remote control** (see steps above under _To enable remote control_).

1. Log in to your [Nabu Casa account page](https://account.nabucasa.com).
   - If your instance is not connected, the status under **Remote access** is shown as **Not connected**.
2. To connect remotely, select **Connect**.

   <img src="/static/img/cloud/ha-remote-access-connect.png" alt='Screenshot of the remote access section with the Connect button.' class='img-fluid'>

3. You can now connect to your Home Assistant using the **Remote address** URL.

## Using an automation to enable and disable remote access

The cloud component exposes two services to enable and disable remote access as part of an automation:

- `cloud.remote_connect`
- `cloud.remote_disconnect`

That way you can turn on the remote connection only when you leave the house and need it.

## Related topics

- [About the remote access connection to Home Assistant](/hc/en-us/articles/26469707849629/)
- [Using remote access with a custom domain for Home Assistant](/hc/en-us/articles/26497540527517/)
