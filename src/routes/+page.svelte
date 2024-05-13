<script lang="ts">
	import MapAndSidebar from '$lib/components/MapAndSidebar.svelte';
	import Title from '$lib/components/Title.svelte';
	import { GeoJSON, Marker, LineLayer } from 'svelte-maplibre';
	import { type Point, type LineString, type Feature } from 'geojson';
	import {
		allCheckpoints,
		type Checkpoint,
		type Path,
		pointToGJ,
		pathToGJ,
		modeToColor
	} from '$lib/geo';
	import { onMount } from 'svelte';
	import { map } from '../stores';

	// These should be props
	const startingPoint: Checkpoint = allCheckpoints.find(
		(cp: Checkpoint) => cp.name === 'British Library'
	);
	const endingPoint: Checkpoint = allCheckpoints.find((cp: Checkpoint) => cp.name === 'IKEA');

	// Global var
	const defaultDropdown = '__DEFAULT__';

	onMount(() => {
		if ($map) {
			const min_lng = Math.min(startingPoint.lng, endingPoint.lng);
			const max_lng = Math.max(startingPoint.lng, endingPoint.lng);
			const min_lat = Math.min(startingPoint.lat, endingPoint.lat);
			const max_lat = Math.max(startingPoint.lat, endingPoint.lat);
			const epsilon = 0.015;
			$map.fitBounds([
				[min_lng - epsilon, min_lat - epsilon],
				[max_lng + epsilon, max_lat + epsilon]
			]);
		}
	});

	let currentLocation = startingPoint;
	let journeyData: Path[] = [];

	let nextLocation = defaultDropdown;

	function addJourney(_nextMode: string, _nextLocation: string) {
		const nextCheckpoint = allCheckpoints.find((cp: Checkpoint) => cp.name === _nextLocation);
		if (nextCheckpoint === undefined) {
			console.error('tried to add a journey to an invalid location:', nextLocation);
			return;
		}
		journeyData = [
			...journeyData,
			{
				start: currentLocation,
				end: nextCheckpoint,
				midpoints: [], // TODO: backend required
				mode: _nextMode // TODO: backend required
			}
		];
		currentLocation = nextCheckpoint;
		nextLocation = defaultDropdown;
	}

	function getAllowedModes(startName: string, endName: string): string[] {
		const startCheckpoint = allCheckpoints.find((cp: Checkpoint) => cp.name === startName);
		const endCheckpoint = allCheckpoints.find((cp: Checkpoint) => cp.name === endName);
		if (startCheckpoint === undefined || endCheckpoint === undefined) {
			console.error('tried to get allowed modes for invalid locations:', startName, endName);
			return [];
		}
		const alwaysAllowed = ['walk', 'sprint', 'limp'];
		let allowedModes = alwaysAllowed;
		if (startCheckpoint.victoria && endCheckpoint.victoria) {
			allowedModes.push('victoria');
		}
		if (startCheckpoint.district && endCheckpoint.district) {
			allowedModes.push('district');
		}
		if (startCheckpoint.handc && endCheckpoint.handc) {
			allowedModes.push('h_and_c');
		}
		return allowedModes;
	}

	function completelyWrongTimeCalculation(
		start: Checkpoint,
		end: Checkpoint,
		mode: string
	): number {
		const speed = {
			walk: 0.00089,
			sprint: 0.00089 * 5,
			limp: 0.00089 / 3,
			victoria: 0.0049,
			district: 0.0049,
			h_and_c: 0.0049
		};
		const distance = Math.sqrt((start.lng - end.lng) ** 2 + (start.lat - end.lat) ** 2);
		return distance / speed[mode];
	}

	function getTotalTime(journeyData: Path[]): number {
		return journeyData.reduce((acc, journey) => {
			return acc + completelyWrongTimeCalculation(journey.start, journey.end, journey.mode);
		}, 0);
	}

	let gjPointsData: Feature<Point>[];
	let gjPathsData: Feature<LineString>[];
	let finished: boolean = false;
	$: {
		gjPointsData = journeyData.map((path) => pointToGJ(path.end));
		gjPathsData = journeyData.map((path) => pathToGJ(path));
		finished =
			journeyData.length > 0 && journeyData[journeyData.length - 1].end.name === endingPoint.name;
	}
</script>

<Title title={['Welcome']} />
<MapAndSidebar>
	<div slot="sidebar">
		<h2>Target journey</h2>
		<div class="rounded-box poi-name-start">{startingPoint.name}</div>
		to
		<div class="rounded-box poi-name-end">{endingPoint.name}</div>

		<h2>Your route so far</h2>
		{startingPoint.name}
		<ul class="poi-list">
			{#each journeyData as journey}
				<li>
					<span style="color: {modeToColor(journey.mode)}">{journey.mode}</span> to {journey.end
						.name}
					({completelyWrongTimeCalculation(journey.start, journey.end, journey.mode).toFixed(0)} minutes)
				</li>
			{/each}
		</ul>

		{#if finished}
			<h2>Done!</h2>
			<p>It took you {getTotalTime(journeyData).toFixed(0)} minutes.</p>
			<button
				on:click={() => {
					journeyData = [];
					currentLocation = startingPoint;
				}}>Try again?</button
			>
		{:else}
			<h2>Add a stop?</h2>
			<div>
				<select bind:value={nextLocation}>
					<option value={defaultDropdown} disabled selected>(Location... )</option>
					{#each allCheckpoints as cp}
						{#if !journeyData
							.map((j) => j.end.name)
							.includes(cp.name) && cp.name !== startingPoint.name && cp.name !== endingPoint.name}
							<option value={cp.name}>{cp.name}</option>
						{/if}
					{/each}
				</select>
			</div>
			{#if nextLocation !== defaultDropdown}
				<div>
					Mode:
					{#each getAllowedModes(currentLocation.name, nextLocation) as mode}
						<button
							on:click={() => {
								addJourney(mode, nextLocation);
							}}>{mode}</button
						>
					{/each}
				</div>
			{/if}

			<h2>Or finish by walking to your destination?</h2>
			<button
				on:click={() => {
					addJourney('walk', endingPoint.name);
				}}>Walk to {endingPoint.name}!</button
			>
		{/if}
	</div>

	<div slot="map">
		{#each gjPointsData as pointGJ}
			{#if pointGJ.properties.name !== startingPoint.name && pointGJ.properties.name !== endingPoint.name}
				<Marker lngLat={[pointGJ.geometry.coordinates[0], pointGJ.geometry.coordinates[1]]}>
					<span class="poi-name-map">{pointGJ.properties.name}</span>
				</Marker>
			{/if}
		{/each}

		<Marker lngLat={[startingPoint.lng, startingPoint.lat]}>
			<span class="poi-name-map poi-name-start">{startingPoint.name}</span>
		</Marker>
		<Marker lngLat={[endingPoint.lng, endingPoint.lat]}>
			<span class="poi-name-map poi-name-end">{endingPoint.name}</span>
		</Marker>

		{#each gjPathsData as pathGJ}
			<GeoJSON data={pathGJ}>
				<LineLayer
					paint={{
						'line-width': 4,
						'line-color': modeToColor(pathGJ.properties.mode),
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
		list-style-type: '↳ ';
	}
	.poi-list > li {
		margin-left: 0;
	}

	.poi-name-map {
		font-size: 120%;
		background-color: white;
		padding: 0.2em;
		border-radius: 0.2em;
		border: 1px solid black;
		font-family: Nunito Sans;
	}
	.poi-name-start {
		font-weight: bold;
		background-color: #c7f5ff;
	}
	.poi-name-end {
		font-weight: bold;
		background-color: #fccff9;
	}

	select {
		font-family: inherit;
		width: 200px;
	}

	button {
		font-family: inherit;
	}

	div.rounded-box {
		border: 1px solid black;
		border-radius: 3px;
		padding: 0.2em;
		display: inline-block;
	}
</style>
