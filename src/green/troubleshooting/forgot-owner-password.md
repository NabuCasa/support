---
zendesk:
  article_id: 25142896227357
  name: I forgot the owner password for the Home Assistant Green. How can I reset it?
  position: 20
  labels: green, troubleshooting
---

If you forgot the owner's password, you need to connect an external monitor and keyboard to Home Assistant Green and reset the password via the terminal.

1. Connect an external monitor and keyboard to Home Assistant Green.

   - Follow the steps outlined in [Using the console on the HDMI display](/hc/en-us/articles/25153288092829-Using-the-console-on-the-HDMI-display).

2. Reset the password via the terminal.

   - Enter `auth reset --interactive`. It will show you a list of users on the system — select yours, then enter a new password when prompted.

     **Info**: The ha command line does not support all special characters.
     - When resetting via the command line, use a short and simple password without special characters.
     - Once reset, go and replace it with a complex one in the UI.

3. Log in with the new password.

4. Replace the simple password with a complex one.

    - Go to your [User profile](https://my.home-assistant.io/redirect/profile/) and, on the **Security** tab, update the password to a more complex one.

## Related topics

- [Resetting a password via console](https://www.home-assistant.io/docs/locked_out/#to-reset-a-users-password-via-console)
- [Home Assistant command line](https://www.home-assistant.io/common-tasks/os/#home-assistant-via-the-command-line)
- [Using the console on the HDMI display](/hc/en-us/articles/25153288092829)
