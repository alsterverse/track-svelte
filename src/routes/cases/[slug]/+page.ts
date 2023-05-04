import type { PageLoad } from './$types';
import type { StoryblokStory } from '$lib/schema/story';

export const load = (async ({ parent, params }) => {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get(`cdn/stories/`, {
		version: 'draft',
		starts_with: 'cases/'
	});
	const story = dataStory.data.stories.find((s: StoryblokStory) => s.slug === params.slug);

	return {
		story: story
	};
}) satisfies PageLoad;
