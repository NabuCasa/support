---
zendesk:
  article_id: 26508882007581
  name: Remote UI - security aspects
  position: 8
  labels: cloud
---


Making a secure solution is a challenge. In this section, we want to discuss the things we do to improve security, what weaknesses there are in our approach, and how we plan to solve them.

Our approach is secure because:

- All data is encrypted between your browser and your local instance. The local instance has generated and owns the certificate. Therefore, only the local instance will be able to decrypt the incoming traffic.
- Once a user is communicating with their Home Assistant instance, they will have to log in with their local credentials. These credentials are only stored locally and cannot be impersonated by anyone.

Before we talk about weaknesses, know that we will never abuse any weakness unless forced by a government entity. Our approach has one single weakness that is unavoidable: since we own the domain that hosts the remote connection, we are able to issue our own certificate and [man-in-the-middle attack (MITM)](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) remote connections. This would allow us to see all data passing through, including authentication tokens.

It is not going to be possible to avoid MITM attacks. However, it is possible to spot them:

- You can validate that there is no MITM happening by making sure that the certificate fingerprints matches with the local instance certificate fingerprint. You can find the fingerprint by looking at the certificate info in the cloud configuration page inside Home Assistant.
- Let's Encrypt takes part of the experimental internet security standard [Certificate Transparency (CT)](https://en.wikipedia.org/wiki/Certificate_Transparency). The standard creates a system of public logs that will record all certificates issued, allowing local Home Assistant instances to spot if their certificate is being impersonated. We're exploring how to automatically audit this on the local instance.

## Insecure versions

Home Assistant instances known to have security issues to connect to the Cloud are blocked from using the remote UI feature. This helps in securing your Home Assistant instance.

Updating your Home Assistant instance to a secure version will allow it to be accessible via Remote UI once again.

If you cannot update to the latest version of Home Assistant right now and are certain that your instance is safe, you can disable this protection. You do this at your own risk! You can manage this on your [Nabu Casa account page](https://account.nabucasa.com).

Please note, such a block only affects the remote UI feature, all other Cloud features will keep functioning normally.
Amazon Alexa, Google Assistant, TTS and Webhooks will continue to work during a security block.

If this protection has been manually disabled and the Home Assistant Team has identified a new insecure version, it will automatically re-enable the protection by itself. This ensures you are protected if new security issues are found in the future, as quickly as possible.

Currently blocked versions of Home Assistant:

- Home Assistant Core 2021.1.4 and older. [More information](https://www.home-assistant.io/blog/2021/01/23/security-disclosure2/).

## Related topics

- [Enabling remote access to Home Assistant (Remote UI)](/hc/en-us/articles/26474279202973/)
- [Remote UI - deep dive](/hc/en-us/articles/25619268678557/)