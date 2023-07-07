//import.meta.env.VITE_ACCESS_TOKEN
import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';
import type { LayoutLoad } from './$types';
import { StoryblokStory } from '$lib/schema/story';
import { error } from '@sveltejs/kit';

import Feature from '$lib/components/Feature.svelte';
import Grid from '$lib/components/Grid.svelte';
import Page from '$lib/components/Page.svelte';
import Teaser from '$lib/components/Teaser.svelte';
import Case from '$lib/components/Case.svelte';
import CaseImage from '$lib/components/CaseImage.svelte';
import Paragraph from '$lib/components/Paragraph.svelte';

const callbackComponents = () => {
	return {
		feature: Feature,
		page: Page,
		grid: Grid,
		teaser: Teaser,
		case: Case,
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

	const dataLayout = await storyblokApi.get(`cdn/stories/layout/`, {
		version: 'draft'
	});

	const layout = StoryblokStory.safeParse(dataLayout.data.story);

	if (!layout.success) throw error(500, 'Could not parse Storyblok layout');

	return {
		storyblokApi: storyblokApi,
		layout: layout.data
	};
}) satisfies LayoutLoad;
