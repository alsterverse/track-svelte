<script lang="ts">
  import { storyblokEditable } from "@storyblok/svelte";
  import type { StoryblokTeaser } from "$lib/schema/storyblok";
  export let blok: StoryblokTeaser;
</script>

<div
  use:storyblokEditable={blok}
  class="py-8 mb-6 text-5xl font-bold text-center"
>
  {blok.headline}
</div>