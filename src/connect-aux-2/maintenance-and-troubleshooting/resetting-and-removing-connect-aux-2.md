---
zendesk:
  article_id: 40528952044445
  name: "Resetting and removing Connect AUX-2"
  position: 30
  labels: connect aux-2
---

Follow these steps before you pass Home Assistant Connect AUX-2 on.

## What Connect AUX-2 stores

Connect AUX-2 stores its own configuration: Wi-Fi credentials, the encryption key, and other device-specific settings. It stores no Z-Wave network data, which lives on the Connect ZWA-2.

Your Home Assistant configuration is included in standard Home Assistant backups.

## Remove Connect AUX-2 from Home Assistant

Remove the ESPHome device from **Settings** > **Devices & services**. If you used a Connect radio adapter with it, migrate or remove that integration separately.

## Reset the device

The **Reset** button restores Connect AUX-2 to its factory settings and restarts it. This clears the settings the device stores.

1. Press and hold the **Reset** button.
2. Release the button when the status LED stays solid red.

Connect AUX-2 restarts with its factory settings. To use it again, see [Set up Home Assistant Connect AUX-2](/hc/en-us/articles/40527754954653).
