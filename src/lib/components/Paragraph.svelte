<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';
	import type { StoryblokParagraph } from '$lib/schema/case';
	import SvelteMarkdown from 'svelte-markdown';

	export let blok: StoryblokParagraph;
</script>

<div use:storyblokEditable={blok} id={blok._uid}>
	<SvelteMarkdown source={blok.textBody} />
</div>
