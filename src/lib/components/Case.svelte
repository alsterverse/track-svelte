<script lang="ts">
	import type { StoryblokCase } from '$lib/schema/case';
	import { storyblokEditable } from '@storyblok/svelte';

	import CaseImage from './CaseImage.svelte';
	import Paragraph from './Paragraph.svelte';

	export let blok: StoryblokCase;
	export let index: number;
	export let previous: string;
	export let next: string;
</script>

<div use:storyblokEditable={blok} class="case">
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
	{#each blok.body as innerBlok}
		{#if innerBlok.component === 'paragraph'}
			<Paragraph blok={innerBlok} />
		{/if}
		{#if innerBlok.component === 'caseImage'}
			<CaseImage blok={innerBlok} />
		{/if}
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
	<div class="case-pagination">
		<span class="previous">
			{#if previous}
				<a href={previous}>
					<img src="/longArrow.svg" alt="previous-arrow" />Case no {index < 11
						? '0' + (index - 1)
						: index - 1}
				</a>
			{/if}</span
		>
		<span class="next">
			{#if next}
				<a href={next}
					>Case no {index < 9 ? '0' + (index + 1) : index + 1}
					<img src="/longArrow.svg" alt="next-arrow" />
				</a>
			{/if}
		</span>
	</div>
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

	a {
		text-decoration: none;
		position: relative;
	}
	.info-body > a::after {
		content: url('/arrow.svg');
		margin-left: 8px;
	}

	.case-pagination {
		margin-top: 71.5px;
		display: flex;
		justify-content: space-between;
	}
	.case-pagination > span > a {
		display: flex;
		align-items: center;
		gap: 24px;
		font-size: var(--fontsize-body-small);
	}
	.case-pagination > .previous > a > img {
		transform: rotate(180deg);
	}
</style>
