<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok: any;
</script>

<div use:storyblokEditable={blok}>
	<h1>{blok.name}</h1>
</div>
