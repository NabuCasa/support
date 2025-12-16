---
zendesk:
  article_id: 32589711910813
  name: Migrating from another Thread adapter to Home Assistant Connect ZBT-1
  position: 30
  labels: connect zbt-1, getting-started
productName: "Home Assistant Connect&nbsp;ZBT-1"
---

If you already have a Thread adapter running but want to switch to a {{ productName }}, follow these steps:

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-boxed-01.jpg" "{{ productName }} with USB extension cable in packaging" %}
{% stepContent %}

- [Home Assistant Operating System](https://www.home-assistant.io/docs/glossary/#home-assistant-operating-system) installed on your smart home hub. For example:
  - on a Home Assistant Green, where Home Assistant OS is preinstalled
  - on a Home Assistant Yellow or on a Raspberry Pi
- Existing Thread adapter connected to your Home Assistant hub
- Latest updates installed
- {{ productName }} adapter and a USB extension cable
- Thread devices

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To migrate an existing Thread network to Connect&nbsp;ZBT-1

{% steps %}

{% include "connect-zbt-1/getting-started/plug-in-zbt-1-and-extension-cable.md" %}

{% step "Adding the Home Assistant Connect ZBT-1 integration" %}
{% image "/static/img/connect-zbt-1/connect-zbt-1-add.png" "adding the Home Assistant Connect ZBT-1 integration" %}
{% stepContent %}

- Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
- {{ productName }} should now be discovered.
- Select **Add**.

{% endstepContent %}
{% endstep %}

{% step "Migrating to a new adapter" %}
{% image "/static/img/connect-zbt-2/migrate-thread-to-new-adapter.png" "Select the Thread firmware" %}
{% stepContent %}

1. Select **Migrate Thread to a new adapter**.
   - **Info**: Your Thread network is managed by Home Assistant. It is not stored on the adapter. Migrating the adapter means that Home Assistant will start to use the radio from {{ productName }} instead of the old one.
   - **Result**: After the migration wizard finished, your new {{ productName }} is used as the Thread adapter
2. You can now unplug the old adapter.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Adding your Thread-based devices to Home Assistant](https://www.home-assistant.io/integrations/thread/#adding-a-thread-based-device-to-home-assistant)
- [About different Thread networks](https://www.home-assistant.io/integrations/thread/#about-different-thread-networks)
- [About Thread border routers](https://www.home-assistant.io/integrations/thread/#about-thread-border-routers)
- [Making Home Assistant your first Thread network](https://www.home-assistant.io/integrations/thread/#to-make-home-assistant-your-first-thread-network)