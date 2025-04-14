---
zendesk:
  article_id: 25454894609693
  name: Using the serial console for debugging (Windows)
  position: 1
  labels: yellow, troubleshooting
---

Connecting to Yellow via serial console can be helpful for troubleshooting. For example, if you need to export a log file.

## To connect the serial console from Yellow to a Windows machine

1. On Windows, install [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html).
2. Open **Device Manager**.
     - Check if there is an entry under **Ports**.
     ![Device Manager: ports](/static/img/yellow/win-device-manager.png)
3. Setup a USB connection:
   - Yellow: USB-C, PC: USB Type-A.
4. The **Device Manager** should refresh and list a new entry under **Ports**.
   - At the end of the entry, you see **COM#**. This is the port Yellow is using.
     ![Device Manager: ports with Yellow](/static/img/yellow/win-device-manager-2.png)
   - **Troubleshooting**: If the device doesn't appear in the Device Manager, check if the jumper JP1 is set to UART:
        1. Power off and unplug Yellow. [Open the case](/hc/en-us/articles/25298668266269-Home-Assistant-Yellow-Kit-with-CM4-and-optional-NVMe).
        2. Make sure JP1 is set to UART.
        3. [Close the case](/hc/en-us/articles/25298668266269-Home-Assistant-Yellow-Kit-with-CM4-and-optional-NVMe).
        4. Connect Yellow to your router again via Ethernet and make sure there is an internet connection.
        5. Plug power back in.
5. Start PuTTY.
    - Under **Connection type**, select the **Serial** radio button.
    - Under **Serial line**, enter the port Yellow is using, for example, **COM3**.
    - Under **Speed**, enter **115200**.
    - If you want to use these settings later again, you can save the session.
    ![Setup session settings in PuTTY](/static/img/yellow/win-putty-session-settings.png)
6. **Optional**: Setup PuTTY logging.
    - Under **Category**, select **Logging**.
    - Select the **Printable output** radio button.
    - Under **Log file name**, enter the path and filename where you want the log files to be stored.
    ![Setup logging settings in PuTTY](/static/img/yellow/win-putty-logging-settings.png)
7. Start PuTTY session
    - To connect to the serial console, select **Open**.
    - **Result**: The serial console opens.
    - Typically, the console does not show anything on start up.
    ![PuTTY: serial connection established](/static/img/yellow/win-putty-2.png)
8. Hit the **Enter** key until prompted for credentials.
    - When **homeassistant login:** appears, enter `root`.
    - No password is required. Hit the **Enter** key.
9. The console offers the Home Assistant CLI under the command `ha`.
    - The command allows to get information about the state of the system. Typically useful commands are:
      - To print the supervisor logs, type `ha supervisor logs`.
      - To print out the network info, type `ha network info`.
10. Rebooting Yellow:
    - In PuTTY, enter `reboot` and press the **Enter** key.
    - **Result**: The system reboots and you can observe the boot logs from start.
    - If logging has been enabled, the boot process is also stored in the configured log file.

## Related topics

- [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
- [Opening and closing the case](/hc/en-us/articles/25298668266269-Home-Assistant-Yellow-Kit-with-CM4-and-optional-NVMe)