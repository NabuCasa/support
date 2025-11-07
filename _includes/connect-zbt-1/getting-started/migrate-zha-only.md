<!---steps on migrating an existing ZHA network to a Home Assistant Connect ZBT-1 stick. -->

{% steps %}
{% step "Starting migration" %}
{% image "/static/img/connect-zbt-1/connect-zbt-migrate-radio.png" "Screenshot showing the migrate radio button on the Network settings dialog" %}
{% stepContent %}

1. Under [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/), select the ZHA integration, then select the cog wheel.
2. Under **Network settings** add-on, select **Migrate radio**.

{% endstepContent %}
{% endstep %}

{% step "Adding an extension cable and the adapter" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-raspi-01.jpg" "Home Assistant Connect&nbsp;ZBT-1 connected to a Raspberry Pi via extension cable" %}
{% stepContent %}

{% include "fragments/zbt-1-notice-interference.md" %}

- Plug the Home Assistant Connect&nbsp;ZBT-1 into the USB extension cable.
- Plug the extension cable into your Home Assistant instance.
- If you are using the standalone Home Assistant Container installation method, make sure Connect&nbsp;ZBT-1 is [mapped to the container](https://www.home-assistant.io/installation/linux#exposing-devices).

{% endstepContent %}
{% endstep %}

{% step "Reconfiguring ZHA" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-03.png" "Screenshot showing the Reconfigure ZHA dialog" %}
{% stepContent %}

- To reconfigure ZHA, select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Migrating adapter" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-04.png" "Screenshot showing the Migrate or reconfigure dialog" %}
{% stepContent %}

- Select **Migrate to a new adapter**.

{% endstepContent %}
{% endstep %}

{% step "Choosing the port for the new adapter" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-migrate-zha-select-port.png" "Screenshot showing the Select a serial port dialog" %}
{% stepContent %}

- Choose the serial port showing your new adapter and select **Submit**.

{% endstepContent %}
{% endstep %}

{% step "Restoring a backup" %}
{% image "/static/img/connect-zbt-1/zbt-migrate-automatically.png" "Screenshot showing the Network formation dialog" %}
{% stepContent %}

- To use the backup that was created during this migration, select **Migrate automatically (recommended)**.
  - This is the quickest way to complete the migration.
- To restore a specific, older backup, select **Advanced migration** instead.
  - This will let you select a backup of your choice.

{% endstepContent %}
{% endstep %}

{% step "Migration complete!" %}
{% image "/static/img/connect-zbt-1/z2m-migrate-zha-12.png" "Screenshot showing the Success dialog" %}
{% stepContent %}

- The migration process is now complete.
- **Info** You won't be able to control the devices until they rejoin the network.
  - Normally, they rejoin within one hour.
  - You may be able to accelerate that process by power-cycling devices.
- You can now remove the old Zigbee adapter.

{% endstepContent %}
{% endstep %}
{% endsteps %}
