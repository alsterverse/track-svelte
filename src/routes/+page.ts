import { StoryblokStory } from '$lib/schema/story';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get(`cdn/stories/home/`, {
		version: 'draft'
	});

	const story = StoryblokStory.safeParse(dataStory.data.story);

	if (!story.success) throw error(500, 'Could not parse Storyblok story');

	return {
		story: story.data
	};
}) satisfies PageLoad;
