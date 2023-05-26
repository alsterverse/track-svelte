<script lang="ts">
	import { onMount } from 'svelte';
	import { useStoryblokBridge } from '@storyblok/svelte';
	import Case from '$lib/components/Case.svelte';
	export let data;

	onMount(() => {
		if (data.story) {
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
		}
	});
</script>

{#if data.story.content.component === 'case'}
	<Case blok={data.story.content} index={data.index} previous={data.previous} next={data.next} />
{/if}
