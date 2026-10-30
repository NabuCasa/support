---
zendesk:
  article_id: 25619386304541
  name: Text-to-speech (TTS)
  position: 10
  labels: cloud, link
---

The Home Assistant Link text-to-speech (TTS) service allows you to have text read aloud with natural sounding voices. This service is automatically enabled when you are signed in to Home Assistant Link.

**Text-to-speech sample:**

<audio src="/static/audio/tts_demo.mp3" controls></audio>

<small><i>Voice: JennyNeural (Home Assistant Link / American English)</i></small>

Language options may change from time to time, so if you are missing options which are shown on this page, make sure you are running the latest version of Home Assistant.

## Using Home Assistant Link TTS in an automation

1. To try Home Assistant Link TTS, go to [**System** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/).
2. Select the language and voice.
3. To view a greeting sample, select **Try**.

   <img src="/static/img/cloud/tts_settings.png" alt="TTS settings">

4. Select a compatible media player or the browser and select **Play**.

   <img src="/static/img/cloud/tts_sample.png" alt="TTS sample">

5. If you want to use this directly in an automation, select **Create automation**.
   **Result**: The content will be used in an action of an automation.

   <img src="/static/img/cloud/tts_open_as_action_in_automation.png" alt="TTS open as action in an automation">

   - You can now edit the rest of the automation.

## Testing the TTS service

Another way to test the Home Assistant Link text-to-speech service is by calling it from the **Media**.

1. To test the TTS service, go to [**Media**](https://my.home-assistant.io/redirect/media_browser/).
2. Select **Text-to-speech**.
   ![Select Text-to-speech](/static/img/cloud/tts_select_media_source_01.png)
3. Select **Cloud**.

   ![Select Cloud](/static/img/cloud/tts_select_tts_source.png)

4. Enter the text you want to hear. -
   - Select the language.
   - Enter options, such as a voice preference.
   - On the bottom of the page, select the media player.
     ![Enter text to be spoken](/static/img/cloud/tts_enter_sentence_01.png)
5. To listen to the text, select **Say**.

## If Home Assistant Cloud is not listed

If **Home Assistant Cloud** is not offered as a text-to-speech option when you set up a voice assistant, its entity may be disabled. Disabled entities are hidden from the entity list by default, so the steps below include showing them.

1. In Home Assistant, go to [**Settings** > **Devices & services** > **Entities**](https://my.home-assistant.io/redirect/entities/).
2. In the **Filters** panel, expand **Status**. Select **Disabled** and clear **Enabled**, so that only disabled entities are listed.
3. Search for `home_assistant_cloud`.
4. Select each entity in the list, open its settings, and turn on **Enabled**.

## List of supported languages

The supported languages are listed below. Some of the languages have multiple voices.

| **Neural voices by language** | **Locale** |
| :---------------------------- | :--------- |

{%- for language in ttsLanguages %}
| {{ language[0] | languageDisplayName }} | {{ language[0] }} |
{%- endfor %}

---
