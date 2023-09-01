import { StoryblokStory } from '$lib/schema/story';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { z } from 'zod';

export const load = (async ({ parent }) => {
	const { storyblokApi } = await parent();
	const dataStories = await storyblokApi.get(`cdn/stories/`, {
		version: 'draft',
		starts_with: 'cases/'
	});
	const stories = dataStories.data.stories;
	if (!stories) throw error(404);
	const parsedStories = z.array(StoryblokStory).safeParse(stories);
	if (!parsedStories.success)
		throw error(500, 'Could not parse Storyblok story ' + parsedStories.error);
	parsedStories.data.forEach((story) => {
		if (story.content.component !== 'case') throw error(500, 'wrong content');
	});
	return {
		stories: parsedStories.data
	};
}) satisfies PageLoad;
