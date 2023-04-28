<script lang="ts">
	import type { StoryblokPage } from '$lib/schema/story';
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
	export let blok: StoryblokPage;
</script>

{#key blok}
	<div use:storyblokEditable={blok}>
		{#each blok.body as innerBlok}
			<StoryblokComponent blok={innerBlok} />
		{/each}
	</div>
{/key}
