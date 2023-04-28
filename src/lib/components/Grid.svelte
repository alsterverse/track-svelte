<script lang="ts">
	import type { StoryblokGrid } from "$lib/schema/storyblok";
  import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

  export let blok: StoryblokGrid;
</script>

<div
  use:storyblokEditable={blok}
  class="container mx-auto grid md:grid-cols-3 gap-16 place-items-center"
>
  {#each blok.columns as innerBlok}
    <div class="flex-auto px-6">
      <StoryblokComponent blok={innerBlok} />
    </div>
  {/each}
</div>