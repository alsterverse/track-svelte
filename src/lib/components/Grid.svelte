<script lang="ts">
	import type { StoryblokGrid } from '$lib/schema/story';
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
	export let blok: StoryblokGrid;
</script>

<div use:storyblokEditable={blok}>
	{#each blok.columns as innerBlok}
		<div>
			<StoryblokComponent blok={innerBlok} />
		</div>
	{/each}
</div>
