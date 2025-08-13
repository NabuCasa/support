---
zendesk:
  article_id: 28670741134365
  name: Checking for interference or signal blocking
  position: 80
  labels: connect zwa-2
---

As described in the section on [finding an installation location](/hc/en-us/articles/28670284336925), some devices may cause interference. To check if your Home Assistant Connect ZWA-2 is positioned far enough from other wireless transmitters or objects to avoid interference or signal blocking, follow these steps.

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zwa-2/zwa-2-connect-to-green.png" "Image showing the Assistant Connect ZWA-2 with the USB cable and a Home Assistant Green" %}
{% stepContent %}

- Have Home Assistant Connect ZWA-2 connected to Home Assistant
- Administrator rights on Home Assistant

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To check for interference or signal blocking

{% steps %}
{% step "Open the Z-Wave integration page" %}
{% image "/static/img/connect-zwa-2/zwa-2-select-adapter.png" "Open the Z-Wave integration page" %}
{% stepContent %}

1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/) and select the **Z-Wave** integration card.
2. From the list, select the adapter.

{% endstepContent %}
{% endstep %}

{% step "Enable the signal noise entities" %}
{% image "/static/img/connect-zwa-2/zwa-2-enable-entities.png" "Enable the entities" %}
{% stepContent %}

1. Under **Diagnostic**, for each **Average signal noise** and each **Signal noise** entity, select the entity and in the dialog, select the cogwheel.
   - Then select the **Enable** toggle.
2. It takes a while for the entities to become active.

{% endstepContent %}
{% endstep %}

{% step "Check the signal noise values and move the device if needed" %}
{% image "/static/img/connect-zwa-2/zwa-2-signal-and-noise.png" "Average signal nose and signal noise values under Diagnostic" %}
{% stepContent %}

1. Under **Diagnostic**, check the **Average signal noise** and  **Signal noise** values.
   - The **Average signal noise** is the **signal noise** averaged over a longer time span.
   - The first gives an indication how good the location is in general, the latter can show short spikes in noise.
   - The **Average signal noise** values should be between -100 and -110 dBm, ideally closer to -110 dBm.
   - A higher signal noise value is worse than a lower value in terms of interference. For example, -90 is worse than -110.
2. If the value doesn’t look good, move the device around until you find a good spot for it.
   - To see if you are moving in a good direction, check the **Signal noise** value.
   - Move slowly, as the **Signal noise** value takes about 30 s to update.
   - The **Average signal noise** takes much longer than that to update. It will take several minutes before you see a change in those values.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Finding an installation location](/hc/en-us/articles/28670284336925)
- [Installing the device](/hc/en-us/articles/28685750450205)