---
zendesk:
  article_id: 33070434152221
  name: Cannot login to Home Assistant
  position: 90
  labels: cloud, troubleshooting
---


## Symptom

I can login to my [Nabu Casa Cloud account](https://account.nabucasa.com/) using my email address and password, but I cannot log in directly to Home Assistant.

![Home Assistant Login dialog](/static/img/cloud/cannot-login-to-home-assistant.png)

## Cause

Your Home Assistant server login credentials are not the same as your Nabu Casa Cloud account credentials. The accounts have different functions.

- The Home Assistant login gives you access to your own, local Home Assistant server, such as a [Home Assistant Green](https://www.home-assistant.io/green/).
- Home Assistant Cloud allows you to safely access your Home Assistant server from a remote location, outside your network.
  - For more information on Home Assistant Cloud, refer to the ([list of Home Assistant Cloud features](/hc/en-us/articles/26260474250269)).

## Resolution

To login to Home Assistant, follow these steps:

- If you are the administrator and forgot your Home Assistant user name, follow the steps under [forgot username](https://www.home-assistant.io/docs/locked_out/#forgot-username).
- If you know your Home Assistant user name but forgot the password, follow the steps under [forgot password](https://www.home-assistant.io/docs/locked_out/#forgot-password).

## Related topics

- [Forgot Home Assistant username](https://www.home-assistant.io/docs/locked_out/#forgot-username)
- [Forgot Home Assistant password](https://www.home-assistant.io/docs/locked_out/#forgot-password)
- [About Home Assistant user profiles and authentication](https://www.home-assistant.io/docs/authentication/)