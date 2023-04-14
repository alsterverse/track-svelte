import Feature from '$lib/components/Feature.svelte';
import Grid from '$lib/components/Grid.svelte';
import Page from '$lib/components/Page.svelte';
import Teaser from '$lib/components/Teaser.svelte';

import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

export async function load() {
	storyblokInit({
		accessToken: 'X7CoD455aCxxE2pmrj4DQAtt',
		use: [apiPlugin],
		components: {
			feature: Feature,
			grid: Grid,
			page: Page,
			teaser: Teaser
		},
		apiOptions: {
			https: true
		}
	});
	const storyblok = useStoryblokApi();

	return {
		storyblok
	};
}
