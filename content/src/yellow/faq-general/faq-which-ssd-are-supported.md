---
zendesk:
  article_id: 25592245613213
  name: Which SSDs are supported?
  position: 2
  labels: yellow, faq, general
---

Yellow has an **M.2 M-Key** connector which supports **NVMe SSDs** with M-Keying and length of **2230**, **2242**, **2260**, or **2280**.

The Raspberry Pi CM4 has a single lane PCIe 2.0 (Gen 2.0 x1). PCIe is backwards compatible.
NVMe SSDs supporting a newer generation of PCIe or more, supporting multiple lanes, should generally work (e.g. Samsung 970 EVO Plus MZ-V7S500BW with a PCIe Gen 3.0 x4 interface is known to work).
A high-end NVMe is not required, since the CM4 PCIe interface is only Gen 2.0 x1.
A low-cost NVMe is typically good enough.

Check the list of models which have been reported to NOT work currently.