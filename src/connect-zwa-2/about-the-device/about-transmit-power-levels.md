---
zendesk:
  article_id: 29081378073501
  name: About transmit power levels
  position: 40
  labels: connect zwa-2
---

If you use Home Assistant with the **Z-Wave JS** add-on, the transmit power levels are configured automatically. You do not need to do anything.

If you use another hub (not Home Assistant), you may need to change the transmit power levels. The location of the transmit power level setting depends on your hub.

There are 3 values that can be set:

- [Normal transmit power level](#normal-power-transmit-power-level) (sometimes called TX power level)
- [Max. Long Range transmit power level](#max-long-range-transmit-power-level)
- [Power level calibration](#power-level-calibration) (also called "measured power at 0 dBm")

## Normal power transmit power level

Depends on the region:

- **EU:** +13 dBm
- **US:** -1 dBm
- **Rest of the world:** Unknown (you could try EU levels)

## Max. Long Range transmit power level

Depends on the region:

- **EU:** +14 dBm
- **US:** +20 dBm
- **Rest of the world:** Does not apply (No Long Range outside of EU/US yet)

## Power level calibration

Should not be changed. Power level calibration is hardware-specific. For the Home Assistant Connect&nbsp;ZWA-2, it should be 0&nbsp;dBm.
