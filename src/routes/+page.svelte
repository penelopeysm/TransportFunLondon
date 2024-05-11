<script lang="ts">
	import MapAndSidebar from '$lib/components/MapAndSidebar.svelte';
	import Title from '$lib/components/Title.svelte';
	import { Marker } from 'svelte-maplibre';

	type Poi = {
		name: string;
		coords: [number, number];
        mapRepr: string;
		shown: boolean;
	};

	const allPois: Poi[] = [
		{ name: 'British Library', coords: [-0.126944, 51.529444], mapRepr: '📚', shown: false },
		{ name: 'Goose', coords: [-0.2348763, 51.4778406], mapRepr: '🪿', shown: false }
	];

	let poisOnMap: Poi[] = [];
	$: {
		poisOnMap = allPois.filter((poi) => poi.shown);
	}
</script>

<Title title={['Welcome']} />
<MapAndSidebar>
	<div slot="sidebar">
		<p>Hello there!</p>

		<h2>Points of interest</h2>
		<div class="poi-list">
			{#each allPois as poi}
				<div>
					<input type="checkbox" bind:checked={poi.shown} id={poi.name} />
					<label for={poi.name}>{poi.name}</label>
				</div>
			{/each}
		</div>
	</div>

	<div slot="map">
		{#each poisOnMap as poi}
			<Marker lngLat={poi.coords}>
				<span class="poi-name">{poi.mapRepr}</span>
			</Marker>
		{/each}
	</div>
</MapAndSidebar>

<style>
	.poi-list {
		display: flex;
		flex-direction: column;
	}

	.poi-name {
		font-size: 200%;
		background-color: white;
		padding: 0.2em;
		border-radius: 0.2em;
		border: 1px solid black;
	}
</style>
