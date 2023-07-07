<script lang="ts">
	import type { StoryblokCase, StoryblokParagraph } from '$lib/schema/case';
	import { currentSection } from '$lib/stores/app';

	export let story: StoryblokCase;

	const paragraphs = story.body.filter((b) => b.component === 'paragraph') as StoryblokParagraph[];
</script>

<nav>
	<ul>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li>
			<a href="#intro" class:active={$currentSection === 0}>Intro</a>
		</li>
	</ul>
	<ul>
		{#each paragraphs as paragraph, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li>
				<a href={'#' + paragraph.navTitle} class:active={$currentSection === i + 1}>
					{paragraph.component === 'paragraph' ? paragraph.navTitle : ''}</a
				>
			</li>
		{/each}
	</ul>
	<ul>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li>
			<a href="#team" class:active={$currentSection === paragraphs.length + 1}>Team</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		position: sticky;
		bottom: 24px;
		left: 50%;
		transform: translate(-50%);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		backdrop-filter: blur(12.5px);
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.222) 0%,
			rgba(255, 255, 255, 0.147) 100%
		);
		border-radius: 58px;
		width: fit-content;
		padding: 0px 20px;
	}
	ul {
		all: unset;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	ul::after {
		content: ' | ';
		color: var(--color-stroke);
		margin: auto;
		font-size: 22px;
	}
	ul:last-of-type::after {
		content: none;
	}
	li {
		all: unset;
		padding: 18px 12px;
	}

	a {
		all: unset;
		cursor: pointer;
		color: var(--color-stroke);
	}
	a.active {
		color: var(--color-foreground);
	}
</style>
