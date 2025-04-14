---
zendesk:
  article_id: 25455205167517
  name: My Home Assistant Yellow appears broken, no LED is lighting up.
  position: 15
  labels: yellow, troubleshooting
---


The Compute Module 4 or 5 might not be seated correctly.

1. [Open the Yellow case](/hc/en-us/articles/25298668266269-Home-Assistant-Yellow-Kit-with-CM4-and-optional-NVMe) and check if the green PCB (CM4 or CM5) is parallel to the Yellow PCB.

![Image showing a side view close up of the alignment of the compute module on the Yellow board](/static/img/yellow/faq-unseated-side-view.jpeg)

2. If this is not the case, check if the compute module is well aligned with the white outline on the Yellow PCB.
   - If the module **is not aligned**, align it first before pressing onto the heat-sink.
     - For that you will have to remove the heat-sink first.
   - If the green PCB **is aligned**, press onto the heat-sink on the two marked spots (centered above the CPU/SoC) to snap the green compute module in place.

![Image showing where to press on the heat sink to press it into place](/static/img/yellow/faq-unseated-cm4-heat-sink-press.jpeg)