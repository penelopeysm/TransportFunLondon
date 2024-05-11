<script lang="ts">
	import MapAndSidebar from '$lib/components/MapAndSidebar.svelte';
	import Title from '$lib/components/Title.svelte';
	import { GeoJSON, Marker, LineLayer } from 'svelte-maplibre';
	import { type Point, type LineString, type Feature } from 'geojson';

	import { allCheckpoints, type Checkpoint, type Path, pointToGJ, pathToGJ } from '$lib/geo';

	let shownPoiNames: string[] = [];
	let poisOnMap: Checkpoint[];

	let gjPointsData: Feature<Point>[];
	let gjPathsData: Feature<LineString>[];
	$: {
		poisOnMap = shownPoiNames.map((name) => allCheckpoints.find((cp) => cp.name === name));
		gjPointsData = poisOnMap.map(pointToGJ);
		gjPathsData = poisOnMap.slice(0, -1).map((cp, i) => {
			const path: Path = {
				start: cp,
				end: poisOnMap[i + 1],
				midpoints: [], // TODO: backend required
				mode: 'walking' // TODO: backend required
			};
			return pathToGJ(path);
		});
	}

	const defaultDropdown = '__DEFAULT__';
</script>

<Title title={['Welcome']} />
<MapAndSidebar>
	<div slot="sidebar">
		<h2>Add points of interest to the map...</h2>
		<select
			on:change={(e) => {
				if (e.target.value === defaultDropdown) return;
				shownPoiNames = [...shownPoiNames, e.target.value];
				e.target.value = defaultDropdown;
			}}
		>
			<option value={defaultDropdown}>(select...)</option>
			{#each allCheckpoints as cp}
				{#if !shownPoiNames.includes(cp.name)}
					<option value={cp.name}>{cp.name}</option>
				{/if}
			{/each}
		</select>

		<ol class="poi-list">
			{#each shownPoiNames as poiName}
				<li>
					{poiName}
					<button
						class="poi-entry"
						on:click={() => {
							shownPoiNames = shownPoiNames.filter((name) => name !== poiName);
						}}>(remove)</button
					>
				</li>
			{/each}
		</ol>
	</div>

	<div slot="map">
		{#each gjPointsData as pointGJ}
			<Marker lngLat={[pointGJ.geometry.coordinates[0], pointGJ.geometry.coordinates[1]]}>
				<span class="poi-name-map">{pointGJ.properties.name}</span>
			</Marker>
		{/each}
		{#each gjPathsData as pathGJ}
			<GeoJSON data={pathGJ}>
				<LineLayer
					paint={{
						'line-width': 5,
						'line-dasharray': [5, 2],
						'line-color': '#008800',
						'line-opacity': 0.8
					}}
				/>
			</GeoJSON>
		{/each}
	</div>
</MapAndSidebar>

<style>
	.poi-list {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
        gap: 10px;
	}

	.poi-entry {
		padding: 0.2em;
		border-radius: 0.2em;
		border: 1px solid black;
		margin: 0.2em;
		width: max-content;
	}

	.poi-name-map {
		font-size: 200%;
		background-color: white;
		padding: 0.2em;
		border-radius: 0.2em;
		border: 1px solid black;
	}

	select {
		font-family: inherit;
        width: 200px;
	}

    button {
        font-family: inherit;
    }
</style>
