---
zendesk:
  article_id: 29718084245149
  name: Speech-to-text (STT)
  position: 20
  labels: cloud
---

The Home Assistant Cloud speech-to-text (STT) service allows Home Assistant to convert your speech into text. This can then be used, for example, to [control your devices by speaking to Assist or ask it questions](https://www.home-assistant.io/voice_control/builtin_sentences/).

STT is automatically enabled when you are signed in to your Home Assistant Cloud account.

## Trying the new speech-to-text engine

We are testing a new speech-to-text engine for Home Assistant Cloud. In our testing, it copes better with the three things we hear break most often: accents, background noise, and languages other than English.

The new engine is available as a preview feature in [Labs](https://my.home-assistant.io/redirect/labs/), so it is opt-in while we gather feedback. Like every preview feature, it may still change, or be replaced by a different approach, before it becomes the default.

To try it, you need:

- Home Assistant 2026.9 or later.
- An active Home Assistant Cloud subscription, or a Home Assistant Cloud trial.

### Turning on the new engine

1. Go to [**Settings** > **System** > **Labs**](https://my.home-assistant.io/redirect/labs/).
2. Turn on **Home Assistant Cloud: Speech-to-text**.
3. Confirm that you want to enable the feature.

No restart is needed, and you can turn it off again from the same page at any time. When you turn it off, your assistants go straight back to the current engine.

### What changes while it is enabled

- Audio from your voice commands is processed by [Soniox](https://soniox.com/) instead of our current provider, Microsoft Azure. It travels through a Nabu Casa proxy, which handles authentication and forwards it to the processing region closest to you. Nabu Casa does not process, store, or log your audio at any point.
- Only assistants configured to use Home Assistant Cloud for speech-to-text are affected. Everything else about your voice pipeline stays the same, including your wake word, intent handling, and text-to-speech.
- The new engine detects the end of speech itself and works best on untouched audio. Home Assistant handles this for you: on supported hardware, such as [Home Assistant Voice Preview Edition](https://www.home-assistant.io/voice-pe/), automatic gain control and noise reduction are switched off while the feature is enabled, which lets the engine do its own audio processing.

{% callout "important" %}
The new engine does not cover every language that the current engine does. If you speak one of the languages it does not support, that assistant keeps using the current engine, even while the feature is enabled. See the table below to check whether your language is covered.
{% endcallout %}

### Giving feedback

Feedback is what decides whether this becomes the default for everyone, so please give it your hardest listening: the mumbled requests, the ones shouted from across the kitchen, and the ones in your own language. [Tell us how it went](https://forms.gle/Juf2vsxJHUX5y6Ev5).

## Selecting the STT language

You can define the language you speak to Assist when you [set up a Home Assistant Cloud voice assistant](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/).

If you want to speak to Assist in different languages, set up an assistant for each language.

  ![STT language selector in voice assistant dialog](/static/img/cloud/ha-cloud-stt.png)

## List of available languages for speech-to-text

Language options may change from time to time, so if you are missing options which are shown on this page, make sure you are running the [latest version of Home Assistant](https://www.home-assistant.io/latest-release-notes/).

Some variants may work better than others.

Every language below works with Azure, the current engine. Soniox, the new engine in Labs, covers most of them. Where the **Soniox** column says **No**, that language keeps using Azure even while the new engine is turned on.

| **Language and region** | **Locale** | **Soniox** |
| :---------------------- | :--------- | :--------- |

{%- for language in sttLanguages %}
{%- assign sttV2 = language | sttV2Supported: sttV2Languages %}
| {{ language | languageDisplayName }} | {{ language }} | {% unless sttV2 %}No{% endunless %} |
{%- endfor %}

---

## Related topics

- [Assist: supported sentences](https://www.home-assistant.io/voice_control/builtin_sentences/)
- [Setting up a Home Assistant Cloud voice assistant](https://www.home-assistant.io/voice_control/voice_remote_cloud_assistant/)
- [Home Assistant Cloud text-to-speech (TTS)](/hc/en-us/articles/25619386304541)
