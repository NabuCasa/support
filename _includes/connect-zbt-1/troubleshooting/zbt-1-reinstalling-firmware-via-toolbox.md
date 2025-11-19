This section shows you how to reinstall firmware using a web flasher tool. In most cases, this should not be needed.

- If you just want install the latest firmware, follow the steps on [updating firmware on {{ productName }}]({{ updatingFirmwareTopic }}).
- If you want to switch firmwares, follow the steps on [switching from Zigbee to Thread on {{ productName }}]({{ switchingFromZigbeeToThread }}).

Reinstalling the firmware using the Open Home Foundation Toolbox is useful if you are running an older Home Assistant version, or want to install a custom firmware version. It allows you to install the latest firmware version for {{ productName }} directly from your browser over USB.

{% if type == "zbt1" %}

## Prerequisites

- The firmware update through web flasher is only available for Home Assistant SkyConnect devices and {{ productName }} devices purchased after October 20, 2024.

{% endif %}

## To reinstall the firmware using the Open Home Foundation Toolbox

1. On your computer, open a Chromium-based browser, such as Google Chrome or Microsoft Edge.
2. Open [the toolbox website]({{ firmwareInstallerPage }}) and follow the instructions on installing the firmware.