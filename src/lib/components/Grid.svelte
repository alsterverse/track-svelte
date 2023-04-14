<script lang="ts">
	import type { StoryblokGrid } from '$lib/schema/story';
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok: StoryblokGrid;
</script>

<ul use:storyblokEditable={blok}>
	{#each blok.columns as inner_blok}
		<li>
			<StoryblokComponent blok={inner_blok} />
		</li>
	{/each}
</ul>
