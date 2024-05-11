<script lang="ts">
	import { MapLibre } from 'svelte-maplibre';
	import { type Map } from 'maplibre-gl';
	import { onMount } from 'svelte';
	import { map } from '../../stores';

	let mapObject: Map;

	onMount(() => {
		map.set(mapObject);
		console.log(mapObject);
	});
</script>

<div class="map-container">
	<MapLibre
		bind:map={mapObject}
		center={[-0.12755, 51.5073]}
		zoom={10}
		class="map"
		standardControls
		style="https://api.maptiler.com/maps/uk-openzoomstack-light/style.json?key=nhI1r4NVIrj3QXJ6ZWK2"
	>
		<slot name="map" />
	</MapLibre>
	<div class="sidebar"><slot name="sidebar" /></div>
</div>

<style>
	.map-container {
		height: 100%;
		width: 100%;
	}

	.sidebar {
		position: absolute;
		top: 20px;
		right: 20px;
		height: calc(100% - 65px);
		width: 400px;
		z-index: 1;
		background-color: white;
		padding: 20px;
		border: 2px solid rgba(0, 0, 0, 0.3);
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
	}

	:global(.map) {
		height: 100%;
		width: 100%;
	}
</style>
