---
zendesk:
  article_id: 25455230601501
  name: Can I reinstall Home Assistant OS on CM4 again using the USB flash drive with the Home Assistant OS Installer for Yellow?
  position: 11
  labels: yellow, troubleshooting
---


By default, the Raspberry Pi Compute Module 4 (CM4) tries to boot from internal eMMC before trying to boot from the USB flash drive. Therefore, the Home Assistant OS Installer for Yellow will only get started if the CM4 is empty.

If you have a Raspberry Pi Compute Module 4 (CM4) and Home Assistant OS 8.5 or newer versions:

1. To clean the boot files from the internal eMMC on CM4, press and hold both the red and the blue button at startup.
2. Keep the two buttons pressed for at least 15 seconds.
   - Now, the system should boot from the USB flash drive again.

If you have a Raspberry Pi Compute Module 5 (CM5): you cannot use the Home Assistant OS Installer from a USB flash drive.

1. Instead, follow the CM5-specific steps on [Resetting the device](/hc/en-us/articles/25463622043165-Resetting-the-device)
2. Then follow the steps on Reinstalling the Operating System on a CM5.

## Related topics

- [Resetting the device](/hc/en-us/articles/25463622043165-Resetting-the-device)