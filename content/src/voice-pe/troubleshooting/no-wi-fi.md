---
zendesk:
  article_id: 25800488193949
  name: Can’t connect to Wi-Fi during onboarding
  position: 8
  labels: voice pe, troubleshooting, Wi-Fi
---

## Symptom

During onboarding of the device, you cannot connect the device to your Wi-Fi.

## Resolution

Try the following steps:

1. On your phone, make sure Bluetooth is enabled.
2. Make sure the Home Assistant Companion App has Bluetooth permission:
   - On iPhone, go to **Settings** > **Privacy & Security** and enable **Bluetooth** for Home Assistant.
   - If you are using an Android phone, make sure precise location is enabled.
     - Go to **Settings** > **Apps** > **Home Assistant** > **Permissions** and enable **Location**, **Allow all the time**, and **Use precise location**.
3. If you have different SSIDs (Wi-Fi names) for the 2.4&nbsp;GHz and the 5&nbsp;GHz Wi-Fi networks, make sure you use the credentials for the 2.4&nbsp;GHz network.
4. If you are using a Bluetooth proxy:
   - Make sure the proxy is close to the device and to the Home Assistant server.
   - If it still does not work, try a different Bluetooth proxy.
