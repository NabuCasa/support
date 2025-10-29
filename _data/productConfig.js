// Product configuration mapping
// Maps category names to product details
const productConfig = {
  "Home Assistant Connect ZBT-1": {
    name: "Home&nbsp;Assistant&nbsp;Connect&nbsp;ZBT-1",
    shortName: "Connect&nbsp;ZBT-1",
    url: "https://www.home-assistant.io/connectzbt1",
    formerName: "Home&nbsp;Assistant&nbsp;SkyConnect",
    supports: ["Zigbee", "Thread"],
    excludes: ["Bluetooth", "Z-Wave"],
    type: "adapter",
  },
  "Home Assistant SkyConnect": {
    name: "Home&nbsp;Assistant&nbsp;SkyConnect",
    shortName: "SkyConnect",
    url: "https://www.home-assistant.io/skyconnect",
    supports: ["Zigbee", "Thread"],
    excludes: ["Bluetooth", "Z-Wave"],
    type: "adapter",
  },
  "Home Assistant Green": {
    name: "Home&nbsp;Assistant&nbsp;Green",
    shortName: "Green",
    url: "https://www.home-assistant.io/green",
    supports: ["Home Assistant OS"],
    type: "hub",
  },
  // Add more products as needed
};

export default function () {
  return productConfig;
}
