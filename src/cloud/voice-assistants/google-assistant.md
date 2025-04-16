---
zendesk:
  article_id: 25619376817053
  name: Google Assistant
  position: 2
  labels: cloud
---

The Google Assistant integration allows users to control Home Assistant entities from Google Home. You can then say things like "Ok Google, turn on the kitchen light" to control your local Home Assistant.

To control Home Assistant entities from Google Home, follow these steps:

1. [Set up Home Assistant Cloud](/hc/en-us/articles/25649130769949)
1. Under [**Settings** > **Voice assistant**](https://my.home-assistant.io/redirect/voice_assistants/), enable **Google Assistant**.
   <img src="/static/img/cloud/google-assistant-enable.png" alt="Enable Google Assistant">
1. On the **Expose** tab, expose at least one entity to Google.

   - Open the **Expose** tab.

     <img src="/static/img/cloud/assistant-expose-05.png" alt="Open the Expose tab">

   - Select the entity you want to be able to control via Google Assistant.

     <img src="/static/img/cloud/assistant-expose-06.png" alt="Select the entities you want to expose to Google Assistant">

   - Enable Google Assistant.

     <img src="/static/img/cloud/assistant-expose-07.png" alt="Enable Google Assistant">

     - The Google Assistant icon is now visible in the **Assistants** column.

        <img src="/static/img/cloud/assistant-expose-08.png" alt="Expose entities: Google Assistant icon is now visible">

1. Activate the Home Assistant Smart Home skill for Google Assistant.
   - If you have a Google Home device, use the Google Home app.
     - Select the plus icon in the upper left corner, and then **Set up device**, and **Works with Google**.
     - Search for **Home Assistant Cloud by Nabu Casa** and add it.
   - If you only have a mobile phone, launch Google Assistant, select the three dots menu.
     - Under **Settings**, you'll find **Home Control**.
     - There you can add **Home Assistant Cloud by Nabu Casa** using the **Add devices** option.
   - Troubleshooting: If after adding **Home Assistant Cloud by Nabu Casa**, the message _No compatible devices were found in your Home Assistant Cloud by Nabu Casa_ appears: This means no entity was exposed to Google Assistant. Repeat the step on exposing entities.

## Available domains

Currently, the following domains are available to be used with Google Assistant. They are listed with their default types:

- [Alarm Control Panel](https://www.home-assistant.io/integrations/alarm_control_panel/) (arm/disarm)
- [Button](https://www.home-assistant.io/integrations/button/) (scene)
- [Camera](https://www.home-assistant.io/integrations/camera/) (streaming, requires compatible camera)
- [Climate](https://www.home-assistant.io/integrations/climate/) (temperature setting, hvac_mode)
- [Cover](https://www.home-assistant.io/integrations/cover/) (on/off/set position)
- [Fan](https://www.home-assistant.io/integrations/fan/) (on/off/speed percentage/preset mode)
- [Group](https://www.home-assistant.io/integrations/group/) (on/off)
- [Humidifier](https://www.home-assistant.io/integrations/humidifier/) (humidity setting/on/off/mode)
- [Input boolean](https://www.home-assistant.io/integrations/input_boolean/) (on/off)
- [Input button](https://www.home-assistant.io/integrations/input_button/)
- [Input select](https://www.home-assistant.io/integrations/input_select/) (option/setting/mode/value)
- [Light](https://www.home-assistant.io/integrations/light/) (on/off/brightness/rgb color/color temp)
- [Lock](https://www.home-assistant.io/integrations/lock/)
- [Media player](https://www.home-assistant.io/integrations/media_player/) (on/off/set volume (via set volume)/source (via set input source)/control playback)
- [Scene](https://www.home-assistant.io/integrations/scene/) (on)
- [Script](https://www.home-assistant.io/integrations/script/) (on)
- [Select](https://www.home-assistant.io/integrations/select/)
- [Sensor](https://www.home-assistant.io/integrations/sensor/) (temperature setting for temperature sensors and humidity setting for humidity sensors)
- [Switch](https://www.home-assistant.io/integrations/switch/) (on/off)
- [Vacuum](https://www.home-assistant.io/integrations/vacuum/) (dock/start/stop/pause)

<div class="alert alert-primary">
Some of these devices may not display correctly in the Google Home app, such as media player, however, voice commands will still work.
</div>

### Secure devices

A secure device cannot be opened by Google Assistant unless a `secure_devices_pin` is set up. The following domains cover secure devices: `lock`, `alarm_control_panel` and `covers` with device types `garage` and `door`.

To allow opening, set the `secure_devices_pin` to something and you will be prompted to verbally provide this when opening the device. Closing and locking these devices does not require a pin.

  <img src="/static/img/cloud/assistant-secure-devices-01.png" alt="Home Assistant expose devices: secure device">

For the Alarm Control Panel, if a code is set, it must be the same as the `secure_devices_pin`. If `code_arm_required` is set to `false`, the system will arm without prompting for the pin.

### Media player sources

Media Player sources are sent via the Modes trait in Google Assistant.
There is currently a limitation with this feature that requires a hard-coded set of settings. Because of this, the only sources that will be usable by this feature [are listed here](https://developers.google.com/actions/reference/smarthome/traits/modes).
An example command would be, ""Hey Google, change input source to TV on Living Room Receiver"

### Devices don't show up for all users?

Some devices, such as `scene` or `script`, must be assigned to an `area` before other members of a shared Google Home Household can use them. This is because household members in a shared Google Home will not be able to view devices that are not assigned to a room (_unless_ they were the user who linked the service to Google Home). This issue isn't immediately apparent because `script` and `scene` devices aren't visible in the main Google Home dashboard.

### Climate operation modes

There is not an exact 1-1 match between Home Assistant and Google Assistant for the available operation modes.
Here are the modes that are currently available:

- off
- heat
- cool
- heatcool
- fan-only
- dry
- eco
- auto

After setting up the cloud, if you make any device changes such as changing the name or adding a new device simply say "Ok Google, sync my devices" to get the changes to show up.

## Local communication

Google devices can send their commands locally to Home Assistant. This allows Google to respond faster to your commands. If a local connection is unavailable it will automatically fallback to the cloud.

Google Assistant will consider sending commands locally if it does not involve a [secure device](#secure-devices).

Your Home Assistant instance needs to be connected to the same network as the Google Assistant device that you're talking to. The Google Assistant device will discover your Home Assistant instance via mDNS discovery (UDP broadcasts).

Your Home Assistant instance should not have the HTTP integration configured to use an SSL certificate ([documentation](https://www.home-assistant.io/integrations/http/)). This is necessary because the Google device will connect directly to the IP of your Home Assistant installation and will fail if it encounters an invalid SSL certificate.

The Google device still needs to be connected to the internet to be able to sync entities via Home Assistant Cloud, get credentials to establish a local connection and as a fallback for secure devices or if your Home Assistant instance cannot be reached.

## Manual configuration

You can use `configuration.yaml` to configure the entities that are being shown to Google Assistant and how they are exposed.
If you use any filters, as shown in the example below, the entities can no longer be exposed via User Interface. They are still listed under [**Settings** > **Voice assistant**](https://my.home-assistant.io/redirect/voice_assistants/) > **Expose**, but are shown grayed out.

```yml
# Example configuration.yaml entry configuring Google Assistant

cloud:
  google_actions:
    filter:
      include_entities:
        - light.kitchen
        - light.kitchen_left
      include_domains:
        - switch
      exclude_entities:
        - switch.outside
    entity_config:
      switch.kitchen:
        name: Custom Name for Google Assistant
        aliases:
          - bright lights
          - entry lights
        room: living room
```

## Configuration variables

<pre>
<b>google_actions:</b>
  (map) (Optional) Configuration options for the Google Assistant integration.

  <b>filter:</b>
    (map) (Optional) description: Filters for entities to include/exclude from Google Assistant.
    <b>include_entities:</b>
      (list) (Optional) description: Entity IDs to include.
    <b>include_domains:</b>
      (list) (Optional) Domains to include.
    <b>exclude_entities:</b>
      (list) (Optional) Entity IDs to exclude.
    <b>exclude_domains:</b>
      (list) (Optional) Domains to exclude.

  <b>entity_config:</b>
    (map) (Optional) Entity specific configuration for Google Assistant.
    <i>ENTITY_ID</i>:
      (map) (Optional) Entity to configure.
      <b>name:</b>
        (string) (Optional) Name of entity to show in Google Assistant.
      <b>aliases:</b>
        (list) (Optional) Aliases that can also be used to refer to this entity.
      <b>room:</b>
        (string) (Optional) Hint for Google Assistant in which room this entity is.
</pre>
