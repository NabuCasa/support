---
zendesk:
  article_id: 25209783508125
  name: Starting up the device
  position: 10
  labels: green, getting started
---

There are 2 different start up procedures, depending on the current state of your system.

- [Starting up if the system is still connected to power and Etherent](#starting-up-the-system-if-it-is-still-connected-to-ethernet-and-power)
- [Starting up if the system has been disconnected ](#starting-up-the-system-if-it-has-been-disconnected)

## Prerequisites

- Home Assistant Green with power and Ethernet cable
- Home Assistant Green has previously been set up, but was powered off temporarily
- You have your Home Assistant credentials
- If these conditions are not met, or this is your first time using Home Assistant Green, instead, follow the [getting started](/hc/en-us/articles/24737667232413-Getting-started-with-Home-Assistant-Green) procedure.

![Image showing the Home Assistant Green with power supply and Ethernet cable](/static/img/green/green_getting-started_prereq.png)

## Starting up the system if it is still connected to Ethernet and power

1. Powering up the system.
   - Press the power button.
   - Once the yellow LED blinks in a heard beat pattern, the system is ready.

   ![Clip showing how to plug i the Ethernet cable](/static/img/green/green_connect_ethernet.webp)

2. Connect to Home Assistant.
   - Select your Home Assistant server:
      - **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196:8123`
      - **Desktop**: Visit [http://homeassistant.local:8123](http://homeassistant.local:8123) to access the Home Assistant user interface.

   ![Screenshot showing a Home Assistant dashboard](/static/img/green/lovelace.png)

## Starting up the system if it has been disconnected

Follow these steps if you want to start up the system after it has been powered off.

1. Connect the device to the Internet.
   - Plug in your Ethernet cable and make sure it is locked into place.
   - Connect the other end of the Ethernet cable to your router or switch.

   ![Clip showing the where to press the button on the device](/static/img/green/green_reset_power-up_heartbeat.webp)
2. Connect the power to the electrical outlet and then to the Home Assistant Green.

   ![Clip showing the where to press the button on the device](/static/img/green/green_connect_power.webp)

3. Connect to Home Assistant.
   - Select your Home Assistant server:
      - **Mobile**: Confirm the IP address detected by the app. For example `http://192.168.1.196:8123`
      - **Desktop**: Visit [http://homeassistant.local:8123](http://homeassistant.local:8123) to access the Home Assistant user interface.

   ![Screenshot showing a Home Assistant dashboard](/static/img/green/lovelace.png)

## Related topics

- [Getting started](/hc/en-us/articles/24737667232413-Getting-started-with-Home-Assistant-Green)
- [Shutting down the device](/hc/en-us/articles/25207565119133-Shutting-down-the-device)
- [About the LEDs](/hc/en-us/articles/25210352599197-About-the-LEDs)
