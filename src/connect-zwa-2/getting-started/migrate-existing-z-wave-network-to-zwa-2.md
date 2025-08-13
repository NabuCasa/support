---
zendesk:
  article_id: 29529265751965
  name: Migrating an existing Z-Wave network to Home Assistant Connect ZWA-2
  position: 40
  labels: connect zwa-2
---

If you already have a Z-Wave network running with Home Assistant and another Z-Wave adapter, and you want to migrate to Home Assistant Connect ZWA-2, follow these steps.

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zwa-2/zwa-2-connect-to-green.png" " with the USB cable and a Home Assistant Green" %}
{% stepContent %}

- Home Assistant smart home hub with a USB 2.0 port, for example, a Home Assistant Green.
- Have a Z-Wave network running on Home Assistant.
- Home Assistant 2025.8 or newer installed on your smart home hub.
- Home Assistant Connect ZWA-2 with a USB-C to USB-A cable (included in the box).

{% endstepContent %}
{% endprereq %}
{% endsteps %}

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

## To migrate your existing Z-Wave network to Home Assistant Connect ZWA-2

{% steps %}
{% include 'connect-zwa-2/assemble-and-install.md' %}


{% step "You have the Z-Wave JS add-on" "Scenario 1" %}
{% image "/static/img/connect-zwa-2/zwa-2-z-wave-js-add-on.png" "Screenshot of Z-Wave JS add-on" %}
{% stepContent %}

**Scenario 1**: You already have a Z-Wave network running with the **Z-Wave JS** add-on:

- Follow the [steps in the Z-Wave integration documentation on migrating your Z-Wave network to Home Assistant Connect ZWA-2](https://www.home-assistant.io/integrations/zwave_js/#migrating-a-z-wave-network-to-a-new-adapter).
- **Troubleshooting**: If you don't know whether you use the **Z-Wave JS** add-on:
  - Go to **Settings** > **Add-ons** and look for the **Z-Wave JS** add-on.

{% endstepContent %}
{% endstep %}

{% step "You have the Z-Wave JS UI add-on" "Scenario 2" %}
{% image "/static/img/connect-zwa-2/zwa-2-z-wave-js-ui-add-on.png" "Screenshot showing the Reconfigure ZHA dialog" %}
{% stepContent %}

**Scenario 2**: You are using the **Z-Wave JS UI** add-on (and not the default **Z-Wave JS** add-on):

1. Before starting migration, disable the Z-Wave JS integration:
   - Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/) and select the **Z-Wave** integration.
   - Select the three-dot menu and select **Disable**.
2. Do the migration in **Z-Wave JS UI**.
   - Open the **Z-Wave JS UI** control panel and in the bottom-right corner, select the purple **Advanced actions** button.
   - Under **NVM Management**, select **Backup**.
   - Unplug the adapter and connect Home Assistant Connect ZWA-2.
   - Under **Settings** > **UI** > **Z-Wave**, enter the region and save.
     - By default, the region on Home Assistant Connect ZWA-2 is set to EU Long Range. The transmit power level is configured for Europe.
     - If you are outside Europe, refer to the section [about radio frequency region and transmit power levels](/hc/en-us/articles/29081378073501) to find the right region and transmit power settings.
   - In the control panel, select the purple **Advanced actions** button and under **NVM Management**, select **Restore**.
3. Enable the Z-Wave integration again.

{% endstepContent %}
{% endstep %}

{% step "Check for interference" "Step 4" %}
{% image "/static/img/connect-zwa-2/zwa-2-signal-and-noise.png" "Screenshot of Z-Wave integration documentation" %}
{% stepContent %}

- You're all set, Home Assistant Connect ZWA-2 is connected to Home Assistant.
- To be sure your device is in a good location, follow the steps under [checking the distance to other transmitters to avoid interference](/hc/en-us/articles/28670741134365).

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Device overview](/hc/en-us/articles/28670192316189)
- [About Home Assistant Connect ZWA-2](/hc/en-us/articles/29190222644509)

### Prerequisites

- [Finding an installation location](/hc/en-us/articles/28670284336925)
- [Installing Home Assistant Connect ZWA-2](/hc/en-us/articles/28685750450205)

### Z-Wave integration documentation

- [Migrating your Z-Wave network to Home Assistant Connect ZWA-2](https://www.home-assistant.io/integrations/zwave_js/#migrating-a-z-wave-network-to-a-new-adapter)

### Migration

- [About radio frequency region and transmit power levels](/hc/en-us/articles/29081378073501)
- [Steps to update Aeotec Z-Stick 5](https://aeotec.freshdesk.com/support/solutions/articles/6000252294-z-stick-gen5-v1-02-firmware-update)