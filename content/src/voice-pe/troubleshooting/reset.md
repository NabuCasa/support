---
zendesk:
  article_id: 25800178374557
  name: Resetting the device
  position: 2
  labels: voice pe, troubleshooting, reset
---

A device reset deletes the Wi-Fi credentials and the light settings from Home Assistant Voice. The device does not store any other user data. After a reset, the device is ready for a new onboarding process. This may be necessary, for example, when you want to give the device to someone else or if you want to use it in a new environment with different Wi-Fi credentials.

## To reset the device

1. Removing the device from Home Assistant
   - In the Home Assistant documentation, follow the steps on [removing an integration instance](https://www.home-assistant.io/common-tasks/general/#removing-an-integration-instance).

    ![Screenshot showing where to remove the integration](/static/img/voice-pe/voice_delete_integration_instance.png)

2. Press the button until it lights up red (22 seconds)
   - Keep pressing the button until the red circle is complete and the device tells you to stop pressing.
     - **Result**: Once the reset is complete. All data is cleared from the device.
     - **Info**: If you stop pressing the button before the red light has completed the circle, the reset process is aborted.
     - **Info**: After the reset is complete, the device starts up again. The white twinkle indicates that it is ready to be connected.

    ![Clip showing how to start the reset process by pressing the central button](/static/img/voice-pe/voice_reset_v2_480.webp)

## Related topics

- [Removing an integration instance](https://www.home-assistant.io/common-tasks/general/#removing-an-integration-instance)[rem