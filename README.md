# svelte-device-mockups

`svelte-device-mockups` is a Svelte component library that provides device mockups for displaying content within various device frames. This is useful for showcasing mobile or web applications within a device context.

## Installation

First, install the library using npm:
```
npm install svelte-device-mockups
```
## Usage
Import the DeviceMockup component into your Svelte application and use it with the appropriate props.

```
<script>
  import DeviceMockup from 'svelte-device-mockups';
</script>

<DeviceMockup 
  device="iPhone X" 
  scale={4} 
  landscape={false} 
  deviceColor="gold" 
  src="http://localhost:18080/">
</DeviceMockup>
```

Props device: 
> The type of device to be displayed. 

#### Supported values include:
 - "iPhone X"
 - "iPhone 8plus"
 - "Note 8"
 - "iPad"
 - "MacBook Pro"

deviceColor:
>The color of the device.

#### Supported values include:
 - "black"
 - "silver"
 - "gold"
 - "blue"
 - "red"
 - "yellow"
 - "green"
   
> Defaults to "silver" if not specified or if an invalid color is provided.

landscape:
>A boolean indicating whether the device should be displayed in landscape orientation. Defaults to false.

scale:
> A number between 1 and any positive value that determines the size of the device mockup. A value of 5 corresponds to the original size (1:1). For values between 1 and 5, the size scales proportionally (e.g., 1 corresponds to 20% of the original size). Values greater than 5 increase the size linearly beyond the original size. Defaults to 1.

src:
> The URL of the content to be displayed inside the device mockup. If not provided, the content inside the <DeviceMockup> component will be displayed.

Example with Slot Content:
If you prefer to use slot content instead of an iframe, simply omit the src prop and place your content inside the <DeviceMockup> component.

```
<script>
  import DeviceMockup from 'svelte-device-mockups';
</script>

<DeviceMockup 
  device="iPad" 
  scale={3} 
  landscape={true} 
  deviceColor="black">
  src="http://localhost:18080/">
  <div>Your custom content here</div>
</DeviceMockup>
<<<<<<< HEAD
```
=======
```
>>>>>>> 6279e08 (landscape fonctionality fixed, devices models added)
