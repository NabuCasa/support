---
zendesk:
  article_id: XXXXXXXXXXXXX
  name: How to audit your Home Assistant security certificates
  position: 50
  labels: cloud
---

You can validate that there are no [man-in-the-middle attacks (MITM)](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) happening to your Home Assistant Cloud connection by doing the following:

1. Visit the [Home Assistant Cloud page](https://my.home-assistant.io/create-link/?redirect=cloud) on your Home Assistant system
3. In the Remote Access section, expand the “Security Options” and view the “Certificate Information”  
4. Take note of the Remote Access URL and “Certificate fingerprint”  
5. Now visit a certificate search site like [crt.sh](https://crt.sh/)   
6. Put in your Remove Access URL into the search (it will end with ui.nabu.casa)  
7. Then check if the fingerprint matches the “SHA-1” number listed on the latest certificate
