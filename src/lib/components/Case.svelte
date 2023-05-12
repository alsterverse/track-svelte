<script lang="ts">
	import type { StoryblokCase } from '$lib/schema/case';
	import { storyblokEditable } from '@storyblok/svelte';
	import CaseImage from './CaseImage.svelte';
	export let blok: StoryblokCase;

	const BodyMap = {
		caseImage: CaseImage
	};
</script>

<div use:storyblokEditable={blok} class="case">
	<span>No. 02</span>
	<h1>{blok.title}</h1>
	<div class="preamble-container">
		<p>{blok.preamble}</p>
	</div>
	<ul class="info-grid">
		<li class="info-item">
			<span class="info-title">Client</span>
			<span class="info-body">{blok.title}</span>
		</li>
		<li class="info-item">
			<span class="info-title">Date</span>
			<time class="info-body">March 2023</time>
		</li>
		<li class="info-item">
			<span class="info-title">Category</span>
			{#each blok.category as category}
				<span class="info-body">{category}</span>
			{/each}
		</li>
		<li class="info-item">
			<span class="info-title">Collaborators</span>
			<span class="info-body">{blok.title}</span>
		</li>
		<li class="info-item">
			<span class="info-title">Project links</span>
			<span class="info-body"> <a href={blok.link.url}>Website</a></span>
		</li>
	</ul>
	{#each blok.body as innerBlok}
		<svelte:component this={BodyMap[innerBlok.component]} blok={innerBlok} />
	{/each}
	<p class="info-title">Project team</p>
	<ul class="team">
		{#each blok.team as contributor}
			<li>
				<span class="info-body">{contributor.name} -</span>
				<span class="info-body">{contributor.role} -</span>
				<span class="info-body">{contributor.teamAffiliation}</span>
			</li>
		{/each}
	</ul>
</div>

<style>
	.case {
		padding: 95px;
	}
	.case > h1 {
		margin-top: 0;
		font-weight: 400;
	}
	.preamble-container {
		width: 55%;
		text-align: justify;
		font-weight: 400;
	}
	.info-grid {
		all: unset;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr auto;
	}
	.info-item {
		display: flex;
		flex-direction: column;
		font-size: var(--fontsize-body-small);
	}

	.info-title {
		font-size: var(--fontsize-body-small);
	}
	.info-body {
		font-size: var(--fontsize-body-small);
		color: var(--color-foreground2);
	}

	.team {
		all: unset;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		max-height: 100px;
		align-content: flex-start;
	}
	.team > li {
		all: unset;
		width: 445px;
		margin-right: 0.5rem;
	}
</style>
