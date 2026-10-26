---
zendesk:
  article_id: 25619427296413
  name: Assist
  position: 10
  labels: cloud, nabu
---

<img src="/static/img/logos/assist-logo.png" class='no-shadow' alt='Assist logo' style='width: 150px; float: right'>

[Assist](https://www.home-assistant.io/voice_control/) is our voice assistant that allows you to control Home Assistant using natural language.

Nabu is the private voice assistant for your Home Assistant smart home, built on Assist. It's local-first and runs the entire voice pipeline: the "Okay Nabu" wake word, speech-to-text (STT), command processing in Assist, and text-to-speech (TTS). STT and TTS can run locally on your Home Assistant system or use cloud-accelerated speech processing from Home Assistant Cloud.

To set up Nabu, go to [**Settings** > **Voice assistants**](https://my.home-assistant.io/redirect/voice_assistants/). [Learn more about Nabu](https://www.nabucasa.com/nabu/).

<div class='videoWrapper'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/HqYbhk6vq9E" videotitle="This 70s Walkie Talkie controls your smart home" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Assist is built on top of an open voice foundation and powered by knowledge provided by our community.

## Talk to Assist

- The following device types currently support voice input via Assist:

  - [Android phones and tablets](https://www.home-assistant.io/voice_control/android/)
  - [Wear OS watches](https://www.home-assistant.io/voice_control/android/#assist-on-wear-os)
  - [iPhones, Mac, Apple Watch, Home Pod](https://www.home-assistant.io/voice_control/apple/)
  - [ESP32 S3-BOX-3](https://www.home-assistant.io/voice_control/s3_box_voice_assistant/)
  - [M5Stack Atom Echo](https://www.home-assistant.io/voice_control/thirteen-usd-voice-remote/)
  - [A classic landline phone](https://www.home-assistant.io/voice_control/worlds-most-private-voice-assistant/)

- You don't want Assist to listen to a wake word? You can make it start listening with the press of a button.

<div class='videoWrapper'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/5b7nqGZyeVU" videotitle="Assist on an Android watch" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Supported languages

Currently, over 50 languages are supported. To check if yours is there, go to [**Settings** > **Voice Assistant**](https://my.home-assistant.io/redirect/voice_assistants/) and select **Home Assistant Cloud**. Open the **Language** dropdown. Select your language and check if it appears as a **Conversation agent**. If it's there, your language is supported.

<img src="/static/img/cloud/assist_home-assistant-cloud_languages.png" alt="Languages supported by Home Assistant Cloud">

If **Home Assistant Cloud** is not offered as a **Conversation agent**, its entity may be disabled. Disabled entities are hidden from the entity list by default, so the steps below include showing them.

1. In Home Assistant, go to [**Settings** > **Devices & services** > **Entities**](https://my.home-assistant.io/redirect/entities/).
2. In the **Filters** panel, expand **Status**. Select **Disabled** and clear **Enabled**, so that only disabled entities are listed.
3. Search for `home_assistant_cloud`.
4. Select each entity in the list, open its settings, and turn on **Enabled**.

## Make an announcement

You can [use Assist in automations](https://www.home-assistant.io/voice_control/using_tts_in_automation/) to make an announcement. For example, it could tell you that your coffee is ready. Or use the upstairs speaker to tell your kids that dinner is ready.

## Use your voice to trigger an automation

You can even [define your own commands](https://www.home-assistant.io/voice_control/custom_sentences/) to start your automation.

## Use OpenAI with Assist

You can give your voice assistant personality [by using OpenAI](https://www.home-assistant.io/voice_control/worlds-most-private-voice-assistant/#give-your-voice-assistant-personality-using-the-openai-integration).

We used a classic landline phone to talk to Mario, just for fun. But you can do this with any supported device. You could use your mobile phone, for example.

<div class='videoWrapper'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/eLx8_NAqptk" videotitle="Give your voice assistant personality using the OpenAI integration" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Year of the voice

We are hard at work to improve the voice assistant experience. We are currently at chapter 6 on our [Year of the voice](https://www.home-assistant.io/blog/2024/02/21/voice-chapter-6/) journey. You can now also use wake words to talk to Assist. You can even create your own wake word.

The video showcases different ways to talk to Home Assistant.

- [Google Assistant via Home Assistant Cloud](/hc/en-us/articles/25619376817053-Google-Assistant)
- [Alexa via Home Assistant Cloud](/hc/en-us/articles/25619363899677)
- [Android Assist native integration](https://www.home-assistant.io/voice_control/android/)
- [ESP32 S3-BOX-3](https://www.home-assistant.io/voice_control/s3_box_voice_assistant/)
- [ESPhome-based voice assistant via Assist - using an M5Stack ATOM Echo](https://www.home-assistant.io/voice_control/thirteen-usd-voice-remote/)
- [VoIP-based voice assistant via Assist](https://www.home-assistant.io/voice_control/worlds-most-private-voice-assistant/)
- [Enabling wake word](https://www.home-assistant.io/voice_control/install_wake_word_add_on/)

<div class='videoWrapper'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/XF53wUbeLxA" videotitle="Voice at Home Assistant." frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
