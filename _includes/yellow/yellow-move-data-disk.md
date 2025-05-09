
{% steps %}
{% step "Opening the storage configuration page" %}
{% stepContent %}

- **CM4 or CM5 Lite**: If you have a Raspberry Compute Module 4 Lite: As there is no eMMC flash, you can skip this and the following steps.
- **Regular CM4 or CM5 modules**: This *moving your data* procedure is required for making use of your SSD, even if your module is new.

- In Home Assistant, go to [**Configuration > System > Storage**](https://my.home-assistant.io/redirect/storage/)

{% endstepContent %}
{% endstep %}

{% step "Starting the moving process" %}
{% image "/static/img/yellow/move-datadisk.png" "Card showing disk metrics" %}
{% stepContent %}

- Select **Move datadisk**.

{% endstepContent %}
{% endstep %}

{% step "Selecting the NVMe drive" %}
{% image "/static/img/yellow/select-new-datadisk.png" "Select new datadisk dialog" %}
{% stepContent %}

- Select your NVMe drive. If it does not show the full name of your disk, select **nvme0n1** and select **MOVE**.
- **Info**: For a small instance of 5 GB (incl. 6 add-ons) this takes about 5 minutes.
  - Depending on the size of your instance, this may take 30 minutes or longer.

{% endstepContent %}
{% endstep %}

{% step "Viewing the new disk" %}
{% image "/static/img/yellow/move-datadisk-02.png" "Card showing different disk metrics after the move" %}
{% stepContent %}

- Once the transfer has been completed, hover over the status bar to see how much free disk space there is available.
- Note that the eMMC section has disappeared.

{% endstepContent %}
{% endstep %}
{% endsteps %}
