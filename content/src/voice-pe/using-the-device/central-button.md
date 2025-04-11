---
zendesk:
  article_id: 25774619221661
  name: Using the center button to trigger automations
  position: 6
  labels: voice pe, operation, using the device, color change, led
---

The center button is mainly used to abort current tasks running on the device (a timer ringing, music playing), or to converse without saying the wake word. In addition, the device supports more complex button presses. You can use these to start automations.

The following button presses are supported:

- Double press
- Triple press
- Long press

<div class='videoWrapper'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4QszFcwWYNY" frameborder="0" videotitle="Home Assistant Voice Preview Edition: Voice button press automations" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" controls></iframe>
</div>

## To use the center button to trigger automations

- Create an automation for the button press.
  - To set up an automation based on a button press pattern (for example, long press), follow the steps on [automating on a button press](https://www.home-assistant.io/integrations/event/#automating-on-a-button-press).
  - **Info**: Those instructions are based on a Matter device.
  - The process is very similar for a voice device.

  Click the image to view the video on Youtube.

  [![Link to Youtube video showing how to use the button for automations](https://img.youtube.com/vi/4QszFcwWYNY/0.jpg)](https://www.youtube.com/watch?v=4QszFcwWYNY)

## Related topics

- [Automating on a button press](https://www.home-assistant.io/integrations/event/#automating-on-a-button-press)
- [Event entities](https://www.home-assistant.io/integrations/event/)
- [Using the center button to stop the current process](/hc/en-us/articles/25774498553629-Stopping-the-current-process)