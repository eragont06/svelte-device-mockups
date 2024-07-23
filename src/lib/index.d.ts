declare module 'svelte-device-mockups' {
    import { SvelteComponentTyped } from 'svelte';
  
    export class DeviceMockup extends SvelteComponentTyped<{
      device?: string;
      color?: string;
      landscape?: boolean;
      src?: string;
      scale?: number | string;
    }> {}
  }
  