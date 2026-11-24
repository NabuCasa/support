---
zendesk:
  article_id: 40528734420253
  name: "Power and network options"
  position: 40
  labels: connect aux-2
---

Home Assistant Connect AUX-2 takes power from either a Power over Ethernet (PoE) switch or injector, or a USB-C supply. Use one source at a time. Wired Ethernet works with either power source.

| Power source | Wired Ethernet | Wi-Fi |
| --- | --- | --- |
| PoE | Yes, power and network over the same cable | Off |
| USB-C | Yes | Yes, when no Ethernet cable is connected |

## Wired and Wi-Fi together

Wi-Fi is off while Connect AUX-2 has a wired connection, over PoE or Ethernet.

On USB-C power, if you unplug the Ethernet cable, Connect AUX-2 falls back to Wi-Fi, as long as Wi-Fi was set up on it before. On PoE, unplugging the cable also cuts power.

Turning Wi-Fi off doesn't affect Bluetooth.

## Recommendations

- **PoE:** one cable for power and network. Recommended where PoE is available.
- **Wired (PoE or Ethernet):** recommended when using a Connect radio adapter, or when you want the most reliable link.

For electrical figures and the Wi-Fi standard, see [Specifications](/hc/en-us/articles/40528929207453).
