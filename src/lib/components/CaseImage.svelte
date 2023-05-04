<script lang="ts">
	import type { StoryblokCaseImage } from '$lib/schema/story';
	import { storyblokEditable } from '@storyblok/svelte';
	import StoryBlokImage from './StoryBlokImage.svelte';
	export let blok: StoryblokCaseImage;
	console.log(blok);
</script>

<div use:storyblokEditable={blok}>
	<div>
		<StoryBlokImage blok={blok.image} />
		<span>{blok.imageCaption}</span>
	</div>
</div>

<style>
	div {
		width: 80%;
	}
</style>
