<script lang="ts">
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import Case from '$lib/components/Case.svelte';
	export let data;

	onMount(() => {
		if (data.story) {
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
		}
	});
</script>

<div>
	{#if data.story}
		<Case blok={data.story.content} />
	{/if}
</div>
