---
zendesk:
  article_id: 25619464018461
  name: About using WebRTC for camera streaming in Home Assistant
  position: 22
  labels: cloud
---

WebRTC provides better, more responsive camera streaming in Home Assistant while you are away from home. As part of your Home Assistant Cloud subscription, you get access to a relay server that allows you to use this technology more often, which gives you the opportunity to watch your cameras with the lowest latency possible, no matter where you are.

## What is it?

[WebRTC is a standard](https://webrtc.org/) that makes a peer-to-peer connection for lower-latency audio and video streaming. It is widely used across the internet for video calling. Home Assistant uses WebRTC to provide more responsive and less delayed camera streaming. When you’re away from home, WebRTC will try to find the fastest and most direct path between your Home Assistant instance and the camera you are trying to view.

## How is it different for Cloud and non-Cloud users?

TL;DR: Nabu Casa provides relay servers for Home Assistant Cloud subscribers to ensure a better experience when viewing camera streams.

All Home Assistant users can use WebRTC connections, even if they do not have a Home Assistant Cloud subscription. This is facilitated by the [Open Home Foundation](https://www.openhomefoundation.org/), which is hosting the negotiating network infrastructure ([STUN servers](https://en.wikipedia.org/wiki/STUN)). However, sometimes a direct connection between the client (like your browser or mobile app) and the camera is not possible. In these situations, the camera stream needs to be relayed by an external server. Your [Home Assistant Cloud](https://www.home-assistant.io/cloud/) subscription provides this relay server ([TURN server](https://en.wikipedia.org/wiki/Traversal_Using_Relays_around_NAT)), allowing you to connect to your cameras in the best possible way in more situations.

## Enabling the WebRTC relay server connection for improved camera streaming

WebRTC connections via our relay servers ([TURN server](https://en.wikipedia.org/wiki/Traversal_Using_Relays_around_NAT)) are enabled by default. If you've disabled it, follow these steps to enable it.

1. In Home Assistant, go to [Settings > Home Assistant Cloud](https://my.home-assistant.io/redirect/cloud/).
2. Under **WebRTC connections**, enable the toggle.

   <img src="/static/img/cloud/relay-toggle.png" alt="WebRTC toggle inside of Home Assistant">

## Disabling WebRTC relay server connection

 If, for some reason, you would like to turn this feature off and only use peer-to-peer connections without the relay functionality, this setting is available.

1. In Home Assistant, go to [Settings > Home Assistant Cloud](https://my.home-assistant.io/redirect/cloud/).
2. Under WebRTC connections, disable the toggle.
   - **Result**: If disabled, whenever a WebRTC connection is not possible, it will revert to using other less responsive video streaming methods.

## Related topics

- [Nabu Casa account log in page](https://account.nabucasa.com/)
- [Enabling Home Assistant Cloud in Home Assistant](/hc/en-us/articles/25649130769949)
- [Nabu Casa account pricing](https://www.nabucasa.com/pricing/)
- [WebRTC is a standard](https://webrtc.org/)
- [Open Home Foundation](https://www.openhomefoundation.org/)