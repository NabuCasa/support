---
zendesk:
  article_id: 20902849390493
  name: How to use your Connect ZBT-2 as a Zigbee repeater (router)
  position: 50
  labels: connect-zbt-2, getting-started
productName: Home Assistant Connect&nbsp;ZBT-2
---

If you are looking for a way to strengthen the connection to far-away devices in your home, you can use experimental firmware to turn a Connect ZBT-2 into a Zigbee repeater (also known as a Zigbee Router). This firmware requires more testing, and if you require the utmost stability, do not use this firmware.

**Important note**: if you’re using your Connect ZBT-2 as your Zigbee coordinator (i.e., as the Zigbee adapter connected to your system), you should not use this firmware. When a Connect ZBT-2 is converted into a router, it will not work as a Zigbee coordinator until it is reflashed with the original adapter firmware via the [Open Home Foundation’s Toolbox](https://toolbox.openhomefoundation.org/) website.

**Steps to flash the repeater (router) firmware.**

1. Using a PC, Mac, or Linux device and a modern web browser (Chrome is known to provide better results with more systems), navigate to the [Open Home Foundation’s Connect ZBT-2 Toolbox page](https://toolbox.openhomefoundation.org/home-assistant-connect-zbt-2/).  
2. Plug the Connect ZBT-2 into the system via the included USB cable.  
3. Select “Install Firmware” and then select the “Install Firmware” button.  
4. A pop-up should appear asking which serial device to choose, either the JTAG or ZBT-2 device.  
5. In the next dialogue, choose “Repeater (router)” firmware marked as experimental.  
6. Wait for the flashing process to complete, and do not disconnect the device until prompted to.  
7. Once complete, situate the device where you would like to use it. Then use a USB charger (supplying 5V 1A or more) to power the Connect ZBT-2.  
8. Home Assistant should discover it immediately. If it is not discovered, you can initiate pairing by using a SIM card eject tool to press down the [reset button](/hc/en-us/articles/31369010717213).

## Understanding Repeater Mode

When in repeater mode, the Connect ZBT-2 functions as a Zigbee router device. It does not require Wi-Fi or any other network connection to your Home Assistant; it only needs a Zigbee mesh connection to your controller and a USB power source. This allows you to bridge gaps in your network coverage and add more distant devices to your Zigbee network through this repeater. It is possible to add devices via the repeater [following these steps](https://www.home-assistant.io/integrations/zha/#using-router-devices-to-add-more-devices).
