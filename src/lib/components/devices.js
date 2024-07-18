export const DeviceOptions = {
    "iPhone X": {
      device: "iphone-x",
      colors: ["black", "silver", "gold"],
      hasLandscape: true,
      width: 375,
      height: 812
    },
    "iPhone 8": {
      device: "iphone8",
      colors: ["black", "silver", "gold"],
      hasLandscape: true,
      width: 375,
      height: 667
    },
    "iPad": {
      device: "ipad",
      colors: ["black", "silver"],
      hasLandscape: true,
      width: 768,
      height: 1024
    },
    "MacBook Pro": {
      device: "macbook",
      colors: ["silver"],
      hasLandscape: false,
      width: 1440,
      height: 900
    }
  };
  
  export const DeviceNames = Object.keys(DeviceOptions);
  