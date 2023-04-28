<script lang="ts">
	import type { StoryblokPage } from "$lib/schema/storyblok";
  import {
    storyblokEditable,
    StoryblokComponent,
    renderRichText,
  } from "@storyblok/svelte";
  export let blok: StoryblokPage;
</script>

{#key blok}
  <div use:storyblokEditable={blok} class="px-6">
    {#each blok.body as innerBlok}
      <StoryblokComponent blok={innerBlok} />
    {/each}
  </div>
{/key}