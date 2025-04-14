---
zendesk:
  article_id: 25140903526301
  name: I can’t access the system via http://homeassistant.local:8123, what can I do?
  position: 1
  labels: green, troubleshooting
---

1.  If [http://homeassistant.local:8123](http://homeassistant.local:8123) doesn't work, try [http://homeassistant:8123](http://homeassistant:8123). If that does not help, you may be able to find the IP address of Home Assistant Green on your router. The URL will be `http://<IP ADDRESS>:8123`.

2.  Check if the Home Assistant Green is plugged in and the yellow LED blinks in a heartbeat pattern. For more information on the LED patterns, see [Home Assistant Green LEDs](https://green.home-assistant.io/documentation/green-leds/).

    ![Clip showing the yellow LED blinking in a heartbeat pattern](/static/img/green/green_yellow_led_heartbeat.webp)

3.  Check if the LED on the Ethernet port is active. If it is not active, try the following:

    1.  Try using a different port on your router.

    2.  Try using a different Ethernet cable.
