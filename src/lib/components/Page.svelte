<script lang="ts">
	import type { StoryblokPage } from '$lib/schema/story';
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok: StoryblokPage;
</script>

{#key blok}
	<div use:storyblokEditable={blok}>
		{#each blok.body as inner_blok}
			<StoryblokComponent blok={inner_blok} />
		{/each}
	</div>
{/key}
