---
zendesk:
  article_id: 30996960632989
  name: How many Zigbee devices can I run with Home Assistant Connect ZBT-1?
  position: 10
  labels: connect zbt-1, faq
---

## The short answer

It's unlikely that you will run into any limits.

## The long answer

Zigbee has 2 device types:

- routers, such as smart plugs or bulbs
- end-devices, such as battery-powered sensors

If you have enough routers, there’s no theoretical limit:

- If you have 0 routers, you can have a max of 32 end-devices (connected directly to the coordinator). Running the Zigbee network without extra router devices is not recommended.
- If you have a few routers spread throughout all rooms, it's unlikely you'll encounter a limit. However, how many children can connect to a router depends on the router’s firmware. For example, newer Silabs-based router devices generally tend to accept way more end-devices than older TI/CC2531-based router devices.
