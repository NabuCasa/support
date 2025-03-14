---
zendesk:
  article_id: 25800392162717
  name: I don't get a voice response
  position: 6
  labels: voice pe, troubleshooting, no response
---

## Symptom

My voice assistant understands me and processes the command, but I don’t get a voice response.

## Description

The voice response is generated in Home Assistant by one of our supported text-to-speech (or TTS) engines. The voice assistant device then fetches the audio file from Home Assistant and plays it back. This fetching process only works if Home Assistant can communicate its own URL to the device. If you have a complex network setup, or if you changed this setting in the past, the URL communicated could be wrong.

## Resolution

Check the Home Assistant URL.

1. Go to your [user profile](https://my.home-assistant.io/redirect/profile/) and enable **Advanced mode**.
2. Under [**Settings** > **System** > **Network**](https://my.home-assistant.io/redirect/network/).
3. Change your **Local Network** Home Assistant URL to a URL that can be reached locally and that points to Home Assistant.
4. For most users, the **Automatic** option works and is recommended.

   ![Screenshot of the network settings](/static/img/voice-pe/local_network_automatic.png)
