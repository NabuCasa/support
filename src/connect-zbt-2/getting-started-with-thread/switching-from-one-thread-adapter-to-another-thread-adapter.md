---
zendesk:
  article_id: 32087461954589
  name: Migrating from one Thread adapter to Home Assistant Connect ZBT-2
  position: 30
  labels: connect-zbt-2, getting-started
productName: "Home Assistant Connect&nbsp;ZBT-2"
---

If you already have a Thread adapter running but want to switch to a {{ productName }}, follow these steps:

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/connect-zbt-2/connect-zbt-2-unboxed-02.png" "{{ productName }} with USB extension cable in packaging" %}
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

## To migrate an existing Thread network to Connect&nbsp;ZBT-2

{% steps %}

{% include 'connect-zbt-2/getting-started/zbt-2-assemble-and-install.md' %}

{% include "connect-zbt-2/getting-started/plug-in-zbt-2-and-extension-cable.md" %}

{% step "Adding the Home Assistant Connect ZBT-2 integration" %}
{% image "/static/img/connect-zbt-2/connect-zbt-2-add.png" "adding the Home Assistant Connect ZBT-2 integration" %}
{% stepContent %}

- Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/).
- {{ productName }} should now be discovered.
- Select **Add**.

{% endstepContent %}
{% endstep %}

{% step "Migrating to a new adapter" %}
{% image "/static/img/connect-zbt-2/migrate-thread-to-new-adapter.png" "Select the Thread firmware" %}
{% stepContent %}

- Select **Migrate Thread to a new adapter**.
  - **Info**: Your Thread network is managed by Home Assistant. It is not stored on the adapter. Migrating the adapter means that Home Assistant will start to use the radio from {{ productName }} instead of the old one.
  - **Result**: After the migration wizard finished, your new {{ productName }} is used as the Thread adapter

{% endstepContent %}
{% endstep %}

{% step "Removing the old integration" %}
{% image "/static/img/connect-zbt-2/zbt-1-delete.png" "Select the Thread firmware" %}
{% stepContent %}

If you no longer want to use the old adapter, you can remove the old hardware integration.

1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/) and select the integration.
2. Select the three dots menu and select **Delete**.
3. You can now unplug the old adapter.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Adding your Thread-based devices to Home Assistant](https://www.home-assistant.io/integrations/thread/#adding-a-thread-based-device-to-home-assistant)
- [About different Thread networks](https://www.home-assistant.io/integrations/thread/#about-different-thread-networks)
- [About Thread border routers](https://www.home-assistant.io/integrations/thread/#about-thread-border-routers)
- [Making Home Assistant your first Thread network](https://www.home-assistant.io/integrations/thread/#to-make-home-assistant-your-first-thread-network)