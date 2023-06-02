<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import StoryBlokImage from './StoryBlokImage.svelte';
	import type { StoryblokCaseImage } from '$lib/schema/case';
	export let blok: StoryblokCaseImage;
</script>

<div use:storyblokEditable={blok} id={blok._uid}>
	<StoryBlokImage blok={blok.image} />
</div>

<style>
	div {
		margin: 2rem 0;
		width: 100%;
	}
</style>
