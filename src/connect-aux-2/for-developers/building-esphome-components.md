---
zendesk:
  article_id: 40529049225117
  name: "Building ESPHome components"
  position: 20
  labels: connect aux-2
---

{% callout "important" %}

Firmware you build yourself is for personal use and isn't supported by Nabu Casa. Nabu Casa support can't help with custom configurations, including Grove sensors. While Connect AUX-2 runs your own firmware, it doesn't receive over-the-air firmware updates from Nabu Casa. To return to the supported firmware at any time, reinstall the factory firmware. See [Custom firmware and restoring factory firmware](/hc/en-us/articles/40528961462941).

{% endcallout %}

Home Assistant Connect AUX-2 has an unlocked bootloader, so you can test your own ESPHome component for serial or Modbus on it.

1. Compile ESPHome with your custom component for Connect AUX-2, starting from the [firmware source](https://github.com/NabuCasa/aux-2).
2. Use [ewt-gen](https://github.com/esphome/ewt-gen) to offer a web-based installer for your firmware. You can automate this with the [example GitHub Actions workflow](https://github.com/esphome/ewt-gen/blob/main/.github/workflows/website.yml).

To return to the factory firmware, see [Custom firmware and restoring factory firmware](/hc/en-us/articles/40528961462941).

## Related ESPHome components

- [SDS011 air-quality sensor](https://esphome.io/components/sensor/sds011/)

## Consider an integration instead

Home Assistant prefers generic ESPHome-based proxies, with the protocol knowledge living in Home Assistant. With that split, new device protocols reach users through Home Assistant updates or the Home Assistant Marketplace, without a firmware upgrade on the ESPHome device. This is part of the Open Home Foundation's [Proxy all the things](https://www.openhomefoundation.org/blog/proxy-all-the-things-no-device-left-behind/) effort.

If you have an ESPHome component today, consider how it would work as a Home Assistant integration. If your ESPHome device isn't time-constrained and has no other requirements that need protocol knowledge on the device, consider running the stock Connect AUX-2 firmware and moving the device logic into Home Assistant. See [Building serial and Modbus integrations](/hc/en-us/articles/40529019010717).
