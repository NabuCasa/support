---
zendesk:
  article_id: 34732471944605
  name: How to audit your Home Assistant security certificates
  position: 50
  labels: cloud
---

Home Assistant Cloud uses certificate transparency. This allows for independent third-party auditing to verify that no one else has been issued a certificate for your remote access URL. You can [learn more about our security here](/hc/en-us/articles/26508882007581/). Here are the steps you can take to verify your own Home Assistant certificates:

1. Visit the [Home Assistant Cloud page](https://my.home-assistant.io/create-link/?redirect=cloud) on your Home Assistant system
3. In the Remote Access section, expand the “Security Options” and view the “Certificate Information”  
4. Take note of the Remote Access URL and “Certificate fingerprint”  
5. Now visit a certificate search site like [crt.sh](https://crt.sh/)   
6. Put in your Remove Access URL into the search (it will end with ui.nabu.casa)  
7. Then check if the fingerprint matches the “SHA-1” number listed on the latest certificate
