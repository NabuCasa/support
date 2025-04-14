---
zendesk:
  article_id: 25153288092829
  name: Using the console on the HDMI display
  position: 10
  labels: green, troubleshooting
---

Connecting to Home Assistant Green via console may be required for some troubleshooting tasks, such as resetting the owner's password if you are locked out.

## Prerequisites

- Connected Home Assistant Green
- External USB keyboard
- HDMI cable and external monitor

![Image showing the Home Assistant Green with a yellow heartbeat](/static/img/green/green_yellow_heartbeat.webp)

## To use the console on the HDMI display

1. Connect an HDMI monitor to Home Assistant Green.
   ![HDMI monitor connected to Home Assistant Green](/static/img/green/icons/hdmi-monitor.png)

2. Connect a USB keyboard to Home Assistant Green.
   ![USB keyboard connected to Home Assistant Green](/static/img/green/icons/usb_keyboard.png)

3. Check the console.
   - The console should open automatically and show up on the monitor.
   - In the Home Assistant command line, you can now enter a [command](https://www.home-assistant.io/common-tasks/os/#home-assistant-via-the-command-line).
      - For example, if you are locked out, you can change your password:

         `auth reset --username 'existing_user' --password 'new_password'`
      - Log in with the new password.
      - Go to your [User profile](https://my.home-assistant.io/redirect/profile/) and on the **Security** tab, replace the simple password with a complex one.
   ![Clip showing how to use the Home Assistant command line](/static/img/green/home-assistant-cli.webp)

## Related topics

- [Resetting a password via console](https://www.home-assistant.io/docs/locked_out/#to-reset-a-users-password-via-console)
- [Home Assistant command line](https://www.home-assistant.io/common-tasks/os/#home-assistant-via-the-command-line)
