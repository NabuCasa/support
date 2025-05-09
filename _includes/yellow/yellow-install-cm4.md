<!---Installing the Raspberry Pi Compute Module 4-->

{% steps %}
{% step "Unpacking the components" %}
{% image "/static/img/yellow/step-5-poe-unpacked.jpeg" "Clip showing the components laid out, with the case disassembled" %}
{% stepContent %}

- Make sure you have all the components:
  - 1 Raspberry Pi Compute Module 4 (CM4)
  - 1 heat sink
  - 2 thermal pads
  - 2 push pins

{% endstepContent %}
{% endstep %}

{% step "Aligning the CM4" %}
{% image "/static/img/yellow/step-6-poe-align-cm4.jpeg" "Top view of the board, without CM4, connectors facing to the right" %}
{% stepContent %}

1. Place the board in front of you, the connectors facing to the right.
2. Orient the CM4: The CE mark needs to be on the bottom.
3. Use the outline of the chips to help find the correct orientation of the CM4.
   - **Note**: On CM4 Lite variants, the chips on the bottom edge are in a different location.
4. Carefully place the CM4 without force.
   - The CM4 should fall into place slightly when correctly aligned.

{% endstepContent %}
{% endstep %}

{% step "Installing the CM4" %}
{% image "/static/img/yellow/install-cm4-01.webp" "Top view of the board, without CM4, connectors facing to the right" %}
{% stepContent %}

- Press the CM4 board onto the board-to-board connectors until it clicks into place.
  1. Make sure you press on both sides (the two long edges).
     - This requires quite a bit of force.
     - If you don't hear a loud click, it is most likely not fully seated.
  2. Do a visual check to make sure the CM4 is installed correctly.
     - It needs to run parallel to the Home Assistant Yellow board.

{% endstepContent %}
{% endstep %}

{% step "Placing the thermal pads onto the CM4" %}
{% image "/static/img/yellow/step-7-poe-heat-pads-placement_callouts.jpeg" "Top view of the board, with the CM4 installed" %}
{% stepContent %}

1. Remove the protective cover from one side of the square thermal pad.
2. Stick the unprotected side onto the SOC (the silver square next to the raspberry icon).
3. Remove the protective cover from the top side of the thermal pad.
4. Repeat the steps with the rectangular thermal pad. Place it on the memory (the black rectangle next to the SOC).

{% endstepContent %}
{% endstep %}

{% step "Placing the heat sink" %}
{% image "/static/img/yellow/step-8-install-heatsink.webp" "Top view of the board, showing how to install the heat sink" %}
{% stepContent %}

1. Push the 2 plastic push pins into the dedicated hole on the heat sink.
2. Start by first aligning the right plastic push pins into the dedicated hole on the carrier board.
3. Then, place the heat sink onto the CM4.

{% endstepContent %}
{% endstep %}

{% step "Securing the heat sink" %}
{% image "/static/img/yellow/step-9-push-pins-heatsink.webp" "Top view of the board, showing how to fasten the heat sink pins" %}
{% stepContent %}

- Take the entire board off your workplace and push the pins firmly through the carrier board.
- Ensure that the CM4 is still fully seated after securing the heat sink.

{% endstepContent %}
{% endstep %}
{% endsteps %}
