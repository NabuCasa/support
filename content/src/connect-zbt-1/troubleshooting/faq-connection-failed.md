---
zendesk:
  article_id: 26125034371357
  name: Connection failed
  position: 2
  labels: connect zbt-1, troubleshooting
---

## Symptom

I'm trying to update the Connect&nbsp;ZBT-1 firmware using Ubuntu and Chromium. I get a message that the connection failed.

## Resolution

1. Make sure hot plug support is enabled, [as described in this Ubuntu forum post](https://forum.snapcraft.io/t/chromium-cant-open-serial-port-on-ubuntu-22-04/31139/6)
2. Make sure your user is added to the dialout group: `sudo adduser [username] dialout`
3. Reboot your system.
4. Try again.

## Related topics

- [Ubuntu forum post on enabling hot plug support](https://forum.snapcraft.io/t/chromium-cant-open-serial-port-on-ubuntu-22-04/31139/6)