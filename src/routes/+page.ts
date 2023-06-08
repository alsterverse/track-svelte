import { StoryblokStory } from '$lib/schema/story';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get(`cdn/stories/`, {
		version: 'draft',
		starts_with: 'cases/'
	});
	const stories = dataStory.data.stories;

	const parsedStories = stories.reduce((acc: StoryblokStory[], story: StoryblokStory) => {
		const parsedStory = StoryblokStory.safeParse(story);
		if (!parsedStory.success) {
			throw error(500, 'Could not parse Storyblok story ' + parsedStory.error);
		}
		if (parsedStory.data.content.component !== 'case') {
			throw error(500, 'Wrong content');
		}
		acc.push(parsedStory.data);
		return acc;
	}, []);

	return {
		stories: parsedStories
	};
}) satisfies PageLoad;
