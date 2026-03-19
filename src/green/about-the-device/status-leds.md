---
zendesk:
  article_id: 25210352599197
  name: About the status lights (LEDs) on Home Assistant Green
  position: 20
  labels: green, about-the-device, status
---

Home Assistant Green has 3 LEDs.

- White LED: Power LED
- Green LED: Activity LED
- Yellow LED: Home Assistant Green system health LED

![Clip showing the 3 LEDS on Home Assistant Green](/static/img/green/green_yellow_led_heartbeat.webp)

## Power LED (white)

The power LED indicates whether the system is powered. If the LED is off, check the power supply.

## Activity LED (green)

The activity LED indicates various firmware and boot loader states at startup. Once Home Assistant OS has been started, the green LED indicates activity. Activity is defined as disk (eMMC) or any CPU load.

## System health LED (yellow)

The yellow system health LED blinks in a heartbeat pattern if the Home Assistant Operating System is running.

## Related topics

- [About Home Assistant Green](/hc/en-us/articles/25212448491165/)
- [About interfaces](/hc/en-us/articles/25212058857373)
- [Disabling Home Assistant Green status lights](/hc/en-us/articles/28604790232349)
- [Enabling Home Assistant Green status lights](/hc/en-us/articles/28604867573277)