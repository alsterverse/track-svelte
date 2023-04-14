<script lang="ts">
	import type { StoryblokFeature } from '$lib/schema/story';
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok: StoryblokFeature;
</script>

<div use:storyblokEditable={blok}>
	<h1>{blok.name}</h1>
</div>
