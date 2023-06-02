<script lang="ts">
	import { onMount } from 'svelte';
	import { useStoryblokBridge } from '@storyblok/svelte';
	import Case from '$lib/components/Case.svelte';
	import SubNav from '$lib/components/SubNav.svelte';
	import { currentSection } from '$lib/stores/app';

	export let data;

	onMount(() => {
		if (data.story) {
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
		}
	});

	let activeId: string;

	currentSection.subscribe((value) => {
		activeId = value;
	});
</script>

{#if data.story.content.component === 'case'}
	<Case blok={data.story.content} index={data.index} previous={data.previous} next={data.next} />
	<SubNav story={data.story.content} />
{/if}
