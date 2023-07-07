<script lang="ts">
	import { onMount } from 'svelte';
	import CaseListItem from '$lib/components/CaseListItem.svelte';
	export let data;
	let ready = false;
	onMount(() => (ready = true));
</script>

<article>
	<h1>Selected cases</h1>
	<ul>
		{#each data.stories as story, i}
			{#if ready && story.content.component === 'case'}
				<CaseListItem {i} blok={story.content} slug={story.full_slug} name={story.name} />
			{/if}
		{/each}
	</ul>
</article>

<style>
	article {
		padding: 95px;
	}
	h1 {
		font-size: 24px;
		font-weight: 400;
	}
	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
</style>
