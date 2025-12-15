{% steps %}
{% step "Viewing the firmware version of the adapter" %}
{% image "/static/img/connect-zbt-1/conbee-update-05.png" "View the firmware version of the adapter" %}
{% stepContent %}

- In the deCONZ app, under **Settings** > **Gateway**, check the firmware version. It should be version 26720700 or newer.
  - If the version is recent enough, skip the next two steps and continue with Step 4 (Stop the deCONZ add-on).
  - If the version is not up-to-date, select the **Update** button.

{% endstepContent %}
{% endstep %}

{% step "Following the wizard" %}
{% image "/static/img/connect-zbt-1/conbee-update-06.png" "Follow the wizard" %}
{% stepContent %}

- Select **Create backup** and let the wizard guide you through the update process.

{% endstepContent %}
{% endstep %}

{% step "Updating complete" %}
{% image "/static/img/connect-zbt-1/conbee-update-14.png" "Update complete" %}
{% stepContent %}

- Once the update is complete, you will see the new firmware version.

{% endstepContent %}
{% endstep %}
{% endsteps %}