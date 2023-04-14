import { StoryblokStory } from '$lib/schema/story';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
	const { storyblok } = await parent();

	const data_story = await storyblok.get('cdn/stories/home/', {
		version: 'draft'
	});

	const parsed_story = StoryblokStory.safeParse(data_story.data.story);

	if (!parsed_story.success) throw error(503, 'Storyblok data does not match schema');

	return {
		story: parsed_story.data
	};
}) satisfies PageLoad;
