---
zendesk:
  article_id: 25455132549661
  name: Re-seating the Raspberry Pi Compute Module 5 on Home Assistant Yellow
  position: 7
  labels: yellow, troubleshooting
---


## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/yellow/cm5_reseat_tools_350.jpg" "Home Assistant Yellow and flat nose pliers" %}
{% stepContent %}

- Home Assistant Yellow with Compute Module installed, powered off
- Flat nose pliers

{% include "fragments/notice-dont-use-screws.md" %}

{% endstepContent %}
{% endprereq %}
{% endsteps %}


## Opening the case

{% include 'yellow/yellow-open-case-cm5.md' %}

## Removing the Raspberry Pi Compute Module 5

{% include 'yellow/yellow-remove-cm.md' %}

## Re-seating the Raspberry Pi Compute Module 5

{% include "fragments/notice-dont-use-screws.md" %}

{% include 'yellow/yellow-reseat-cm5.md' %}

## Reassembling your Home Assistant Yellow

{% include 'yellow/yellow-reassemble-case.md' %}