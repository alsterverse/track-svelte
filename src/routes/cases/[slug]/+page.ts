import type { PageLoad } from './$types';
import { StoryblokStory } from '$lib/schema/story';
import { error } from '@sveltejs/kit';

export const load = (async ({ parent, params }) => {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get(`cdn/stories/`, {
		version: 'draft',
		starts_with: 'cases/'
	});

	const index = dataStory.data.stories.findIndex((s: StoryblokStory) => s.slug === params.slug);
	const story = dataStory.data.stories[index];

	const previous = dataStory.data.stories[index - 1]?.slug;
	const next = dataStory.data.stories[index + 1]?.slug;

	if (!story) throw error(404);
	const parsedStory = StoryblokStory.safeParse(story);

	if (!parsedStory.success)
		throw error(500, 'Could not parse Storyblok story ' + parsedStory.error);

	if (parsedStory.data.content.component !== 'case') throw error(500, 'Wrong content');

	return {
		story: parsedStory.data,
		index: index + 1,
		previous: previous,
		next: next
	};
}) satisfies PageLoad;
