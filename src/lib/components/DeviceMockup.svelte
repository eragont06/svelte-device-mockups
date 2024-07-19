<script>
	import './devices.min.css'; // Import Marvel Devices CSS

	export let device = 'iPhone X';
	export let deviceColor = 'silver';
	export let landscape;
	export let src = '';
	export let scale = 1;

	export const AvailableColors = ['black', 'silver', 'gold', 'blue', 'red', 'yellow', 'green'];

	// Ensure the deviceColor is valid
	$: selectedColor = AvailableColors.includes(deviceColor) ? deviceColor : 'silver';
	// Map scale to a value between 0.2 and 1, where 5 corresponds to 1 (original scale)
	$: mappedScale = scale > 5 ? scale - 4 : scale * 0.2;
</script>

{#if device === 'iPhone X'}
	<div
		class={`marvel-device iphone-x ${landscape ? 'landscape' : ''} ${selectedColor}`}
		style="transform: scale({mappedScale});"
	>
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
		{#if src}
			<div class="screen">
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe {src} class="screen" frameborder="0"></iframe>
			</div>
		{:else}
			<div class="screen"><slot></slot></div>
		{/if}
	</div>
{:else if device === 'iPhone 8plus'}
	<div
		class={`marvel-device iphone8plus ${selectedColor}`}
		style="transform: scale({mappedScale});"
	>
		<div class="top-bar"></div>
		<div class="sleep"></div>
		<div class="volume"></div>
		<div class="camera"></div>
		<div class="sensor"></div>
		<div class="speaker"></div>
		{#if src}
			<div class="screen">
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe {src} class="screen" frameborder="0"></iframe>
			</div>
		{:else}
			<div class="screen"><slot></slot></div>
		{/if}
		<div class="home"></div>
		<div class="bottom-bar"></div>
	</div>
{:else if device === 'iPhone 5s'}
	<div
		class={`marvel-device iphone5s silver ${selectedColor}`}
		style="transform: scale({mappedScale});"
	>
		<div class="top-bar"></div>
		<div class="sleep"></div>
		<div class="volume"></div>
		<div class="camera"></div>
		<div class="sensor"></div>
		<div class="speaker"></div>
		{#if src}
			<div class="screen">
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe {src} class="screen" frameborder="0"></iframe>
			</div>
		{:else}
			<div class="screen"><slot></slot></div>
		{/if}
		<div class="home"></div>
		<div class="bottom-bar"></div>
	</div>
{:else if device === 'iPhone 5c'}
	<div class={`marvel-device iphone5c ${selectedColor}`} style="transform: scale({mappedScale});">
		<div class="top-bar"></div>
		<div class="sleep"></div>
		<div class="volume"></div>
		<div class="camera"></div>
		<div class="sensor"></div>
		<div class="speaker"></div>
		{#if src}
			<div class="screen">
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe {src} class="screen" frameborder="0"></iframe>
			</div>
		{:else}
			<div class="screen"><slot></slot></div>
		{/if}
		<div class="home"></div>
		<div class="bottom-bar"></div>
	</div>
{:else if device === 'Note 8'}
	<div class={`marvel-device note8 ${selectedColor}`} style="transform: scale({mappedScale});">
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
		{#if src}
			<div class="screen">
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe {src} class="screen" frameborder="0"></iframe>
			</div>
		{:else}
			<div class="screen"><slot></slot></div>
		{/if}
	</div>
{:else if device === 'iPad'}
	<div class={`marvel-device ipad ${selectedColor}`} style="transform: scale({mappedScale});">
		<div class="camera"></div>
		{#if src}
			<div class="screen">
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe {src} class="screen" frameborder="0"></iframe>
			</div>
		{:else}
			<div class="screen"><slot></slot></div>
		{/if}
		<div class="home"></div>
	</div>
{:else if device === 'MacBook Pro'}
	<div class={`marvel-device macbook ${selectedColor}`} style="transform: scale({mappedScale});">
		<div class="top-bar"></div>
		<div class="camera"></div>
		{#if src}
			<div class="screen">
				<!-- svelte-ignore a11y-missing-attribute -->
				<iframe {src} class="screen" frameborder="0"></iframe>
			</div>
		{:else}
			<div class="screen"><slot></slot></div>
		{/if}
		<div class="bottom-bar"></div>
	</div>
{/if}

<style>
	.device-container {
		display: inline-block;
		position: relative;
	}
	.device-container.landscape {
		transform: rotate(90deg);
		transform-origin: center;
	}
	.marvel-device .screen {
		overflow: hidden;
	}
	.marvel-device .screen iframe {
		border: none;
		width: 100%;
		height: 100%;
	}
</style>
