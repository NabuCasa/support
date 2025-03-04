---
zendesk:
  article_id: 25455225584541
  name: My Home Assistant Yellow lights up the red LED only. What can I do?
  position: 15
  labels: yellow, troubleshooting
---


**Note**: The resolution described below only applies to revision 1.2 and older. Starting with revision 1.3, there is no JP2 jumper that could cause this issue.

Most likely your Compute Module is in USB boot mode. Make sure that the jumper JP2 is not connected. This means the jumper is only touching one of the pins, not both.

![Image showing the location of the jumper JP2 on a Yellow board version 1.2](/static/img/yellow/faq-check-jp2.jpeg)
