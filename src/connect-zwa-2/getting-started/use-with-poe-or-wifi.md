---
zendesk:
  article_id: 28670213533213
  name: Use your Connect ZWA-2 over Wi-Fi or PoE
  position: 90
  labels: connect zwa-2, getting started
---

This guide explains how to use the **Portable Z-Wave** feature for the **Home Assistant Connect ZWA-2**. This experimental firmware allows you to place your Z-Wave adapter anywhere in your home — far-away from your Home Assistant server—by communicating over Wi-Fi or Ethernet (PoE).

## **Overview**

Standard Z-Wave adapters must be plugged directly into the USB port of your hub. Portable Z-Wave breaks this limitation by using the built-in ESP32-S3 chip inside the ZWA-2 to handle latency-sensitive communication, forwarding the rest of the data over your local network via ESPHome.

Portable Z-Wave is designed to be highly compatible and interference-free. Because Z-Wave and Wi-Fi operate on entirely different radio frequencies, using the ZWA-2 over Wi-Fi will not cause wireless interference. 

## **Configuration Options**

You can deploy Portable Z-Wave in two ways:

* **Wi-Fi Mode:** The ZWA-2 uses its internal Wi-Fi chip. You only need a USB power source (5V 1A).  
* **PoE Mode:** The ZWA-2 is plugged into an external development board (such as the Waveshare ESP32-S3-ETH) that supports Power-over-Ethernet.

## **Installation Steps**

1. Visit the [Open Home Foundation’s Connect ZWA-2 Toolbox website](https://toolbox.openhomefoundation.org/home-assistant-connect-zwa-2/).  
2. Plug the adapter into your computer using the included USB cable.  
3. Select the Portable Z-Wave installation option. The toolbox’s wizard will guide you through connecting the device to your network.  
4. Once flashed and connected, Home Assistant should automatically discover the device via the ESPHome and Z-Wave integrations.  
5. Final Placement:    
   * **For Wi-Fi**: Move the ZWA-2 to its permanent location and plug it into a USB power adapter.  
   * **For PoE:** Connect the ZWA-2 to your PoE-capable development board and plug in the Ethernet cable.

**Using this with other systems**

Additionally, this setup is not strictly limited to Home Assistant; it is compatible with any platform running Z-Wave JS v15.15.0 or higher by connecting to the device address esphome://\<IP\_OF\_THE\_ZWA-2\>.
