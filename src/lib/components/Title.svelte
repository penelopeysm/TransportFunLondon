<script lang="ts">
	export let title: string[] = [];

	let full_title = ['TfL Reimagined', ...title].join(' • ');
</script>

<svelte:head>
	<title>{full_title}</title>
</svelte:head>
