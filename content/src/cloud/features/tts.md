---
zendesk:
  article_id: 25619386304541
  name: TTS
  position: 6
  labels: cloud
---

The Cloud TTS service allows you to have text read aloud with natural sounding voices. This service is automatically enabled when you are signed in to your Home Assistant Cloud account.

**Text to speech sample:**

<audio src="/static/audio/tts_demo.mp3" controls></audio>

<small><i>Voice: JennyNeural (Home Assistant Cloud / American English)</i></small>

Language options may change from time to time, so if you are missing options which are shown on this page, make sure you are running the latest version of Home Assistant.

## Using Home Assistant Cloud TTS in an automation

1. To try Home Assistant Cloud TTS, go to [**System** > **Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/).
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

Another way to test the Home Assistant Cloud text-to-speech service is by calling it from the **Media**.

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

## List of supported languages

The supported languages are listed below. Some of the languages have multiple voices.

| **Neural voices by language**  | **Locale**     |
| ------------------------------ | -------------- |
| Afrikaans (South Africa)       | af-ZA          |
| Albanian (Albania)             | sq-AL          |
| American English               | en-US          |
| Amharic (Ethiopia)             | am-ET          |
| Arabic (Algeria)               | ar-DZ          |
| Arabic (Bahrain)               | ar-BH          |
| Arabic (Egypt)                 | ar-EG          |
| Arabic (Iraq)                  | ar-IQ          |
| Arabic (Jordan)                | ar-JO          |
| Arabic (Kuwait)                | ar-KW          |
| Arabic (Lebanon)               | ar-LB          |
| Arabic (Libya)                 | ar-LY          |
| Arabic (Morocco)               | ar-MA          |
| Arabic (Oman)                  | ar-OM          |
| Arabic (Qatar)                 | ar-QA          |
| Arabic (Saudi Arabia)          | ar-SA          |
| Arabic (Syria)                 | ar-SY          |
| Arabic (Tunisia)               | ar-TN          |
| Arabic (United Arab Emirates)  | ar-AE          |
| Arabic (Yemen)                 | ar-YE          |
| Armenian (Armenia)             | hy-AM          |
| Australian English             | en-AU          |
| Austrian German                | de-AT          |
| Azerbaijani (Azerbaijan)       | az-AZ          |
| Bangla (Bangladesh)            | bn-BD          |
| Bangla (India)                 | bn-IN          |
| Basque (Spain)                 | eu-ES          |
| Bosnian (Bosnia & Herzegovina) | bs-BA          |
| Brazilian Portuguese           | pt-BR          |
| British English                | en-GB          |
| Bulgarian (Bulgaria)           | bg-BG          |
| Burmese (Myanmar [Burma])      | my-MM          |
| Canadian English               | en-CA          |
| Canadian French                | fr-CA          |
| Cantonese (China)              | yue-CN         |
| Catalan (Spain)                | ca-ES          |
| Chinese (China)                | zh-CN          |
| Chinese (China, HENAN)         | zh-CN-henan    |
| Chinese (China, LIAONING)      | zh-CN-liaoning |
| Chinese (China, SHAANXI)       | zh-CN-shaanxi  |
| Chinese (China, SHANDONG)      | zh-CN-shandong |
| Chinese (China, SICHUAN)       | zh-CN-sichuan  |
| Chinese (Hong Kong)            | zh-HK          |
| Chinese (Taiwan)               | zh-TW          |
| Croatian (Croatia)             | hr-HR          |
| Czech (Czechia)                | cs-CZ          |
| Danish (Denmark)               | da-DK          |
| Dutch (Netherlands)            | nl-NL          |
| English (Hong Kong)            | en-HK          |
| English (India)                | en-IN          |
| English (Ireland)              | en-IE          |
| English (Kenya)                | en-KE          |
| English (New Zealand)          | en-NZ          |
| English (Nigeria)              | en-NG          |
| English (Philippines)          | en-PH          |
| English (Singapore)            | en-SG          |
| English (South Africa)         | en-ZA          |
| English (Tanzania)             | en-TZ          |
| Estonian (Estonia)             | et-EE          |
| European Portuguese            | pt-PT          |
| European Spanish               | es-ES          |
| Filipino (Philippines)         | fil-PH         |
| Finnish (Finland)              | fi-FI          |
| Flemish                        | nl-BE          |
| French (Belgium)               | fr-BE          |
| French (France)                | fr-FR          |
| Galician (Spain)               | gl-ES          |
| Georgian (Georgia)             | ka-GE          |
| German (Germany)               | de-DE          |
| Greek (Greece)                 | el-GR          |
| Gujarati (India)               | gu-IN          |
| Hebrew (Israel)                | he-IL          |
| Hindi (India)                  | hi-IN          |
| Hungarian (Hungary)            | hu-HU          |
| Icelandic (Iceland)            | is-IS          |
| Indonesian (Indonesia)         | id-ID          |
| Irish (Ireland)                | ga-IE          |
| Italian (Italy)                | it-IT          |
| Japanese (Japan)               | ja-JP          |
| Javanese (Indonesia)           | jv-ID          |
| Kannada (India)                | kn-IN          |
| Kazakh (Kazakhstan)            | kk-KZ          |
| Khmer (Cambodia)               | km-KH          |
| Korean (South Korea)           | ko-KR          |
| Lao (Laos)                     | lo-LA          |
| Latvian (Latvia)               | lv-LV          |
| Lithuanian (Lithuania)         | lt-LT          |
| Macedonian (North Macedonia)   | mk-MK          |
| Malay (Malaysia)               | ms-MY          |
| Malayalam (India)              | ml-IN          |
| Maltese (Malta)                | mt-MT          |
| Marathi (India)                | mr-IN          |
| Mexican Spanish                | es-MX          |
| Mongolian (Mongolia)           | mn-MN          |
| Nepali (Nepal)                 | ne-NP          |
| Norwegian Bokmål (Norway)      | nb-NO          |
| Pashto (Afghanistan)           | ps-AF          |
| Persian (Iran)                 | fa-IR          |
| Polish (Poland)                | pl-PL          |
| Romanian (Romania)             | ro-RO          |
| Russian (Russia)               | ru-RU          |
| Serbian (Serbia)               | sr-RS          |
| Sinhala (Sri Lanka)            | si-LK          |
| Slovak (Slovakia)              | sk-SK          |
| Slovenian (Slovenia)           | sl-SI          |
| Somali (Somalia)               | so-SO          |
| Spanish (Argentina)            | es-AR          |
| Spanish (Bolivia)              | es-BO          |
| Spanish (Chile)                | es-CL          |
| Spanish (Colombia)             | es-CO          |
| Spanish (Costa Rica)           | es-CR          |
| Spanish (Cuba)                 | es-CU          |
| Spanish (Dominican Republic)   | es-DO          |
| Spanish (Ecuador)              | es-EC          |
| Spanish (El Salvador)          | es-SV          |
| Spanish (Equatorial Guinea)    | es-GQ          |
| Spanish (Guatemala)            | es-GT          |
| Spanish (Honduras)             | es-HN          |
| Spanish (Nicaragua)            | es-NI          |
| Spanish (Panama)               | es-PA          |
| Spanish (Paraguay)             | es-PY          |
| Spanish (Peru)                 | es-PE          |
| Spanish (Puerto Rico)          | es-PR          |
| Spanish (United States)        | es-US          |
| Spanish (Uruguay)              | es-UY          |
| Spanish (Venezuela)            | es-VE          |
| Sundanese (Indonesia)          | su-ID          |
| Swahili (Kenya)                | sw-KE          |
| Swahili (Tanzania)             | sw-TZ          |
| Swedish (Sweden)               | sv-SE          |
| Swiss French                   | fr-CH          |
| Swiss High German              | de-CH          |
| Tamil (India)                  | ta-IN          |
| Tamil (Malaysia)               | ta-MY          |
| Tamil (Singapore)              | ta-SG          |
| Tamil (Sri Lanka)              | ta-LK          |
| Telugu (India)                 | te-IN          |
| Thai (Thailand)                | th-TH          |
| Turkish (Türkiye)              | tr-TR          |
| Ukrainian (Ukraine)            | uk-UA          |
| Urdu (India)                   | ur-IN          |
| Urdu (Pakistan)                | ur-PK          |
| Uzbek (Uzbekistan)             | uz-UZ          |
| Vietnamese (Vietnam)           | vi-VN          |
| Welsh (United Kingdom)         | cy-GB          |
| Zulu (South Africa)            | zu-ZA          |
| wuu (China)                    | wuu-CN         |

---
