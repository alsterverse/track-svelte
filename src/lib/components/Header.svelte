<script lang="ts">
	import type { StoryblokHeader } from '$lib/schema/header';
	export let blok: StoryblokHeader;
</script>

<header>
	<a href="/" aria-label="Back to top">
		<img src={blok.logo.filename} alt={blok.logo.alt} />
	</a>

	<nav>
		{#each blok.siteNav as siteNavItem}
			<a href={siteNavItem.link.cached_url}>{siteNavItem.title}</a>
		{/each}
	</nav>
</header>

<style>
	header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		box-sizing: border-box;
		width: 100%;
		padding: 64px;
	}

	nav {
		display: flex;
		flex-direction: row;
		gap: 40px;
	}

	nav > a {
		font-size: var(--fontsize-navigation);
		text-decoration: none;
	}
</style>
