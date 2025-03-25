---
zendesk:
  article_id: 25938342327581
  name: About the internal GPIO pins
  position: 5
  labels: voice pe, customizing
---

If you open the device, you can access 2 sets of GPIO pins. The image below shows pin header groups 1 and 2, located on the board. This page also describes the pins of the Grove port which you can access from the outside of the device.

 ![Image showing location of pin header groups 1 and 2 on the board](/static/img/voice-pe/voice_pe_internal_pin_headers.jpg)

>**Notice**
>
>**Risk of damage to equipment**
>
>Opening the device and connecting to the GPIO pins voids the warranty.

## GPIO Pin header group 1: Pin header in corner

### Pin assignments

- `IO47`, `GND`
- `IO42`, `RGBOUT`
- `IO41`, `RGBIN`
- `IO40`, `IO48`

> **Notice**: Risk of damaging VPE components due to high current.
> Current drawn from GPIO pins should be limited to 20 milliampère (mA) or damage to the ESP32-S3 may occur.

### RGBIN/RGBOUT pins

- The `RGBIN/RGBOUT` pins are connected to the LEDs in the LED ring on top.
- They could be used to connect additional WS2812-type LEDs.
- `RGBIN` is connected to the input of the first LED in the ring.
- `RGBOUT` is connected to the output from the last LED in the ring.

 ![Image showing location of pin header group 1 on board](/static/img/voice-pe/voice_pe_internal_pin_group_01.jpg)

## GPIO Pin header group 2: Pin header in board center

### Pin assignments**

- `+3.3 V`, `+5 V`
- `IO02`, `IO39`
- `IO01`, `IO38`
- `RXD`, `TXD`

### Power pins (+5 V, +3.3 V)**:

  > **Notice**: Risk of damaging VPE components due to high current.
  >
    > **Mind the power limitations**:
    >
    >  - The amount of power you can draw from the power pins (+5 V, +3.3 V) on these headers depends on the capabilities of the power supply you are using; most common USB power supplies can supply either 1, 2, or 3 amps.
    >  - Reputable power supplies will be labeled with their capabilities (voltage, current).
    >  - Regardless of the power supply, do not attempt to draw more than 2 amps (total) from the +5 V and +3.3 V pins. Drawing more current than this from these pins may cause damage to components in the VPE, causing it to stop working.
    >  - If you attempt to draw more current than your USB power supply can handle, it may become very hot and/or unexpectedly switch off.
    > - Be sure that you  do not exceed the capabilities of your USB power supply/port.

### ESP32-S3 TXD and RXD pins

- The ESP32-S3’s `U0TXD` and `U0RXD` (serial/UART) pins are not used by the firmware shipped with the Home Assistant Voice Preview Edition.
- If you want to watch logs and/or reinstall the ESP32-S3, use the built-in USB port.

 ![Image showing location of pin header group 2 in the center of the board](/static/img/voice-pe/voice_pe_internal_pin_group_02_center.jpg)

## GPIO pin header group 3: Grove port

### Pin assignments

- `SCL`, `SDA`, `5V`, `GND`

> **Notice**: Risk of damaging VPE components due to high current.
>
>  - Current drawn from GPIO pins should be limited to 20 milliamps (mA) or damage to the ESP32-S3 may occur.

### +5V pin power switching

- The Grove expansion port has a “load switch” on its +5 V pin.
- This is controlled by the ESP32-S3’s GPIO pin 46.
- Power is not available on the Grove port’s +5 V pin unless this GPIO pin is switched on (high).

 ![Image showing location of the Grove port](/static/img/voice-pe/voice_pe_internal_pin_group_03_grove_port.jpg)

## Related topics

- [Disassembling the device](/hc/en-us/articles/25938306296605)
- [Reassembling the device](/hc/en-us/articles/25938314528285)
- [Connecting a sensor to the Grove port](/hc/en-us/articles/25938314528285)
