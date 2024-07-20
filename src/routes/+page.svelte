<script>
	import DeviceMockup from '$lib/components/DeviceMockup.svelte';

	let landscape;

	function toggleLandscape() {
		landscape = !landscape;
	}
</script>

<div class="container">
	<button class="button-land" on:click={() => toggleLandscape(landscape)}>landscape</button>
	<DeviceMockup
		device="Samsung Galaxy S5"
		{landscape}
		scale="5"
		deviceColor="yellow"
		src="http://localhost:18080/convertigo/projects/QuestHunter/DisplayObjects/mobile/index.html"
	></DeviceMockup>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	.button-land {
		background-color: blueviolet;
		padding: 5px;
		padding-inline: 10px;
		color: white;
		font-weight: 600;
		border-radius: 10px;
		
	}
</style>