<script lang="ts">
	import CaseList from '$lib/components/CaseList.svelte';
	export let data;
</script>
<div>
	{#if data.stories}
		<CaseList bloks={data.stories} index={data.stories.index} />
	{/if}
</div>
