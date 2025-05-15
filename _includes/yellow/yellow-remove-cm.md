<!---removing the Raspberry Pi Compute Module 4 or 5-->

{% steps %}
{% step "Removing the heat sink" %}
{% image "/static/img/yellow/remove-pins-03.webp" "Removing pins" %}
{% stepContent %}

- Use the pliers and squeeze the front of the pin so that it fits through the hole.
- Repeat the procedure for the other pin.

{% endstepContent %}
{% endstep %}

{% step "Removing the Raspberry Pi Compute Module." %}
{% image "/static/img/yellow/unseat-cm4.webp" "Unseating the Compute Module" %}
{% stepContent %}

{% hazard "notice" %}

- Do not use a screwdriver as a lever. It might damage the board.

{% endhazard %}
{% hazard "notice" %}

**Tilting can damage the connector**

- To avoid damage to the module, ideally, the module should be pulled up vertically. But this is hard to do.

  - Pull up the module from one side, tilting as little as possible. Tilting can damage the connector.
  - This requires quite a bit of force. If it does not work, pull harder.
{% endhazard %}

- Remove the Raspberry Pi Compute Module.
  - The image shows a Raspberry Pi Compute Module 4. The steps are the same for the Compute Module 5.

{% endstepContent %}
{% endstep %}
{% endsteps %}
