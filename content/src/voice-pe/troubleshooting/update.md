---
zendesk:
  article_id: 25800097313053
  name: Updating the device
  position: 1
  labels: voice pe, troubleshooting, update
---

## Automatic update notification

No special steps are needed to update Home Assistant Voice Preview Edition. If a new software version is available, you will see a notification in Home Assistant, like with any other update.

## I receive no automatic update notification

You will not receive device firmware updates automatically if you took control of the device in the ESPHome Device Builder add-on (perhaps because you wanted to customize the device in some way).

- If you wish to update your device after taking control, you'll need to rebuild your device's configuration using either the ESPHome Device Builder add-on or an [ESPHome command-line/terminal interface](https://esphome.io/guides/getting_started_command_line).
- To check if there has been an update that is relevant for your device, check the [ESPHome changelog](https://esphome.io/changelog/2025.2.0.html).
Unless you have a good reason, don’t take control of the device in the **ESPHome Device Builder** add-on.

## Related topics

- [ESPHome command-line/terminal interface](https://esphome.io/guides/getting_started_command_line)
- [ESPHome changelog](https://esphome.io/changelog/2025.2.0.html)