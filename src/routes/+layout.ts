//import.meta.env.VITE_ACCESS_TOKEN
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import type { LayoutLoad } from './$types';

import Feature from '$lib/components/Feature.svelte';
import Grid from '$lib/components/Grid.svelte';
import Page from '$lib/components/Page.svelte';
import Teaser from '$lib/components/Teaser.svelte';
import Paragraph from '$lib/components/Paragraph.svelte';
import CaseImage from './cases/[slug]/CaseImage.svelte';

const callbackComponents = () => {
	return {
		feature: Feature,
		page: Page,
		grid: Grid,
		teaser: Teaser,
		caseImage: CaseImage,
		paragraph: Paragraph
	};
};

export const load = (async () => {
	storyblokInit({
		accessToken: import.meta.env.VITE_ACCESS_TOKEN,
		use: [apiPlugin],
		components: callbackComponents,
		apiOptions: { https: true }
	});

	const storyblokApi = useStoryblokApi();

	return { storyblokApi: storyblokApi };
}) satisfies LayoutLoad;
