
1. Opening the storage configuration page.

   - **CM4 or CM5 Lite**: If you have a Raspberry Compute Module 4 Lite: As there is no eMMC flash, you can skip this and the following steps.
   - **Regular CM4 or CM5 modules**: This *moving your data* procedure is required for making use of your SSD, even if your module is new.

   - In Home Assistant, go to [**Configuration > System > Storage**](https://my.home-assistant.io/redirect/storage/)

1. Select **Move datadisk**.

    ![move-datadisk](/static/img/yellow/move-datadisk.png)

1. Moving to data disk.

    - Select your NVMe drive. If it does not show the full name of your disk, select **nvme0n1** and select **MOVE**.
    - **Info**: For a small instance of 5 GB (incl. 6 add-ons) this takes about 5 minutes.
      - Depending on the size of your instance, this may take 30 minutes or longer.

      ![select-new-datadisk](/static/img/yellow/select-new-datadisk.png)

1. Viewing the new disk.

    - Once the transfer has been completed, hover over the status bar to see how much free disk space there is available.
    - Note that the eMMC section has disappeared.

    ![move-datadisk-02](/static/img/yellow/move-datadisk-02.png)
