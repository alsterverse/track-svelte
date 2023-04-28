<script lang="ts">
	import type { StoryblokTeaser } from '$lib/schema/story';
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok: StoryblokTeaser;
</script>

<div use:storyblokEditable={blok}>
	<h1>{blok.headline}</h1>
</div>
