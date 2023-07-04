<script lang="ts">
	import type { StoryblokAsset } from '$lib/schema/asset';
	export let blok: StoryblokAsset;
</script>

<img src={blok.filename} alt={blok.alt} />

<style>
	img {
		width: 100%;
		height: 100%;
	}
</style>
