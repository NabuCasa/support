---
zendesk:
  article_id: 25938245892765
  name: Connecting a sensor to the Grove port
  position: 2
  labels: voice pe, customizing
---

Connecting a sensor to the Grove port of the device allows the sensor to use the device's power supply and Wi-Fi connection. Home Assistant can then detect the sensor and start using it. This page provides configuration details for a few selected sensors.

>Notice
>
>Risk of damage to equipment
>
>Connecting devices to the Grove port and reassembling your own firmware can void the warranty.

## Prerequisites

- Home Assistant Voice Preview Edition set up and running in Home Assistant
- Opened the Grove port
- Have one or more external sensors, such as:
  - [M5Stack SHT40-BMP280](https://shop.m5stack.com/products/env-iv-unit-with-temperature-humidity-air-pressure-sensor-sht40-bmp280) temperature, humidity, air pressure sensor
  - [M5Stack PIR](https://shop.m5stack.com/products/pir-module) motion sensor
  - [M5Stack SGP30](https://shop.m5stack.com/products/tvoc-eco2-gas-unit-sgp30) TVOC, eCO2 gas sensor
  - [M5Stack BH1750](https://shop.m5stack.com/products/dlight-unit-ambient-light-sensor-bh1750fvi-tr) ambient light sensor
- If you are adding more than one sensor, you need an expansion unit like this [Grove hub](https://shop.m5stack.com/products/mini-hub-module?srsltid=AfmBOooKdCNWJPf90Wr25-jC_8QqbrVeqc3gzZ678-yi4396Cc1q792_)

   ![Detail view of the grove port](/static/img/voice-pe/voice_grove_port_detail.png)

## To connect a sensor to the grove port

1. Taking control of the device in the ESPHome add-on.
   1. Go to [**Settings** > **Add-ons**](https://my.home-assistant.io/redirect/supervisor_addon/?addon=5c53de3b_esphome) and install the **ESPHome Device Builder** add-on.
   2. Start the add-on and select **Open web UI**.
   3. On the **Home Assistant Voice** card, select **Take control**, and follow the steps of the installer.

   ![Screenshot showing the ESPHome add-on UI](/static/img/voice-pe/voice_esphome_take_control.png)

2. Installing a new device configuration.
   1. To open the device configuration file, on the **Home Assistant Voice** card, select **Edit**.
   2. In the configuration file, under packages, add the configuration for the sensor.
      - In this example, we are adding the configuration for the [M5Stack SHT40-BMP280 temperature, humidity, air pressure sensor](https://shop.m5stack.com/products/env-iv-unit-with-temperature-humidity-air-pressure-sensor-sht40-bmp280).

      ```yaml
      packages:
        grove-i2c: github://esphome/home-assistant-voice-pe/modules/grove-i2c.yaml
      sensor:
        - platform: sht4x
          i2c_id: grove_i2c
          temperature:
            name: Temperature
          humidity:
            name: Humidity

        - platform: bmp280_i2c
          i2c_id: grove_i2c
          address: 0x76
          pressure:
            name: Pressure
      ```

      - For other sensors, refer to the section on [Configuration data for selected sensors](https://voice-pe.home-assistant.io/guides/grove_port/#configuration-data-for-selected-sensors).

   3. Now, you need to recompile the firmware with the new configuration settings. To start the process, select **Install**.
   4. Wait for the compilation to complete. Depending on your hardware, this may take a while.

   ![Screenshot showing voice yaml configuration file](/static/img/voice-pe/voice_esphome_device_config.png)

3. Connecting the sensor to the Grove port.
   1. Disconnect the device from power.
   2. Connect the sensor to the Grove port.
      - Mind the color coding. Make sure the black cable is connected to the ground (GND) pin.
   3. Reconnect the device to the power supply.

   ![Image showing a sensor connected to the grove port](/static/img/voice-pe/voice_grove_port_sensor_connected_small.jpg)

4. Opening the ESPHome integration page.
   1. Go to [**Settings** > **Devices & services**](https://my.home-assistant.io/redirect/integrations/) and select the **ESPHome** integration.
   2. From the list, under **Home Assistant Voice**, select **Device**.

   ![Screenshot showing the device list of the ESPHome integration](/static/img/voice-pe/voice_esphome.png)

5. Viewing the sensor data.
   - On the device page, under **Sensors** you can view the new sensor data.

   ![Screenshot showing sensor data](/static/img/voice-pe/voice_grove_port_sensor_data.png)

## Configuration data for selected sensors

### Example 1: PIR motion sensor

Configuration for the [M5Stack PIR](https://shop.m5stack.com/products/pir-module) motion sensor.

  ```yaml
  packages:
    grove-power: github://esphome/home-assistant-voice-pe/modules/grove-power.yaml
  binary_sensor:
    - platform: gpio
      pin:
        number: 2
      name: Motion
      device_class: motion
  ```

### Example 2: SGP30 TVOC, eCO2 gas sensor

Configuration for the [M5Stack SGP30](https://shop.m5stack.com/products/tvoc-eco2-gas-unit-sgp30) TVOC, eCO2 gas sensor.

  ```yaml
  packages:
    grove-i2c: github://esphome/home-assistant-voice-pe/modules/grove-i2c.yaml
  sensor
    - platform: sgp30
      i2c_id: grove_i2c
      tvoc:
        name: "TVOC"
      eco2:
        name: "eCO2"
  ```

### Example 3: BH1750 ambient light sensor

Configuration for the [M5Stack BH1750](https://shop.m5stack.com/products/dlight-unit-ambient-light-sensor-bh1750fvi-tr) ambient light sensor.

  ```yaml
  packages:
    grove-i2c: github://esphome/home-assistant-voice-pe/modules/grove-i2c.yaml
  sensor:
    - platform: bh1750
      i2c_id: grove_i2c
      name: "Light Intensity"
  ```

## Related topics

- [M5Stack SHT40-BMP280](https://shop.m5stack.com/products/env-iv-unit-with-temperature-humidity-air-pressure-sensor-sht40-bmp280) temperature, humidity, air pressure sensor
- [M5Stack PIR](https://shop.m5stack.com/products/pir-module) motion sensor
- [M5Stack SGP30](https://shop.m5stack.com/products/tvoc-eco2-gas-unit-sgp30) TVOC, eCO2 gas sensor
- [M5Stack BH1750](https://shop.m5stack.com/products/dlight-unit-ambient-light-sensor-bh1750fvi-tr) ambient light sensor