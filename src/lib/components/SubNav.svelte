<script lang="ts">
	import type { StoryblokCase } from '$lib/schema/case';
	import { currentSection } from '$lib/stores/app';

	export let story: StoryblokCase;

	let activeId: string;

	currentSection.subscribe((value) => {
		activeId = value;
	});
	const handleClick = (id: string) => {
		currentSection.update(() => id);
		activeId = id;
	};
</script>

<nav>
	<ul>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li>
			<a href="#intro" class:active={activeId === 'intro'} on:click={() => handleClick('intro')}>
				intro</a
			>
		</li>
	</ul>
	<ul>
		{#each story.body as blok}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li>
				<a
					href={'#' + blok._uid}
					class:active={activeId === blok._uid}
					on:click={() => handleClick(blok._uid)}
				>
					{blok.component === 'caseImage' ? blok.imageCaption : ''}
					{blok.component === 'paragraph' ? blok.navTitle : ''}</a
				>
			</li>
		{/each}
	</ul>
	<ul>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li>
			<a href="#team" class:active={activeId === 'team'} on:click={() => handleClick('team')}
				>team</a
			>
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
