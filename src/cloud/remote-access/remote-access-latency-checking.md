---
zendesk:
  article_id: 39385482184733
  name: Remote access - Latency checking
  position: 35
  labels: cloud
---

Home Assistant Cloud runs remote access servers in several locations around the world. To give you the fastest possible remote connection, Home Assistant measures the network latency to each of those locations and reports the results back to us, so that we can place your instance on the server that actually performs best for your connection.

This topic explains how that measurement works, which addresses are involved, and what you can expect to see.

## Why latency checking exists

Previously, your instance was assigned to a remote access server based on the continent your connection appeared to come from. Geography is only a rough guide to network performance, so this produced poor results in places where the nearest server is not the fastest one. Traffic from a country on the edge of a continent, or behind unusual internet routing, could be sent a long way around and end up with a noticeably slower connection than a server further away would have given.

Latency checking replaces that guess with a measurement.

## How it works

The check runs when Home Assistant starts up and sets up your remote access connection. It only runs if you are signed in to Home Assistant Cloud. If you are not signed in, Home Assistant does not contact any of these addresses.

1. **Home Assistant asks for the list of targets.** Your instance requests the current list of measurement addresses from Home Assistant Cloud, along with the settings for the test.
2. **Home Assistant measures each target.** Your instance sends a small number of ICMP echo requests (pings) to each address and records the round-trip time. By default, each address is pinged 3 times, and any address that does not answer within 1000 ms is treated as unreachable.
3. **The results are sent back to us.** Your instance reports the average, minimum, and maximum round-trip time for each address, and whether the address responded at all.
4. **We choose the server.** Home Assistant Cloud ranks the locations using your measurements and assigns your instance to a remote access server.

Your measurements are the largest factor in that decision, but they are not the only one. We also weigh each location against how much capacity it has available, so you may be assigned a server that was not the very lowest latency in your results when a close alternative has more headroom. A server that fills up slows down everyone connected to it, so spreading instances out generally gives a better connection than sending everyone to the same fastest server.

The ranking is done on our side rather than in Home Assistant. This means we can adjust how servers are chosen without needing you to update Home Assistant.

### Measurement addresses

These are the addresses your instance pings. They are dedicated measurement hosts: they only answer pings, and they do not carry any of your Home Assistant traffic. Your actual remote access connection goes to a separate server.

| Location | Region | IP address |
| --- | --- | --- |
| Johannesburg | Africa | 152.233.63.37 |
| Frankfurt | Europe | 57.129.54.3 |
| Amsterdam | Europe | 51.158.253.232 |
| Strasbourg | Europe | 91.134.22.133 |
| Paris | Europe | 51.159.202.222 |
| London | Europe | 57.129.148.54 |
| Warsaw | Europe | 151.115.97.71 |
| Virginia | North America | 40.160.72.112 |
| Illinois | North America | 212.102.58.139 |
| Colorado | North America | 121.127.44.46 |
| Oregon | North America | 40.160.129.164 |
| Sydney | Oceania | 51.161.218.153 |
| Sydney | Oceania | 51.161.218.156 |
| São Paulo | South America | 169.150.220.131 |

This list changes as we add or retire locations. Your instance always fetches the current list from us before measuring, so it never relies on a list stored locally. We expect to change it only a small number of times per year.

## Why your server might not change

Moving your instance between servers is disruptive, so the selection is deliberately sticky. When we compare your measurements, the result for the server you are already on is halved before it is ranked against the others. In practice, another location has to measure less than half the latency of your current server before you are moved.

This prevents your instance from being shuffled between servers because of small, ordinary variations in network timing.

## What happens if pings are blocked

If your firewall or your internet provider blocks outbound ICMP, those addresses simply report as unreachable and are dropped from the ranking. Locations that do answer are still ranked normally.

If nothing answers at all, the latency check is skipped and your instance connects using the previous server selection logic. A failed latency check never blocks your remote access connection, and it does not delay Home Assistant starting up.

You do not need to change your firewall for this feature. If you want the best possible server selection and you currently block outbound ICMP, allowing outbound pings to the addresses above will let the measurement work.

## Seeing the results

The measurements are not shown in the Home Assistant interface. If you want to see them, you can [enable debug logging](/hc/en-us/articles/25620430846493/) for the cloud integration. Look for a `DEBUG` line from `hass_nabucasa.remote`:

```text
Latency results by location:
{'Johannesburg': {'avg': 307.287},
 'Frankfurt': {'avg': 54.966},
 'Amsterdam': {'avg': 45.833},
 'London': {'avg': 40.386},
 ...}
```

Home Assistant writes this as a single line covering every location. It is shown here wrapped and shortened so that it fits on the page.

The values are the average round-trip time in milliseconds. An address that did not respond is shown with an average of `None`.

The results are also included in your support package, which is useful if you are working with our support team on a connection speed problem.

## After your server changes

When your instance is moved to a different server, the DNS record for your remote access URL is updated. Some DNS resolvers cache that record for up to an hour, so if you run your own DNS server or an ad-blocking DNS resolver, you may not be able to reach your instance remotely until that cache expires. Flushing your DNS cache resolves this immediately.

## What we collect

The only information sent to us is the round-trip time to each measurement address and whether it responded. No traffic from your Home Assistant instance is sent to these addresses, and the measurement does not reveal anything about your devices, your automations, or what you do in Home Assistant.

The check is part of Home Assistant Cloud. It only runs while you are signed in to Home Assistant Cloud, and an instance that is not signed in never contacts these addresses.

## Related topics

- [About Home Assistant remote access](/hc/en-us/articles/26469707849629/)
- [Remote access - Deep dive](/hc/en-us/articles/25619268678557/)
- [Remote access - Security aspects](/hc/en-us/articles/26508882007581/)
- [Remote access - Limitations](/hc/en-us/articles/26523862491165/)
- [Remote access - Cannot access Home Assistant remotely](/hc/en-us/articles/26205112162461/)
