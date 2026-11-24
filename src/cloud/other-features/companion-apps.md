---
zendesk:
  article_id: 40244529243037
  name: How the companion apps use Home Assistant Cloud
  position: 60
  labels: cloud, companion app, mobile app, ios, android, remote access, webhook, location tracking, notifications, troubleshooting
---

To reach Home Assistant when you are away from home, the Home Assistant Companion apps for iOS and Android use your Home Assistant Cloud remote address. When you set the app to use Home Assistant Cloud, it gets the address from Home Assistant and keeps it up to date.

If your remote address changed and the new address opens in a browser, but the app still cannot connect, the app is still using the old address. To fix this, see [When the remote address changes](#when-the-remote-address-changes).

The app also uses Home Assistant Cloud to send location and sensor updates. For the app's own settings, refer to the [companion app documentation](https://companion.home-assistant.io).

## Reaching Home Assistant away from home

On your home network, the app connects to Home Assistant through its internal URL. Away from home, it connects through your remote address. To find your remote address, go to **Settings** > **Home Assistant Cloud**, and under **Cloud features**, select **Remote access**.

Set the app to connect through Home Assistant Cloud:

- **iOS**: In the connection settings, turn on **Home Assistant Cloud**. While it is on, the app does not use the **External URL**.
- **Android**: Under **Connection information**, open **Home Assistant URL** and select **Use Home Assistant Cloud**.

The app then takes the remote address from Home Assistant and follows it when it changes, so you do not need to type it.

The app gets the remote address only for Home Assistant users who can log in from outside the local network. If your user is set to local access only, the app cannot use Home Assistant Cloud.

## When the remote address changes

The app asks Home Assistant for the current remote address each time it opens, and stores it. After an address change, open the app once. This works on mobile data as well as on your home network.

If the app uses a typed address instead of Home Assistant Cloud, it keeps using the typed address. Update the address manually in **External URL** (iOS) or **Home Assistant URL** (Android), or turn on Home Assistant Cloud.

## Location and sensor updates

Away from your home network, the app sends location, zone, and sensor updates to a Home Assistant Cloud webhook. This webhook has its own address, separate from your remote address. Location tracking keeps working when the remote address is unreachable, and when remote access is turned off.

On your home network, the app sends updates to the internal URL. Without an active subscription, the app sends updates from outside your home network to the typed external address. For how the app collects location, refer to [Location](https://companion.home-assistant.io/docs/core/location).

## What works without a subscription

The app and push notifications work without a Home Assistant Cloud subscription. Notifications go through a push service run for the companion apps, with a daily limit per device. For details, refer to [Notifications](https://companion.home-assistant.io/docs/notifications/notifications-basic).

## If the app cannot connect away from home

Turn off Wi-Fi on your phone and open your remote address in the phone's browser.

- If the page loads and the app still cannot connect, the address stored in the app is the problem. Turn on Home Assistant Cloud in the app's server settings, or check the typed address.
- If the page does not load, check that remote access is turned on in Home Assistant under **Settings** > **Home Assistant Cloud**.
- If remote access is on and the page still does not load:

   1. Download the support package using the 3 dots in the upper right corner of the Home Assistant Cloud page ([**Settings** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/)).
   2. Use the **Submit a ticket** button at the top of this page and attach the downloaded file to your request.
   
For other connection problems, refer to [Networking troubleshooting](https://companion.home-assistant.io/docs/troubleshooting/networking).

## Getting help with the app

For app behavior outside Home Assistant Cloud, contact the app projects. Report issues on GitHub for [iOS](https://github.com/home-assistant/iOS/issues) or [Android](https://github.com/home-assistant/android/issues), or ask in the mobile app channels on the [Home Assistant Discord](https://www.home-assistant.io/join-chat).

## Related topics

- [About Home Assistant remote access](/hc/en-us/articles/26469707849629)
- [Enabling remote access to Home Assistant](/hc/en-us/articles/26474279202973)
- [Triggering an automation with a webhook trigger](/hc/en-us/articles/25619382358685)
