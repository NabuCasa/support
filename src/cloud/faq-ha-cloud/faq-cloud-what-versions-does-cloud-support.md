---
zendesk:
  article_id: 34227199207965
  name: What versions of Home Assistant does Cloud support?
  position: 60
  labels: cloud
---

Home Assistant Cloud is an active service that evolves alongside Home Assistant. To ensure a reliable experience, certain Cloud features require a minimum version of Home Assistant.

## General version policy

We recommend always running a recent version of Home Assistant to get the best experience with Home Assistant Cloud. As a general guideline, Cloud services are designed to be compatible with Home Assistant versions released within the last two years.

Older versions may continue to work, but if issues arise on versions outside this window, updating Home Assistant is the recommended first step.

## Remote access and voice services

Remote access, voice assistants (Alexa, Google Assistant), and Cloud speech-to-text and text-to-speech require a version of Home Assistant released within the last two years. As Cloud infrastructure is updated over time, older versions may lose the ability to connect. If you experience issues with remote access or voice services, updating to a recent version of Home Assistant is the recommended first step.

## Other feature requirements

Some Cloud features have specific minimum version requirements:

| Feature | Minimum version |
|---------|----------------|
| Remote access with a custom domain | Home Assistant 2023.9 |
| Cloud backup | Home Assistant 2025.1 |
| Multi-factor authentication (Cloud account) | Home Assistant 2025.1 |

Running a version older than the listed minimum may result in that feature not functioning correctly.

## Why version requirements exist

Home Assistant Cloud connects your Home Assistant instance to cloud infrastructure maintained by Nabu Casa. When that infrastructure is updated to improve security, performance, or functionality, older versions of Home Assistant may no longer be able to communicate with it correctly.

Unlike traditional software that continues to work as-is once installed, Cloud is a service that both sides (your Home Assistant instance and our servers) need to speak the same language. Keeping Home Assistant up to date ensures this compatibility.

## How to update Home Assistant

1. Go to **Settings** > **System** > **Updates**.
2. If an update is available, it will be shown there.
3. Before updating, make sure you have a recent backup.

For more information, refer to the [Home Assistant update documentation](https://www.home-assistant.io/common-tasks/general/#updating-home-assistant).

## Related topics

- [List of Home Assistant Cloud features](/hc/en-us/articles/26260474250269)
- [Enabling Home Assistant Cloud in Home Assistant](/hc/en-us/articles/25649130769949)
- [About the remote access connection to Home Assistant](/hc/en-us/articles/26469707849629/)

