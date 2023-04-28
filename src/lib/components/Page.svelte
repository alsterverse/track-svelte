<script lang="ts">
  import {
    storyblokEditable,
    StoryblokComponent,
    renderRichText,
  } from "@storyblok/svelte";
  export let blok: any;
</script>

{#key blok}
  <div use:storyblokEditable={blok} class="px-6">
    {#each blok.body as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>
{/key}