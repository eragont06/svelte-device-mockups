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
  
  <div class={`device-container`}>
    <div class={`device ${deviceProps.device} ${color} ${landscape ? 'landscape' : ''}`} style="width: {deviceProps.width}px; height: {deviceProps.height}px;">
      <div class="screen-container">
        {#if src}
          <iframe src={src} class="screen" frameborder="0"></iframe>
        {:else}
          <slot></slot>
        {/if}
      </div>
    </div>
  </div>
  
  <style>
    .device-container {
      display: inline-block;
      position: relative;
    }
    .device-container.landscape {
      transform: rotate(90deg);
      transform-origin: center;
    }
    .device {
      position: relative;
      margin: 20px;
      overflow: hidden;
      background: #fff;
      border: 10px solid darkgray;
    }
    .device .screen-container {
      position: absolute;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
    .device .screen {
      border: none;
      width: 100%;
      height: 100%;
    }
  </style>
  