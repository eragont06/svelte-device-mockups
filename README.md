# svelte-device-mockups

`svelte-device-mockups` is a Svelte component library that provides device mockups for displaying content within various device frames. This is useful for showcasing mobile or web applications within a device context.

## Installation

First, install the library using npm:

```bash
npm install svelte-device-mockups

<script>
  import DeviceMockup from 'svelte-device-mockups';
</script>

<DeviceMockup 
  device="iPhone X" 
  scale={4} 
  landscape={false} 
  deviceColor="gold" 
  src="http://localhost:18080/convertigo/projects/QuestHunter/DisplayObjects/mobile/index.html">
</DeviceMockup>
