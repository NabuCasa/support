---
zendesk:
  article_id: 31321042429597
  name: Reinstalling the firmware using the Open Home Foundation Toolbox
  position: 80
  labels: connect zbt-1
productName: "Home Assistant Connect&nbsp;ZBT-1"
firmwareInstallerPage: "https://toolbox.openhomefoundation.org/zbt1/install"
---

This section shows you how to reinstall firmware using a web flasher tool. In most cases, this should not be needed.

- If you just want install the latest firmware, follow the steps on [Updating firmware](/hc/en-us/articles/26124447269917).
- If you want to switch firmwares, follow the steps on [switching from Zigbee to Thread](/hc/en-us/articles/26124710072861).

Reinstalling the firmware using the Open Home Foundation Toolbox is useful if you are running an older Home Assistant version, or want to install a custom firmware version. It allows you to install the latest firmware version for {{ productName }} directly from your browser over USB.

## Prerequisites

- The firmware update through web flasher is only available for Home Assistant SkyConnect devices and {{ productName }} devices purchased after October 20, 2024.

## To reinstall the firmware using the Open Home Foundation Toolbox

1. On your computer, open a Chromium-based browser, such as Google Chrome or Microsoft Edge.
2. Open [the toolbox website]({{ firmwareInstallerPage }}) and follow the instructions on installing the firmware.

## Related topics

- [Open Home Foundation Toolbox]({{ firmwareInstallerPage }})
- [Switching from Zigbee to Thread](/hc/en-us/articles/26124710072861)
- [Updating firmware](/hc/en-us/articles/26124447269917)