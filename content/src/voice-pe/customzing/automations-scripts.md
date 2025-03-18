---
zendesk:
  article_id: 25935844321437
  name: Using scripts and automations to control the device - Examples
  position: 1
  labels: voice pe, customizing
---

You can use scripts and automations to control the device. The steps below show a few examples of what you could do.

<div class='videoWrapper'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/QhhuCzbQEag" videotitle="Use automations and scripts to control Home Assistant Voice Preview Edition" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Example 1: Playing announcements on the device

You can create an automation or script to play an announcement on the device.

1. Go to [**Settings** > **Automations & scripts**](https://my.home-assistant.io/redirect/automations/) and create a new automation.
2. Define your trigger.
3. Under **Then do**, select **Add action** and from the menu, select **Assist satellite**.
4. Select **Announce**.
5. Enter the message you want to play and select the device you want to play it on.
6. Save the automation.

   ![Screenshot showing the automation editor](/static/img/voice-pe/voice_script_announcement.png)

If you prefer editing in YAML, you can find an example with the `assist_satellite.announce` action below.

    ```yaml
    action: assist_satellite.announce
      data:
        message: The laundry is done
      target:
        entity_id: assist_satellite.home_assistant_voice_012345
    ```

## Example 2: Controlling the color of the LED ring

You can use `light.turn_on and light.turn_off` actions to control the light.

You can turn it on or off when something happens and define color and effects.

  ```yaml
  action: light.turn_on
    data:
      rgb_color:
        - 255
        - 105
        - 180
    target:
      entity_id: light.home_assistant_voice_012345_led_ring
  action: light.turn_off
  target:
    entity_id: light.home_assistant_voice_012345_led_ring
  ```

  ![Screenshot showing a light automation in the automation editor](/static/img/voice-pe/voice_light_turn_on_script.png)

## Example 3: Changing the selected assistant

1. To select a different assistant when something happens, use the select.select_option action. For example, when a button is pressed.

    ```yaml
    action: select.select_option
      data:
        option: preferred
      target:
        entity_id: select.home_assistant_voice_012345_assist_pipeline
    ```

2. Under **Options**, enter the name of the voice assistant.
   - Make sure to spell it exactly as you named it. For example `Spanish`.
3. To learn how to set up an automation based on a button press, follow the steps on [Automating on a button press](https://www.home-assistant.io/integrations/event/#automating-on-a-button-press).
   - **Info**: Those instructions are based on a Matter device. The process is very similar for other devices featuring a button.

   ![Image showing the automation editor](/static/img/voice-pe/voice_select_assistant_spanish.png)

## Example 4: Changing the wake word

1. To select a different wake word when something happens, use the `select.select_option` action.

          ```yaml
          action: select.select_option
            data:
              option: Okay Nabu
            target:
              entity_id: select.home_assistant_voice_012345_wake_word
          ```

2. Under **Options**, enter the preferred wake word. The default options are `Hey Jarvis`, `Hey Mycroft`, and `Okay Nabu`.
   - Make sure to spell it exactly as you named it.

   ![Screenshot showing an automation to change the wake word to Mycroft](/static/img/voice-pe/voice_select_wake_word_mycroft.png)

## Related topics

- [Home Assistant event entities](https://www.home-assistant.io/integrations/event/)
- [Automating on a button press](https://www.home-assistant.io/integrations/event/#automating-on-a-button-press)
- [VPE button press: automation example](https://gist.github.com/jlpouffier/68434e51c8e347e974a791f90914c59)