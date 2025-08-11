---
zendesk:
  article_id: 28685765309853
  name: Connecting Home Assistant Connect ZWA-2 to Home Assistant
  position: 30
  labels: connect zwa-2
---

Before you can use Home Assistant Connect ZWA-2, you need to connect it to a smart home hub running Home Assistant. The following steps show you how to do this.

There are 2 main installation scenarios.

1. **Scenario 1**: [Connect ZWA-2 to Home Assistant and create a new Z-Wave network](#im-new-to-z-wave-connect-zwa-2-to-home-assistant)
   - Follow these steps if you do not have a Z-Wave network yet.
2. **Scenario 2**: [Migrate your existing Z-Wave network to Home Assistant Connect ZWA-2](#migrate-your-existing-z-wave-network-to-home-assistant-connect-zwa-2)
   - Follow these steps if you already have a Z-Wave network running with another controller and you want to migrate to Home Assistant Connect ZWA-2.

The **Prerequisites** are the same for both scenarios.

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zwa-2/zwa-2-connect-to-green.png" "Image showing the Assistant Connect&nbsp;ZWA-2 with the USB cable and a Home Assistant Green" %}
{% stepContent %}

- Home Assistant smart home hub with a USB 2.0 port, for example, a Home Assistant Green.
  - If you do not have Home Assistant installed on the hub yet, refer to the [installation documentation for instructions](https://www.home-assistant.io/installation/).
- Home Assistant 2025.7 or newer installed on your smart home hub.
- Home Assistant Connect ZWA-2 with a USB-C to USB-A cable (included in the box).
- Make sure you found a [good location for it, without interference](/hc/en-us/articles/28670284336925), and make sure the device is [placed in a vertical position](/hc/en-us/articles/28685750450205).

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## Scenario 1: Connect ZWA-2 to Home Assistant and create a new Z-Wave network

1. If you run Home Assistant but don’t have a Z-Wave network yet, follow [these steps to connect Home Assistant Connect ZWA-2 to Home Assistant](https://www.home-assistant.io/integrations/zwave_js/#setting-up-a-z-wave-js-server).

2. If you are running another hub (not Home Assistant), and if you are outside the EU, you might need to [override the radio frequency and transmit power levels in the Z-Wave JS add-on](/hc/en-us/articles/29059418289821) during setup.

## Scenario 2: Migrate your existing Z-Wave network to Home Assistant Connect ZWA-2

{% callout "important" %}

If you want to migrate from a **500 series adapter**, before starting migration, update the adapter to SDK 6.61+.

- Check the documentation of your device to see if and how it can be updated.
  - [Steps to update Aeotec Z-Stick 5](https://aeotec.freshdesk.com/support/solutions/articles/6000252294-z-stick-gen5-v1-02-firmware-update).

{% endcallout %}

{% callout "important" %}

If you want to migrate from a **Nortek HUSBZB-1**: there is no (easy) way to update that device.

- You need to set up a new network.

  - If you are comfortable with soldering and have time and patience: some users have reported that they were able to upgrade the firmware of the Nortek HUSBZB-1 with [this procedure](https://community.hubitat.com/t/guide-nortek-husbzb-1-nvm-backup-restore-and-updating-z-wave-firmware/48012).

{% endcallout %}

- If you already have a Z-Wave network, follow the [steps in the Z-Wave integration documentation on migrating your Z-Wave network to Home Assistant Connect ZWA-2](https://www.home-assistant.io/integrations/zwave_js/#migrating-a-z-wave-network-to-a-new-adapter).

- If you want to run Home Assistant Connect ZWA-2 with another hub (not Home Assistant) and if you are outside the EU, you might need to [override the radio frequency and transmit power in the Z-Wave JS add-on](/hc/en-us/articles/29059418289821).

- If you are using the **Z-Wave JS UI** add-on (and not the default **Z-Wave JS** add-on), follow these steps:
  - Before starting migration, disable the Z-Wave JS integration:
    - Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/) and select the **Z-Wave** integration.
    - Select the three-dot menu and select **Disable**.
    - Do the migration in **Z-Wave JS UI**.
      - Open the **Z-Wave JS UI** control panel and in the bottom-right corner, select the purple **Advanced actions** button.
      - Under **NVM Management**, select **Backup**.
      - Unplug the adapter and connect Home Assistant Connect ZWA-2.
      - Under **Settings** > **UI** > **Z-Wave**, enter the region and save.
      - In the control panel, select the purple **Advanced actions** button and under **NVM Management**, select **Restore**.
  - Enable the Z-Wave integration again.

## Related topics

- [Device overview](/hc/en-us/articles/28670192316189)
- [About Home Assistant Connect ZWA-2](/hc/en-us/articles/29190222644509)

### Prerequisites

- [Finding an installation location](/hc/en-us/articles/28670284336925)
- [Installing Home Assistant Connect ZWA-2](/hc/en-us/articles/28685750450205)
- [Home Assistant installation documentation for different hubs](https://www.home-assistant.io/installation/)

### Z-Wave integration documentation

- [Connecting Home Assistant Connect ZWA-2 to Home Assistant (setting up a new Z-Wave JS server)](https://www.home-assistant.io/integrations/zwave_js/#setting-up-a-z-wave-js-server)
- [Migrating your Z-Wave network to Home Assistant Connect ZWA-2](https://www.home-assistant.io/integrations/zwave_js/#migrating-a-z-wave-network-to-a-new-adapter)

### Migration

- [About transmit power levels](/hc/en-us/articles/29081378073501)
- [Overriding the radio frequency and transmit power in the Z-Wave JS add-on](/hc/en-us/articles/29059418289821)
- [Steps to update Aeotec Z-Stick 5](https://aeotec.freshdesk.com/support/solutions/articles/6000252294-z-stick-gen5-v1-02-firmware-update)