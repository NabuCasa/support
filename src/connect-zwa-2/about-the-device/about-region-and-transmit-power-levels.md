---
zendesk:
  article_id: 29081378073501
  name: About radio frequency region and transmit power levels
  position: 40
  labels: connect zwa-2
---

Both the radio frequency and the radio transmit power level used by Z-Wave devices depend on your region.

- By default, the radio frequency of Home Assistant Connect ZWA-2 is set to **EU Long Range**.

- The transmit power level is configured for Europe.

## About transmit power levels

If you use Home Assistant with the **Z-Wave JS** add-on, the radio frequency region and transmit power levels are configured automatically. You do not need to do anything.

If you use another hub (not Home Assistant), you may need to change the radio frequency region and transmit power levels. The location of the settings depends on your hub.

There are 3 transmit power values that can be set:

- [Normal transmit power level](#normal-power-transmit-power-level) (sometimes called TX power level)
- [Max. Long Range transmit power level](#max-long-range-transmit-power-level)
- [Power level calibration](#power-level-calibration) (also called "measured power at 0 dBm")

### Normal power transmit power level

Depends on the region:

- **EU:** +13 dBm
- **US:** -1 dBm
- **Rest of the world:** Unknown (you could try EU levels)

### Max. Long Range transmit power level

Depends on the region:

- **EU:** +14 dBm
- **US:** +20 dBm
- **Rest of the world:** Does not apply (No Long Range outside of EU/US yet)

### Power level calibration

Should not be changed. Power level calibration is hardware-specific. For the Home Assistant Connect&nbsp;ZWA-2, it should be 0&nbsp;dBm.

## Related topics

- [Overriding the radio frequency region and transmit power levels](/hc/en-us/articles/29059418289821)
- [Connecting Home Assistant Connect ZWA-2 to Home Assistant](/hc/en-us/articles/28685765309853)
- [Z-Wave global regions](https://www.silabs.com/wireless/z-wave/global-regions)
