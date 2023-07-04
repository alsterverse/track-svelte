<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import StoryBlokImage from '$lib/components/StoryBlokImage.svelte';
	import type { StoryblokCaseImage } from '$lib/schema/case';
	export let blok: StoryblokCaseImage;
</script>

<div use:storyblokEditable={blok}>
	<StoryBlokImage blok={blok.image} />
</div>

<style>
	div {
		margin: 2rem 0;
		width: 100%;
	}
</style>
