---
zendesk:
  article_id: 25619363899677
  name: Configuring Amazon Alexa to work with Home Assistant
  position: 3
  labels: cloud
---

The [Alexa integration](https://www.home-assistant.io/integrations/alexa/) allows you to control the Home Assistant entities via the [Home Assistant Smart Home skill](https://www.home-assistant.io/integrations/alexa.smart_home/) for Amazon Alexa. You can then say things like "Alexa, turn on the kitchen light" to control your local Home Assistant.

## Prerequisites

- To use this integration, you need to have an Amazon Alexa enabled device like the Amazon Echo.

- **Note**: The procedure below applies to Home Assistant version 2023.5 and later.
  - If you are running an older version, Amazon Alexa is located under [**Home Assistant Cloud**](https://my.home-assistant.io/redirect/cloud/).

## To control Home Assistant entities from Alexa

1. [Set up Home Assistant Cloud](/hc/en-us/articles/25649130769949).
2. Under [**Settings** > **Voice assistant**](https://my.home-assistant.io/redirect/voice_assistants/), enable **Alexa**.

   <img src="/static/img/cloud/alexa-enable.png" alt="Enable Alexa">

3. On the **Expose** tab, expose at least one entity to Alexa.
   - Open the **Expose** tab.

     <img src="/static/img/cloud/assistant-expose-05.png" alt="Open the Expose tab">

   - Select all entities you want to be able to control via Alexa.

     <img src="/static/img/cloud/assistant-expose-06.png" alt="Select the entities you want to expose to Alexa">

   - Select **Expose entities**.
     **Result**: The Alexa icon is now visible in the **Assistants** column.

     <img src="/static/img/cloud/assistant-expose-08-a.png" alt="Expose entities: Alexa icon is now visible">

4. Activate the Home Assistant Smart Home skill via the Alexa app.

   - From the Alexa App on your phone, go to **Skills & Games**.
   - Find **Home Assistant** and add it.</br>
       <details>
       <summary>The Home Assistant Smart Home skill is available in multiple marketplaces</summary>

     - [AU marketplace](https://www.amazon.com.au/Home-Assistant/dp/B0772J1QKB)
     - [BR marketplace](https://www.amazon.com.br/Home-Assistant/dp/B0772J1QKB)
     - [CA marketplace](https://www.amazon.ca/Home-Assistant/dp/B0772J1QKB)
     - [DE marketplace](https://www.amazon.de/Home-Assistant/dp/B0772J1QKB)
     - [ES marketplace](https://www.amazon.es/Home-Assistant/dp/B0772J1QKB)
     - [FR marketplace](https://www.amazon.fr/Home-Assistant/dp/B0772J1QKB)
     - [GB marketplace](https://www.amazon.co.uk/Home-Assistant/dp/B0772J1QKB)
     - [IN marketplace](https://www.amazon.in/Home-Assistant/dp/B0772J1QKB)
     - [IT marketplace](https://www.amazon.it/Home-Assistant/dp/B0772J1QKB)
     - [JP marketplace](https://www.amazon.co.jp/Home-Assistant/dp/B0772J1QKB)
     - [MX marketplace](https://www.amazon.com.mx/Home-Assistant/dp/B0772J1QKB)
     - [US marketplace](https://www.amazon.com/Home-Assistant/dp/B0772J1QKB)

       </details>

     **Result**: You will be prompted to link to your Nabu Casa account.

5. Once activated, tell Alexa to discover new devices: _Alexa, discover new devices_.

<div class='videoWrapper'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/PhWpnc-Pvko" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## List of available domains

Currently, the following domains are available to be used with Alexa:

- [Alarm Control Panel](https://www.home-assistant.io/integrations/alarm_control_panel/) (alarm control panels must not require an arm code)
- [Alert](https://www.home-assistant.io/integrations/alert/)
- [Automation](https://www.home-assistant.io/integrations/automation/) (enables/disables)
- [Binary sensor](https://www.home-assistant.io/integrations/binary_sensor/)
- [Camera](https://www.home-assistant.io/integrations/camera/)
- [Climate](https://www.home-assistant.io/integrations/climate/)
- [Cover](https://www.home-assistant.io/integrations/cover/)
- [Fan](https://www.home-assistant.io/integrations/fan/) (supports on/off and set speed)
- [Group](https://www.home-assistant.io/integrations/group/)
- [Input boolean](https://www.home-assistant.io/integrations/input_boolean/)
- [Light](https://www.home-assistant.io/integrations/light/)
- [Lock](https://www.home-assistant.io/integrations/lock/) (lock and unlock, but unlock is untested as Amazon has disabled unlock for now)
- [Media player](https://www.home-assistant.io/integrations/media_player/) (play, pause, stop, set volume, adjust volume, next track, and previous track)
- [Scene](https://www.home-assistant.io/integrations/scene/)
- [Script](https://www.home-assistant.io/integrations/script/) (enables/disables)
- [Sensor](https://www.home-assistant.io/integrations/sensor/)
- [Switch](https://www.home-assistant.io/integrations/switch/)

## Manual configuration

You can use the [`configuration.yaml`](https://www.home-assistant.io/docs/configuration/) file to configure the entities that are being shown to Alexa and how they are exposed.

If you use any filters, as shown in the example below, the entities can no longer be exposed via User Interface. They are still listed under [**Settings** > **Voice assistant**](https://my.home-assistant.io/redirect/voice_assistants/) > **Expose**, but are shown grayed out.

```yml
# Example configuration.yaml entry configuring Alexa

cloud:
  alexa:
    filter:
      include_entities:
        - alarm_control_panel.house
        - light.kitchen
        - light.kitchen_left
      include_domains:
        - switch
        - alarm_control_panel
      exclude_entities:
        - switch.outside
    entity_config:
      light.kitchen:
        name: Custom Name for Alexa
        description: The light in the kitchen
      switch.stairs:
        display_categories: LIGHT
```

## List of configuration variables

<pre>
<b>alexa:</b>
  (map) (Optional) Configuration options for the Amazon Alexa integration.

  <b>filter:</b>
    (map) (Optional) description: Filters for entities to include/exclude from Alexa.
    <b>include_entities:</b>
      (list) (Optional) description: Entity IDs to include.
    <b>include_domains:</b>
      (list) (Optional) Domains to include.
    <b>exclude_entities:</b>
      (list) (Optional) Entity IDs to exclude.
    <b>exclude_domains:</b>
      (list) (Optional) Domains to exclude.

  <b>entity_config:</b>
    (map) (Optional) Entity specific configuration for Alexa.
    <i>ENTITY_ID</i>:</b>
      (map) (Optional) Entity to configure.
      <b>name:</b>
        (string) (Optional) Name of entity to show in Alexa.
      <b>description:</b>
        (string) (Optional) Description of entity to show in Alexa.
      <b>display_categories:</b>
        (string) (Optional) The display category to use in Alexa. <a href="https://developer.amazon.com/docs/device-apis/alexa-discovery.html#display-categories">Available categories</a>
</pre>

## Related topics

- [Alexa integration](https://www.home-assistant.io/integrations/alexa/)
- [Home Assistant Smart Home skill](https://www.home-assistant.io/integrations/alexa.smart_home/)
- [Set up Home Assistant Cloud](/hc/en-us/articles/25649130769949)