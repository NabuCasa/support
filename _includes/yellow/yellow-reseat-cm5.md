<!---Steps on reseating the Raspberry Pi Compute Module 4. The steps are almost the same as the ones fo rinstalling the CM4, except the heat pads don't need to be placed, as they are already there from the previous installation. -->

{% steps %}
{% step "Aligning the CM5" %}
{% image "/static/img/yellow/step-6-poe-align-cm4.jpeg" "Top view of the board, without CM4, connectors facing to the right" %}
{% stepContent %}

1. Place the board in front of you, the connectors facing to the right.
2. Orient the CM5: he Raspberry Pi text needs to be on the right hand side.
3. Carefully place the CM5 without force.
    - The CM5 should fall into place slightly when correctly aligned.

{% endstepContent %}
{% endstep %}

{% step "Installing the CM5" %}
{% image "/static/img/yellow/cm5_place_board_480.webp" "Top view of the board, with CM5, connectors facing to the right" %}
{% stepContent %}

- Press the CM5 board onto the board-to-board connectors until it clicks into place.

  1. Make sure you press on both sides (the two long edges).
     - This requires quite a bit of force.
     - If you don't hear a loud click, it is most likely not fully seated.
     - **Note**: It has been reported that on some boards, there is no click sound when pressing the module onto the board. It can still be seated correctly.
  2. Do a visual check to make sure the CM5 is installed correctly.

     - It needs to run parallel to the Home Assistant Yellow board.
     - You can also pull a bit on the sides to make sure it is not loose.

{% include "fragments/notice-dont-use-screws.md" %}

{% endstepContent %}
{% endstep %}

{% step "Placing the heat sink" %}
{% image "/static/img/yellow/cm5_place_heatsink_480.webp" "Top view of the board, showing how to install the heat sink" %}
{% stepContent %}

1. Push the 2 plastic push pins into the dedicated hole on the heat sink.
2. Start by first aligning the right plastic push pins into the dedicated hole on the carrier board.
3. Then, place the heat sink onto the module.

{% endstepContent %}
{% endstep %}

{% step "Securing the heat sink" %}
{% image "/static/img/yellow/step-9-push-pins-heatsink.webp" "Top view of the board, showing how to fasten the heat sink pins" %}
{% stepContent %}

1. Take the entire board off your workplace and push the pins firmly through the carrier board.
2. Ensure that the module is still fully seated after securing the heat sink.

{% endstepContent %}
{% endstep %}
{% endsteps %}
