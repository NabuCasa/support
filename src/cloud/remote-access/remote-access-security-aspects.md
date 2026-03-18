---
zendesk:
  article_id: 26508882007581
  name: Remote access - Security aspects
  position: 50
  labels: cloud
---

Remote access is secured with end-to-end encryption; your data stays encrypted from your Home Assistant instance to your device, even when passing through our servers. This prevents us or other parties from seeing your data. 

Home Assistant uses an automated process to request security certificates from a trusted third party. This secure certificate is issued by [Let's Encrypt](https://letsencrypt.org/about/) and is only shared with you. This private key is only stored on your Home Assistant system. Because of this, if you ever lose access, not even Nabu Casa can restore access to your system (see our tips on [regaining access to your system](/hc/en-us/articles/33070434152221)).

You don't have to take our word on this; our certificate requesting code that obtains the certificate is open-source, and certificate transparency services allow for independent third-party auditing that no one else has been issued a certificate for your remote access URL.

## Security Caveats

Our security model is one of the best approaches available for securing your Home Assistant system. However, it is naive to say that any system is perfect, and this guide is to help you understand some extra steps you can take to ensure your system is secure.

### Man-in-the-middle attack mitigations

Whenever you trust a service like a VPN, secure tunnel, or remote connection (including Home Assistant Cloud) to carry the traffic from one device to another, there is one specific attack vector that can occur. This is specifically the [man-in-the-middle attack (MITM)](https://en.wikipedia.org/wiki/Man-in-the-middle_attack), where an untrustworthy party can create false encryption certificates to break in and view the data they’re entrusted to carry. Though it is complex for a bad actor to achieve, it is still possible. 

To allow you to check if you are being targeted by a man-in-the-middle attack, we use an internet security standard called [Certificate Transparency (CT)](https://en.wikipedia.org/wiki/Certificate_Transparency). The standard creates a system of public logs that will record all certificates issued. As a Home Assistant Cloud user, you can [audit these certificates](/hc/en-us/articles/34732471944605) and see if they match the certificates being used by your system. In the future, we’d like to automate this process to allow anyone to be warned if their certificates are being tampered with.

### Brute-force attack mitigations

When you use Home Assistant Cloud, your Home Assistant system is open to the wider internet. Home Assistant’s login page is robust and has been audited by security professionals, but it is still possible for a bad actor to “[brute force](https://en.wikipedia.org/wiki/Brute-force_attack)” guess your password with enough time and effort.

Two tips can make brute forcing practically impossible: 

1. **Use a strong password** filled with mixed characters and symbols (you can [generate one on this website](https://1password.com/password-generator)).   
2. **Set up [two-factor authentication](https://my.home-assistant.io/create-link/?redirect=profile_security)** in Home Assistant for all user accounts.

## Insecure versions

In the rare instances when Home Assistant versions are known to have security issues, we block their connection with Home Assistant Cloud’s remote access feature. This helps in securing your Home Assistant instance.

Updating your Home Assistant instance to a secure version will allow it to be accessible via remote access once again. If you cannot update to the latest version of Home Assistant right now and are certain that your instance is safe, you can disable this protection. You do this at your own risk\! You can manage this on your [Nabu Casa account page](https://account.nabucasa.com/).

Please note that such a block only affects the remote access feature. All other Cloud features will keep functioning normally. Amazon Alexa, Google Assistant, TTS, and Webhooks will continue to work during a security block.

If this protection has been manually disabled and the Home Assistant Team has identified a new insecure version, it will automatically re-enable the protection. This ensures you are protected if new security issues are found in the future, as quickly as possible.

We always recommend keeping your Home Assistant system up-to-date. Also, it's important to note that if your system is using a version of Home Assistant over 2 years old, it may still work, [but it is no longer supported](/hc/en-us/articles/34227199207965).

**Currently blocked versions of Home Assistant:**

- Home Assistant Core 2021.1.4 and older. [More information](https://www.home-assistant.io/blog/2021/01/23/security-disclosure2/).

## Related topics

- [Enabling remote access to Home Assistant](/hc/en-us/articles/26474279202973/)
- [Remote access - deep dive](/hc/en-us/articles/25619268678557/)
