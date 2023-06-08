<script lang="ts">
	import type { StoryblokCase } from '$lib/schema/case';
	import { storyblokEditable } from '@storyblok/svelte';

	export let bloks: StoryblokCase[];
    export let index: number;

</script>
<h1>Selected cases</h1>
<ul>
    {#each bloks as blok}
        <div use:storyblokEditable={blok} class="case">
            <span>No. {index < 10 ? '0' + index : index}</span>
            <span>Case name</span>
            <span>{blok.content.title}</span>
            <span>Year {blok.content.date}</span>
        </div>
    {/each}
</ul>

<style>
	
</style>
