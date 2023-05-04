<script lang="ts">
	import type { StoryblokCase } from '$lib/schema/case';
	import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte';
	export let blok: StoryblokCase;
	console.log(blok);
</script>

<div use:storyblokEditable={blok}>
	<h1>{blok.title}</h1>
	<img src={blok.logo.filename} alt="" />
	<a href={blok.link.url}>{blok.link.url}</a>
	<div>
		<p>{blok.preamble}</p>
	</div>
	{#each blok.body as innerBlok}
		<StoryblokComponent blok={innerBlok} />
	{/each}
	<div>
		<b>teamet</b>
		<ul>
			{#each blok.team as contributor}
				<li>
					<span>{contributor.name},</span>
					<span>{contributor.role},</span>
					<span>{contributor.teamAffiliation}</span>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	div {
		background-color: var(--color-background);
		color: var(--color-foreground1);
	}
</style>
