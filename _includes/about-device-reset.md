<!--- Note about the device reset. Applies to both Home Assistant Green and Yellow. -->

{% hazard "notice" %}

**Risk of losing your data and configuration**

- This process clears the data disk on your device. Unless you [create a backup](https://www.home-assistant.io/common-tasks/general/#backups), you will lose all data and configuration settings.
- A device reset wipes the data partition. It removes all user data as well as [Home Assistant Core](https://www.home-assistant.io/docs/glossary/#home-assistant-core), [Supervisor](https://www.home-assistant.io/docs/glossary/#home-assistant-supervisor), and any installed apps (formerly known as an add-on). The [Home Assistant Operating System](https://www.home-assistant.io/docs/glossary/#home-assistant-operating-system) stays on the system.
- Once a device wipe is initiated, the data partition is marked as to be cleared on boot. Then, the system reinstalls the latest version of all Home Assistant components.
- To avoid losing data and configuration settings, [create a backup](https://www.home-assistant.io/common-tasks/general/#backups) and [define a backup location](https://www.home-assistant.io/common-tasks/general/#defining-backup-locations) outside of your Home Assistant.

{% endhazard %}