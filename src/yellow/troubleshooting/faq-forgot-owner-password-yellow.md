---
zendesk:
  article_id: 25455301907997
  name: I forgot the owner password for the Home Assistant Yellow. How can I reset it?
  position: 10
  labels: yellow, troubleshooting
---


If you forgot the owner's password, you need to reset the password via a terminal.

1. To connect a terminal using a Windows computer, follow the steps on [using the serial console for debugging (Windows)](/hc/en-us/articles/25454894609693-Using-the-serial-console-for-debugging-Windows) up to (and including) step 9.
2. To connect a terminal using a Mac or Linux computer, follow the steps on [using the serial console for debugging (Linux/macOS)](/hc/en-us/articles/25454972435357-Using-the-serial-console-for-debugging-Linux-macOS) up to (and including) step 9.
3. To reset the password, enter `auth reset --username 'existing_user' --password 'new_password'`.
   - **Info**: The ha command line doesn't support all special characters.
     - When resetting via the command line, use a short and simple password without special characters.
     - Once reset, go and replace it with a complex one in the UI.
   - **Example**: To reset the password for the user `yelena` to `12345`, enter `auth reset --username 'yelena' --password '12345'`.

     ![Clip showing how to enter the command into the command line](/static/img/yellow/home-assistant-cli.webp)

4. Log in with the new password.
5. Go to your [User profile](https://my.home-assistant.io/redirect/profile/) and, on the **Security** tab, update the password to a more complex one.

## Related topics

- [Resetting a password via console](https://www.home-assistant.io/docs/locked_out/#to-reset-a-users-password-via-console)
- [Home Assistant command line](https://www.home-assistant.io/common-tasks/os/#home-assistant-via-the-command-line)
- [Using the serial console for debugging (Windows)](/hc/en-us/articles/25454894609693-Using-the-serial-console-for-debugging-Windows)
- [Using the serial console for debugging (Linux/macOS)](/hc/en-us/articles/25454972435357-Using-the-serial-console-for-debugging-Linux-macOS)
