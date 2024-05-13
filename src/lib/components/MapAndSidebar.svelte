<script lang="ts">
	import { MapLibre } from 'svelte-maplibre';
	import { type Map } from 'maplibre-gl';
	import { onMount } from 'svelte';
	import { map } from '../../stores';

	let mapObject: Map;

	onMount(() => {
		map.set(mapObject);
	});
</script>

<div class="map-container">
	<MapLibre
		bind:map={mapObject}
		center={[-0.12755, 51.5073]}
		zoom={12}
		class="map"
		standardControls
		style="https://api.maptiler.com/maps/uk-openzoomstack-light/style.json?key=nhI1r4NVIrj3QXJ6ZWK2"
	>
		<slot name="map" />
	</MapLibre>
</div>
<div class="sidebar"><slot name="sidebar" /></div>

<style>
	.map-container {
		height: 100%;
		width: calc(100% - 300px);
	}

	.sidebar {
		width: 300px;
		background-color: white;
		padding: 20px;
	}

	:global(.map) {
		height: 100%;
		width: 100%;
	}
</style>
