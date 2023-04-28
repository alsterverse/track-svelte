import Feature from '$lib/components/Feature.svelte';
import Grid from '$lib/components/Grid.svelte';
import Page from '$lib/components/Page.svelte';
import Teaser from '$lib/components/Teaser.svelte';
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import type { LayoutLoad } from './$types';

const callbackComponents = () => {
	return {
		feature: Feature,
		grid: Grid,
		page: Page,
		teaser: Teaser
	};
};
export const load = (async () => {
	storyblokInit({
		accessToken: 'cwiKSOPJwPKFkPjWDDTZFAtt',
		use: [apiPlugin],
		components: callbackComponents,
		apiOptions: {
			https: true
		}
		/*
    components: {
      feature: Feature,
      grid: Grid,
      page: Page,
      teaser: Teaser,
    }
    */
	});
	const storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}) satisfies LayoutLoad;
