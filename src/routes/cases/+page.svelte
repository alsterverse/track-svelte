<script lang="ts">
	import { onMount } from 'svelte';
	import CaseListItem from '$lib/components/CaseListItem.svelte';
	import { fade } from 'svelte/transition';
	export let data;
	let ready = false;
	onMount(() => (ready = true));

	let filters: string[] = [];
	let dropDownOpen: boolean = false;
</script>

<article>
	<h1>Selected cases</h1>

	<div class="dropdown">
		<button on:click={() => (dropDownOpen = !dropDownOpen)}
			>{dropDownOpen ? 'stäng' : 'öppna'}</button
		>
		{#if dropDownOpen}<ul>
				{#each data.categories as category, i}
					{#if ready}
						<li transition:fade={{ delay: i * 100 }}>
							<input
								type="checkbox"
								name={category.name}
								on:change={(e) => {
									if (!e.currentTarget.checked) {
										filters = filters.splice(filters.indexOf(category.name), 1);
									} else {
										filters = [...filters, category.name];
									}
								}}
							/>{category.name}
						</li>{/if}
				{/each}
			</ul>{/if}
	</div>
	<ul>
		{#each data.stories as story, i}
			{#if ready && story.content.component === 'case'}
				{#if filters.length > 0}
					{#if story.content.category.map((c) => filters.includes(c)).includes(true)}
						<CaseListItem {i} blok={story.content} slug={story.full_slug} name={story.name} />
					{/if}
				{:else if filters.length === 0}
					<CaseListItem {i} blok={story.content} slug={story.full_slug} name={story.name} />
				{/if}
			{/if}
		{/each}
	</ul>
</article>

<style>
	article {
		padding: 95px;
	}
	h1 {
		font-size: 24px;
		font-weight: 400;
	}
	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.dropdown {
	}
</style>
