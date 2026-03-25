---
zendesk:
  article_id: 34864561522845
  name: How to use your Connect ZWA-2 as a Z-Wave repeater
  position: 90
  labels: connect zwa-2, getting started
---

If you need to strengthen the Z-Wave mesh connection to far-away nodes in your smart home, you can use the experimental firmware to turn a Connect ZWA-2 into a dedicated Z-Wave Repeater.

**Important Note:** If you are currently using your Connect ZWA-2 as your primary Z-Wave Controller (the interface connected to your Home Assistant or smart home hub), do not use this firmware. If you are looking to use your Connect ZWA-2 as a coordinator but placed away from your Home Assistant system, please [read more about Portable Z-Wave](https://www.home-assistant.io/blog/2025/10/13/portable-z-wave-with-wifi-and-poe/). Once converted into a repeater, the device will no longer function as a controller until it is reflashed with the original firmware via the [Open Home Foundation’s Toolbox](https://toolbox.openhomefoundation.org/) website.

## Steps to flash the repeater firmware

1. Using a PC, Mac, or Linux device and a modern web browser (Chrome is recommended for the best serial communication support), navigate to the [Open Home Foundation’s Connect ZWA-2 Toolbox](https://toolbox.openhomefoundation.org/home-assistant-connect-zwa-2/) page.  
2. Plug the Connect ZWA-2 into your computer using the included USB cable.  
3. Select “Install Firmware” and then click the “Install Firmware” button.  
4. A pop-up will appear asking you to select a serial device. Choose the entry corresponding to your Connect ZWA-2 device.  
5. In the next dialogue, select the “Repeater” firmware (marked as experimental).  
6. Wait for the flashing process to complete. Do not disconnect the device until the browser indicates the process is finished.  
7. Once complete, unplug the device and move it to the location where you need to extend your range. Use a standard USB power adapter (supplying 5V 1A or more) to power the Connect ZWA-2.  
8. To have your Connect ZWA-2 repeater discovered, you must initiate Inclusion Mode on your controller and then use a SIM card eject tool to press the reset button on the ZWA-2 to put it into pairing mode.

### Understanding repeater mode

When in repeater mode, the Connect ZWA-2 functions as a routing node. It does not require Wi-Fi or any other network connection to your Home Assistant; it only needs a Z-Wave mesh connection to your controller and a USB power source. This allows you to bridge gaps in your network coverage and add more distant devices to your Z-Wave network through this repeater. Connect ZWA-2 can work with any brand of Z-Wave controller and operates as a standard Z-Wave device.

As Z-Wave Long Range is not a mesh standard, it cannot take advantage of repeaters. If you would like to instead move your Connect ZWA-2 to a better location in your home to better reach Long Range devices, please look at the [Portable Z-Wave solution](https://www.home-assistant.io/blog/2025/10/13/portable-z-wave-with-wifi-and-poe/).
