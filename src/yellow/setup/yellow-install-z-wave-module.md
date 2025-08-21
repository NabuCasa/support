---
zendesk:
  article_id: 29750981827229
  name: Installing a Raspberry Pi Z-Wave module
  description: How to install a Raspberry Pi Z-Wave module on Home Assistant Yellow
  position: 50
  labels: yellow, z-wave
---

Instructions on installing a Raspberry Pi Z-Wave module on Home Assistant Yellow. This procedure can help you get started if you already have one of the 700 series hats listed below.

{% callout "tip" %}

If you are just starting out with Z-Wave, it is recommended to use an 800 series adapter, such as [Home Assistant Connect ZWA-2](https://www.home-assistant.io/connect/zwa-2/).

- In general, it is recommended to use a USB adapter. For more information, refer to the [documentation on supported Z-Wave controllers in Home Assistant](https://www.home-assistant.io/docs/z-wave/controllers/).

{% endcallout %}

This procedure has been tested with the following modules:

- Aeotec Z-Pi 7 Raspberry Pi HAT/Shield
- Z-Wave.Me RaZberry 7
- Z-Wave.Me RaZberry 7 Pro

## To install a Raspberry Pi Z-Wave module on Home Assistant Yellow

1. Make sure the module is properly seated on the Home Assistant Yellow.

    ![Aeotec Z-Pi 7 on Home Assistant Yellow](/static/img/yellow/zpi-7-yellow.jpg)

2. Carefully [close the case](/hc/en-us/articles/25298668266269) (see Reassembling your Home Assistant Yellow section) and power up Home Assistant Yellow.
3. Follow the procedure on [setting up a Z-Wave JS server](https://www.home-assistant.io/integrations/zwave_js/#setting-up-a-z-wave-js-server).
   - In step 2, follow the manual setup steps to install the Z-Wave integration.
   - When prompted to choose a **Device path**, choose `ttyAMA0`.

## Related topics

- [Z-Wave integration in Home Assistant](https://www.home-assistant.io/integrations/zwave_js/)
- [Home Assistant Connect ZWA-2](https://www.home-assistant.io/connect/zwa-2/)