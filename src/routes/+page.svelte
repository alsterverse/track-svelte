<script lang="ts">
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';

	export let data;

	onMount(() => {
		if (data.story) {
			useStoryblokBridge(data.story.id, (new_story) => (data.story = new_story));
		}
	});
</script>

{#if data.story}
	<StoryblokComponent blok={data.story.content} />
{/if}
