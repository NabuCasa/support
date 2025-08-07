---
zendesk:
  article_id: 29059418289821
  name: Overriding the radio frequency region and transmit power levels
  position: 40
  labels: connect zwa-2
---

Both the radio frequency and the radio transmit power level used by Z-Wave devices depend on your region.

By default, the radio frequency of Home Assistant Connect ZWA-2 is set to EU Long Range. The transmit power level is configured for Europe. Home Assistant automatically adjusts these settings to match the region you are located in, but if you are using Connect ZWA-2 without Home Assistant, you will need to adjust this manually.

## Scenario 1: Running the device with Home Assistant and the Z-Wave JS add-on

If you use the **Z-Wave JS** add-on, you do not need to do anything.

- The Z-Wave JS add-on automatically adjusts the region based on the location defined for your Home Assistant hub.
  - This means radio frequency and transmit power level are set automatically for your region.
  - If you don't know whether you use the **Z-Wave JS** add-on:
    - Go to **Settings** > **Add-ons** and look for the **Z-Wave JS** add-on.

- If needed, you can override the radio frequency region in the **Z-Wave JS** add-on. To do this, follow the [steps in the Z-Wave documentation]((https://www.home-assistant.io/integrations/zwave_js/#overriding-the-radio-frequency-region-of-the-adapter-in-the-z-wave-js-add-on)).

## Scenario 2: Running the device with Z-Wave JS UI add-on or another automation platform (without Home Assistant)

If you are using Home Assistant Connect ZWA-2 with the **Z-Wave JS UI** add-on or another automation platform, you can change the radio frequency region and transmit power level there.

- The location of the settings depends on your hub.
- Refer to the section [about transmit power levels](/hc/en-us/articles/29081378073501) to find the right values.

## Note about end devices

- The frequency of end devices cannot be changed. Make sure to buy devices specific to your region.

## Related topics

- [About transmit power levels](/hc/en-us/articles/29081378073501)
- [Z-Wave documentation on overriding the radio frequency region](https://www.home-assistant.io/integrations/zwave_js/#overriding-the-radio-frequency-region-of-the-adapter-in-the-z-wave-js-add-on)
- [Connecting Home Assistant Connect ZWA-2 to Home Assistant](/hc/en-us/articles/28685765309853)
- [Z-Wave global regions](https://www.silabs.com/wireless/z-wave/global-regions)