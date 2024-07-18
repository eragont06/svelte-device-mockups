<script>
    import { DeviceOptions } from './devices.js';
    import "./devices.css"; // Import the CSS for devices
  
    export let device = 'iPhone X';
    export let color = 'black';
    export let landscape = false;
    export let src = '';
  
    let deviceProps;
  
    $: {
      const selectedDevice = DeviceOptions[device] || DeviceOptions["iPhone X"];
      deviceProps = {
        device: selectedDevice.device,
        width: landscape ? selectedDevice.height : selectedDevice.width,
        height: landscape ? selectedDevice.width : selectedDevice.height,
        hasLandscape: selectedDevice.hasLandscape,
        color,
        landscape
      };
    }
  </script>
  
  <div class={`device ${deviceProps.device} ${color} ${landscape ? 'landscape' : ''}`} style="width: {deviceProps.width}px; height: {deviceProps.height}px;">
    
      {#if src}
        <iframe src={src} class="screen" frameborder="0"></iframe>
      {:else}
        <slot></slot>
      {/if}

  </div>
  
  <style>
   .device {
    position: relative;
    margin: 20px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #ccc;
  }
  
  .device .screen-container {
    position: absolute;
    overflow: hidden;
  }
  
  .device .screen {
    border: none;
    width: 100%;
    height: 100%;
  }
  
  .device.landscape {
    transform: rotate(90deg);
    transform-origin: center;
  }
  
  .iphone-x {
    border-radius: 36px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border: 10px solid darkgray;
  }
  
  .iphone8 {
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
  .ipad {
    border-radius: 24px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
  .macbook {
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
  </style>
  