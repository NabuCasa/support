<!--- more generic steps on migrating a Z-Wave network to Home Assistant Connect ZWA-2. -->


{% steps %}
{% include 'connect-zwa-2/assemble-and-install.md' %}


{% step "You have the Z-Wave JS add-on" "Scenario 1" %}
{% image "/static/img/connect-zwa-2/zwa-2-z-wave-js-add-on.png" "Screenshot of Z-Wave JS add-on" %}
{% stepContent %}

**Scenario 1**: You already have a Z-Wave network running with the **Z-Wave JS** add-on:

- Follow the [steps in the Z-Wave integration documentation on migrating your Z-Wave network to Home Assistant Connect ZWA-2](https://www.home-assistant.io/integrations/zwave_js/#migrating-a-z-wave-network-to-a-new-adapter).
- **Troubleshooting**: If you don't know whether you use the **Z-Wave JS** add-on:
  - Go to [**Settings** > **Add-ons**](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_zwave_js) and look for the **Z-Wave JS** add-on.

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