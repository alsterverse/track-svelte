<script lang="ts">
	import type { StoryblokCase } from '$lib/schema/case';
	import { storyblokEditable } from '@storyblok/svelte';
	import { currentSection } from '$lib/stores/app';

	import CaseImage from './CaseImage.svelte';
	import Paragraph from './Paragraph.svelte';
	import { spy } from '$lib/actions/spy';

	export let blok: StoryblokCase;
	export let index: number;
	export let previous: string;
	export let next: string;
</script>

<article
	use:storyblokEditable={blok}
	class="case"
	id="case"
	use:spy={'#intro, .paragraph, #team'}
	on:spy={(e) => currentSection.set(e.detail)}
>
	<div id="intro">
		<span>No. {index < 10 ? '0' + index : index}</span>
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
				<time class="info-body">{blok.date}</time>
			</li>
			<li class="info-item">
				<span class="info-title">Category</span>
				{#each blok.category as category}
					<span class="info-body">{category}</span>
				{/each}
			</li>
			<li class="info-item">
				<span class="info-title">Collaborators</span>
				{#each blok.collaborators as collaborator}
					<span class="info-body">
						<a href={collaborator.link.url} target="_blank">{collaborator.name}</a></span
					>
				{/each}
			</li>

			<li class="info-item">
				<span class="info-title">Project links</span>
				<span class="info-body"> <a href={blok.link.url} target="_blank">Website</a></span>
			</li>
		</ul>
	</div>

	{#each blok.body as innerBlok}
		{#if innerBlok.component === 'paragraph'}
			<Paragraph blok={innerBlok} />
		{/if}
		{#if innerBlok.component === 'caseImage'}
			<CaseImage blok={innerBlok} />
		{/if}
	{/each}
	<p class="info-title">Project team</p>
	<ul class="team" id="team">
		{#each blok.team as contributor}
			<li>
				<span class="info-body">{contributor.name} -</span>
				<span class="info-body">{contributor.role} -</span>
				<span class="info-body">{contributor.teamAffiliation}</span>
			</li>
		{/each}
	</ul>
	<nav>
		{#if previous}
			<a href={previous} class="previous">
				<img src="/longArrow.svg" alt="previous-arrow" />Case no {index < 11
					? '0' + (index - 1)
					: index - 1}
			</a>
		{/if}
		{#if next}
			<a href={next} class="next">
				Case no {index < 9 ? '0' + (index + 1) : index + 1}
				<img src="/longArrow.svg" alt="next-arrow" />
			</a>
		{/if}
	</nav>
</article>

<style>
	article {
		padding: 95px;
	}
	article > h1 {
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
		margin-top: 72px;
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

	a {
		text-decoration: none;
		position: relative;
	}
	.info-body > a::after {
		content: url('/arrow.svg');
		margin-left: 8px;
	}

	nav {
		margin-top: 72px;
		display: flex;
		justify-content: flex-end;
	}

	nav > a {
		display: flex;
		align-items: center;
		gap: 24px;
		font-size: var(--fontsize-body-small);
	}

	nav > .previous > img {
		transform: rotate(180deg);
	}

	nav:has(.previous) {
		justify-content: space-between;
	}
</style>
