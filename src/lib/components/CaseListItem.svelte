<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import StoryBlokImage from './StoryBlokImage.svelte';
	import type { StoryblokCase } from '$lib/schema/story';
	export let i: number;
	export let blok: StoryblokCase;
	export let slug: string;
	export let name: string;
	let showImg = false;
</script>

<li in:fade={{ delay: i * 200 }}>
	<a href={slug} on:mouseenter={() => (showImg = true)} on:mouseleave={() => (showImg = false)}>
		<div>
			<p>No. 0{i + 1}</p>
			<p>{name}</p>
		</div>
		<p>
			{#each blok.category as category, i}
				<span>{category}{i !== blok.category.length - 1 ? ', ' : ''}</span>
			{/each}
		</p>
		{#if showImg}
			<div class="img-div" in:scale>
				<StoryBlokImage blok={blok.previewImg} />
			</div>
		{/if}
		<p class="year">{blok.date.split(' ')[1]}</p>
	</a>
</li>

<style>
	p {
		font-size: 15px;
		margin: 2px;
		align-self: end;
	}
	a {
		color: var(--color-foreground2);
		width: 100%;
		display: flex;
		gap: 20px;
		align-items: center;
		text-decoration: none;
		position: relative;
	}
	a:hover {
		color: var(--color-foreground);
	}
	li div:first-of-type {
		width: 300px;
	}
	.year {
		flex: 1;
		text-align: end;
	}
	.img-div {
		padding: 20px;
		position: absolute;
		width: 30vw;
		right: 10%;
	}
</style>
