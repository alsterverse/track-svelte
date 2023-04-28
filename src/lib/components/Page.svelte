<script lang="ts">
	import { storyblokEditable, StoryblokComponent, renderRichText } from '@storyblok/svelte';
	export let blok: any;
	$: resolvedRichText = renderRichText(blok.richText);
</script>

{#key blok}
	<div use:storyblokEditable={blok}>
		{#each blok.body as blok}
			<StoryblokComponent {blok} />
		{/each}
		<div>{@html resolvedRichText}</div>
	</div>
{/key}
