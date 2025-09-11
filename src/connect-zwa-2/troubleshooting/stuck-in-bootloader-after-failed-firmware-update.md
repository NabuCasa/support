---
zendesk:
  article_id: 30248635824413
  name: My Connect ZWA-2 is stuck in bootloader after a failed firmware update
  position: 40
  labels: connect-zwa-2
---

## Symptom

You were running a firmware update on Home Assistant Connect ZWA-2 and are now getting a message from the software installer that the device failed to recover from bootloader.

## Cause

This behavior indicates that the firmware update failed on that device.

## Resolution

1. Check the logs under [**Settings** > **System** > **Logs**](https://my.home-assistant.io/redirect/logs/).
2. If you see a message indicating that the device failed to recover from bootloader or the integration is showing a message "Failed to connect: Cannot connect to host core-zwave-js", [run the adapter recovery tool](/hc/en-us/articles/30248838949405).
