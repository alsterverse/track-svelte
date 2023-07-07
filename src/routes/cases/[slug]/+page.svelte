<script lang="ts">
	import { onMount } from 'svelte';
	import { useStoryblokBridge } from '@storyblok/svelte';
	import { storyblokEditable } from '@storyblok/svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import CaseImage from './CaseImage.svelte';
	import { spy } from '$lib/actions/spy';
	import { currentSection } from '$lib/stores/app';
	import SubNav from '$lib/components/SubNav.svelte';

	export let data;

	onMount(() => {
		if (data.story) {
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
		}
	});
</script>

{#if data.story.content.component === 'case'}
	<article
		use:storyblokEditable={data}
		class="case"
		id="case"
		use:spy={'#intro, .paragraph, #team'}
		on:spy={(e) => currentSection.set(e.detail)}
	>
		<div id="intro">
			<span>No. {data.caseIndex < 10 ? '0' + data.caseIndex : data.caseIndex}</span>
			<h1>{data.story.content.title}</h1>
			<div class="preamble-container">
				<p>{data.story.content.preamble}</p>
			</div>
			<ul class="info-grid">
				<li class="info-item">
					<span class="info-title">Client</span>
					<span class="info-body">{data.story.content.title}</span>
				</li>
				<li class="info-item">
					<span class="info-title">Date</span>
					<time class="info-body">{data.story.content.date}</time>
				</li>
				<li class="info-item">
					<span class="info-title">Category</span>
					{#each data.story.content.category as category}
						<span class="info-body">{category}</span>
					{/each}
				</li>
				<li class="info-item">
					<span class="info-title">Collaborators</span>
					{#each data.story.content.collaborators as collaborator}
						<span class="info-body">
							<a href={collaborator.link.url} target="_blank">{collaborator.name}</a></span
						>
					{/each}
				</li>

				<li class="info-item">
					<span class="info-title">Project links</span>
					<span class="info-body">
						<a href={data.story.content.link.url} target="_blank">Website</a></span
					>
				</li>
			</ul>
			{#each data.story.content.body as innerContent}
				{#if innerContent.component === 'paragraph'}
					<Paragraph blok={innerContent} />
				{/if}
				{#if innerContent.component === 'caseImage'}
					<CaseImage blok={innerContent} />
				{/if}
			{/each}
			<p class="info-title">Project team</p>
			<ul class="team" id="team">
				{#each data.story.content.team as contributor}
					<li>
						<span class="info-body">{contributor.name} -</span>
						<span class="info-body">{contributor.role} -</span>
						<span class="info-body">{contributor.teamAffiliation}</span>
					</li>
				{/each}
			</ul>
			<nav>
				{#if data.previous}
					<a href={data.previous} class="previous">
						<img src="/longArrow.svg" alt="previous-arrow" />Case no {data.caseIndex < 11
							? '0' + (data.caseIndex - 1)
							: data.caseIndex - 1}
					</a>
				{/if}
				{#if data.next}
					<a href={data.next} class="next">
						Case no {data.caseIndex < 9 ? '0' + (data.caseIndex + 1) : data.caseIndex + 1}
						<img src="/longArrow.svg" alt="next-arrow" />
					</a>
				{/if}
			</nav>
		</div>
	</article>
	<SubNav story={data.story.content} />
{/if}

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
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas: 'previous next';
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

	.previous {
		grid-area: previous;
	}
	.next {
		grid-area: next;
		justify-content: end;
	}
</style>
