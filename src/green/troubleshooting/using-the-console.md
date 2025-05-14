---
zendesk:
  article_id: 25153288092829
  name: Using the console on the HDMI display
  position: 10
  labels: green, troubleshooting
---

Connecting to Home Assistant Green via console may be required for some troubleshooting tasks, such as resetting the owner's password if you are locked out.

## Prerequisites

{% steps %}
{% prereq %}
{% image "/static/img/green/green_yellow_heartbeat.webp" "Image showing the Home Assistant Green with a yellow heartbeat" %}
{% stepContent %}

- Connected Home Assistant Green
- External USB keyboard
- HDMI cable and external monitor

{% endstepContent %}
{% endprereq %}
{% endsteps %}

## To use the console on the HDMI display

{% steps %}
{% step "Connecting a monitor via HDMI" %}
{% image "/static/img/green/icons/hdmi-monitor.png" "HDMI monitor connected to Home Assistant Green" %}
{% stepContent %}

- Connect a monitor via HDMI to Home Assistant Green.

{% endstepContent %}
{% endstep %}

{% step "Connecting a USB keyboard" %}
{% image "/static/img/green/icons/usb_keyboard.png" "USB keyboard connected to Home Assistant Green" %}
{% stepContent %}

- Connect a USB keyboard to Home Assistant Green.
- The console should open automatically and show up on the monitor.

{% endstepContent %}
{% endstep %}

{% step "Checking the console" %}
{% image "/static/img/green/home-assistant-cli.webp" "Clip showing how to use the Home Assistant command line" %}
{% stepContent %}

1. In the Home Assistant command line, you can now enter a [command](https://www.home-assistant.io/common-tasks/os/#home-assistant-via-the-command-line).
   - For example, if you are locked out, you can change your password:

      ```shell
      auth reset --username 'existing_user' --password 'new_password'
      ```

2. Log in with the new password.
3. Go to your [User profile](https://my.home-assistant.io/redirect/profile/) and on the **Security** tab, replace the simple password with a complex one.

{% endstepContent %}
{% endstep %}
{% endsteps %}

## Related topics

- [Resetting a password via console](https://www.home-assistant.io/docs/locked_out/#to-reset-a-users-password-via-console)
- [Home Assistant command line](https://www.home-assistant.io/common-tasks/os/#home-assistant-via-the-command-line)
