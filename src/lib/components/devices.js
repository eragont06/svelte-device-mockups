export const DeviceOptions = {
    "iPhone X": {
      device: "iphone-x",
      colors: ["black", "silver", "gold"],
      hasLandscape: true,
      width: 375,
      height: 812
    },
    "Note 8": {
      device: "note8",
      colors: ["black"],
      hasLandscape: true,
      width: 360,
      height: 740
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
  
  export const DeviceHTML = {
    "iPhone X": `
      <div class="marvel-device iphone-x">
        <div class="notch">
          <div class="camera"></div>
          <div class="speaker"></div>
        </div>
        <div class="top-bar"></div>
        <div class="sleep"></div>
        <div class="bottom-bar"></div>
        <div class="volume"></div>
        <div class="overflow">
          <div class="shadow shadow--tr"></div>
          <div class="shadow shadow--tl"></div>
          <div class="shadow shadow--br"></div>
          <div class="shadow shadow--bl"></div>
        </div>
        <div class="inner-shadow"></div>
        <div class="screen"></div>
      </div>
    `,
    "Note 8": `
      <div class="marvel-device note8">
        <div class="inner"></div>
        <div class="overflow">
          <div class="shadow"></div>
        </div>
        <div class="speaker"></div>
        <div class="sensors"></div>
        <div class="more-sensors"></div>
        <div class="sleep"></div>
        <div class="volume"></div>
        <div class="camera"></div>
        <div class="screen"></div>
      </div>
    `,
    "iPad": `
      <div class="marvel-device ipad ">
        <div class="camera"></div>
        <div class="screen"></div>
        <div class="home"></div>
      </div>
    `,
    "MacBook Pro": `
      <div class="marvel-device macbook">
        <div class="top-bar"></div>
        <div class="camera"></div>
        <div class="screen"></div>
        <div class="bottom-bar"></div>
      </div>
    `
  };
  