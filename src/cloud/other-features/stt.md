---
zendesk:
  article_id: 29718084245149
  name: Speech-to-text (STT)
  position: 5
  labels: cloud
---

The Home Assistant Cloud speech-to-text (STT) service allows Home Assistant to convert your speech into text. This can then be used, for example, to [control your devices by speaking to Assist or ask it questions](https://www.home-assistant.io/voice_control/builtin_sentences/).

STT is automatically enabled when you are signed in to your Home Assistant Cloud account.

## Selecting the STT language

You can define the language you speak to Assist when you [set up a Home Assistant Cloud voice assistant](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/).

If you want to speak to Assist in different languages, set up an assistant for each language.

  ![STT language selector in voice assistant dialog](/static/img/cloud/ha-cloud-stt.png)

## List of available languages for speech-to-text

Language options may change from time to time, so if you are missing options which are shown on this page, make sure you are running the latest version of Home Assistant.

Some variants may work better than others.

| **Language and region** | **Locale** |
| :---------------------- | :--------- |

{%- for language in sttLanguages %}
| {{ language | languageDisplayName }} | {{ language }} |
{%- endfor %}

---

## Related topics

- [Assist: supported sentences](https://www.home-assistant.io/voice_control/builtin_sentences/)
- [Setting up a Home Assistant Cloud voice assistant](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/)
- [Home Assistant Cloud text-to-speech (TTS)](/hc/en-us/articles/25619386304541)