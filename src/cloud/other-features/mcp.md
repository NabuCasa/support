---
zendesk:
  article_id: 40241458926365
  name: Connect an AI agent to Home Assistant with Home Assistant Cloud
  position: 50
  labels: cloud, mcp, model context protocol, ai, ai agent, remote access, setup
---

# Connect an AI agent to Home Assistant with Home Assistant Cloud

Home Assistant Cloud gives your AI agent a secure HTTPS address for your Home Assistant. Get your MCP server URL, paste it into your AI app, and sign in. Most AI apps can also set up the connection for you: paste the URL into a chat and ask the AI to configure it.

## Before you start

- An active Home Assistant Cloud subscription
- Home Assistant 2026.10 or newer
- An administrator account in Home Assistant

## Get your MCP server URL

AI agents that run in the cloud, such as Claude and ChatGPT, connect to Home Assistant over the internet through your Home Assistant Cloud address.

1. Go to **Settings** > **Home Assistant Cloud**, and under **Cloud features**, select **Remote access**.
2. On the **Remote connection** card, turn on the toggle.
3. Select **Copy link**.
   - The copied link contains the full address, even though the card hides most of it.
4. Paste the link and add `/api/mcp` to the end.

Your MCP server URL looks like this: `https://<your-id>.ui.nabu.casa/api/mcp`

If you set up a custom domain, use that domain instead: `https://<your-domain>/api/mcp`.

If MCP is turned off, go to **Settings** > **System** > **AI** and select **Enable** on the **Model Context Protocol** card.

## Add the URL to your AI app

1. In your AI app, add a custom MCP server or connector, and paste your MCP server URL.
2. If the app asks for an authentication method, select OAuth.
3. Log in with your Home Assistant account.

The Home Assistant Cloud URL uses HTTPS, so it also works with AI apps that only accept HTTPS addresses, such as some command-line tools.

For instructions for specific AI apps, see [Client configuration](https://www.home-assistant.io/integrations/mcp_server/#client-configuration) in the Home Assistant documentation.

## Who can connect

By default, only administrator accounts can connect an AI agent to Home Assistant. We recommend using an administrator account.

If you sign in with a non-administrator account, the AI app shows an authorization error and can't connect to Home Assistant. In Home Assistant, the logs show a warning about invalid authentication for `/api/mcp`.

To allow other accounts, go to **Settings** > **Devices & services**, select **Model Context Protocol Server**, select **Configure**, and turn off **Require an administrator account**.

## Related topics

- [Enabling remote access to Home Assistant](/hc/en-us/articles/26474279202973/)
- [Using remote access with a custom domain for Home Assistant](/hc/en-us/articles/26497540527517/)
- [Model Context Protocol integration](https://www.home-assistant.io/integrations/mcp_server/)
- [ha-mcp](https://github.com/homeassistant-ai/ha-mcp), a community MCP server for Home Assistant with more tools. Nabu Casa does not support it.