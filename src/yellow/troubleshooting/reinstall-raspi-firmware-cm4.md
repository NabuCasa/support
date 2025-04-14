---
zendesk:
  article_id: 25455063533853
  name: Green LED flashes 4 times short and 5 times long
  position: 1
  labels: yellow, troubleshooting
---

## Symptom

You have a Home Assistant Yellow with a Compute Module 4 and the green LED flashes 4 times short and 5 times long.

## Cause: firmware error

This LED pattern indicates a firmware error on the Compute Module 4 (CM4).

## Resolution

To resolve this issue, you need to reinstall the Raspberry Pi bootloader onto the CM4.

### To reinstall the Raspberry Pi EEPROM firmware on CM4

1. Open the procedure on [Re-install the operating system on CM4](/hc/en-us/articles/25484982657309-Reinstall-the-Home-Assistant-Operating-System-on-Raspberry-Pi-CM4).
2. Follow steps 1–7 of the section **Option 2: Reinstall Home Assistant OS using rpiboot**.
3. On Windows, open the Command Prompt window (cmd).
4. Run the following commands:

    ```text
    cd \
    cd "Program Files (x86)"
    cd "Raspberry Pi"
    rpiboot.exe -d recovery
    ```

    **Result**: The green LED lights up solid, then starts flashing.

5. Wait for about 1 minute.
6. Then, from Home Assistant Yellow, unplug the power cable.
7. Ensure JP1 is set to UART.
8. On Home Assistant Yellow, connect the power cable.
   - **Result**: The error blink pattern should no longer occur.
     - The LED pattern depends on what is already installed on Yellow.
     - Typically, the system should boot now.
     - If Home Assistant OS is installed, the yellow LED should show a heartbeat pattern after ~5 seconds.

       ![Clip showing the yellow LED blinking in a heartbeat pattern](/static/img/yellow/yellow_heartbeat_yellow_led.webp)

## Related topics

- [Re-installing the operating system on CM4](/hc/en-us/articles/25484982657309-Reinstall-the-Home-Assistant-Operating-System-on-Raspberry-Pi-CM4)