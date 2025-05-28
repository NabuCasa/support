<!---Steps on reseating the Raspberry Pi Compute Module 5. The steps are almost the same as the ones for installing the CM4, except the heat pads don't need to be placed, as they are already there from the previous installation. -->

{% steps %}
{% step "Aligning the CM5" %}
{% image "/static/img/yellow/step-6-poe-align-cm4.jpeg" "Top view of the board, without the module, connectors facing to the right" %}
{% stepContent %}

1. Place the board in front of you, the connectors facing to the right.
2. Orient the CM5: the Raspberry Pi text needs to be on the right hand side.
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

{% endstepContent %}
{% endstep %}

{% step "Placing the heat pads" %}
{% image "/static/img/yellow/cm5-place-heat-pads-02.png" "Top view of the board, showing how to install the heat pads" %}
{% stepContent %}

1. If the packaging included a plastic bag labelled **CM5** with screws and heat pads, place those heat pads on the CM5.
2. Align the pads as shown in the image.
3. Make sure that the pad with the cut off corner is placed so that there is room for the screw.

{% endstepContent %}
{% endstep %}

{% step "Optional: Adding screws" %}
{% image "/static/img/yellow/cm5-place-heat-pads-and-screws-01.png" "Top view of the board, showing how to install the screws" %}
{% stepContent %}

{% include "fragments/notice-dont-use-screws.md" %}

1. If the packaging included a plastic bag labelled **CM5** with screws and heat pads, you have the option to screw the CM5 module in place.
2. Only add screws if you feel the module did not click in place properly.
3. Use a No 1 crosshead screwdriver.
4. Be careful not to overtighten the screws.

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
