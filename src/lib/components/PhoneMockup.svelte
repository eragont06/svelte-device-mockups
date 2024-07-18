<!-- src/lib/components/PhoneMockup.svelte -->
<script>
    export let src;
    export let alt = 'Phone mockup';
  </script>
  
  <div class="phone-mockup">
    <img src={src} alt={alt} />
  </div>
  
  <style>
    .phone-mockup {
      width: 300px;
      height: 600px;
      border: 16px solid black;
      border-radius: 36px;
      overflow: hidden;
      position: relative;
    }
  
    .phone-mockup img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  </style>
  