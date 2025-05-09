<!---steps on migrating an existing ZHA network to a Home Assistant Connect ZBT-1 stick. -->

{% steps %}
{% step "Starting radio migration" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-z2m-migrate-zha-02.png" "Screenshot showing the migrate radio button on the Network settings dialog" %}
{% stepContent %}

1. Under [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/), select the ZHA integration, then select **Configure**.
2. Under **Network settings** add-on, select **Migrate Radio**.

{% endstepContent %}
{% endstep %}

{% step "Reconfiguring ZHA" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-03.png" "Screenshot showing the Reconfigure ZHA dialog" %}
{% stepContent %}

- To reconfigure ZHA, select **Submit**

{% endstepContent %}
{% endstep %}

{% step "Migrating radio" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-04.png" "Screenshot showing the Migrate or reconfigure dialog" %}
{% stepContent %}

- Select **Migrate to a new radio**

{% endstepContent %}
{% endstep %}

{% step "Starting the backup" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-05.png" "Screenshot showing the Migrate to a new radio dialog" %}
{% stepContent %}

- To start automatic backup, select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Unplugging the old radio" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-06.png" "Screenshot showing the Unplug your old radio dialog" %}
{% stepContent %}

- If you no longer need the old radio stick, you can now remove it.
- Before selecting **Submit**, connect Connect&nbsp;ZBT-1, as described in the following steps.

{% endstepContent %}
{% endstep %}

{% step "Adding extension cable" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-raspi-01.jpg" "Home Assistant Connect&nbsp;ZBT-1 connected to a Raspberry Pi via extension cable" %}
{% stepContent %}

- Plug the Home Assistant Connect&nbsp;ZBT-1 into the USB extension cable.
- Plug the extension cable into your Home Assistant instance.
- If you are using the standalone Home Assistant Container installation method, make sure Connect&nbsp;ZBT-1 is [mapped to the container](https://www.home-assistant.io/installation/linux#exposing-devices).
- **Notice**: USB 3.0 ports and USB 3.0 drives can cause interference with 2.4 GHz protocols, including the ones provided by Home Assistant Connect&nbsp;ZBT-1. It is important to use the USB extension cable and to position the Home Assistant Connect&nbsp;ZBT-1 away from possible interference sources.
This [video](/hc/en-us/articles/26124431414557) shows the effect of interference.

{% endstepContent %}
{% endstep %}

{% step "Confirming that Home Assistant Connect&nbsp;ZBT-1 is plugged in" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-06.png" "Screenshot showing the Unplug your radio dialog" %}
{% stepContent %}

- Now that Home Assistant Connect&nbsp;ZBT-1 is plugged in, select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Choosing the port" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-migrate-zha-select-port.png" "Screenshot showing the Select a serial port dialog" %}
{% stepContent %}

- Choose the serial port with **Connect&nbsp;ZBT-1** and select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Restoring a backup" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-08.png" "Screenshot showing the Network formation dialog" %}
{% stepContent %}

- Select **Restore an automatic backup**.

{% endstepContent %}
{% endstep %}

{% step "Choosing the backup" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-09.png" "Screenshot showing the Restore automatic backup dialog" %}
{% stepContent %}

- Choose the latest backup and select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Overwriting the radio IEEE address" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-10.png" "Screenshot showing the Overwriting the radio IEEE address dialog" %}
{% stepContent %}

- Select the **Permanently replace the radio IEEE address** and select **Submit**.
- **Info** This means that your old stick and your new stick will have the same IEEE address.
  - This is required for the migration process to complete successfully.
  - From this point onwards, you should not operate the old stick in the same area. If you do not migrate the IEEE address from your old stick, you'll have to repair many of your devices to keep them working.

{% endstepContent %}
{% endstep %}

{% step "Wait" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-11.png" "Screenshot showing the Overwriting the radio IEEE address dialog with waiting animation" %}
{% stepContent %}

- Overwriting the IEEE address may take a while. Wait.

{% endstepContent %}
{% endstep %}

{% step "Migration complete!" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-12.png" "Screenshot showing the Success dialog" %}
{% stepContent %}

- Select **Finish** to confirm. The migration process is now complete.
- **Info** You won't be able to control the devices until they rejoin the network.
  - Normally, they rejoin within one hour.
  - You may be able to accelerate that process by power-cycling devices.

{% endstepContent %}
{% endstep %}
{% endsteps %}
