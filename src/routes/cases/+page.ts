import { StoryblokStory, StoryblokDataSource } from '$lib/schema/story';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { z } from 'zod';
export const load = (async ({ parent }) => {
	const { storyblokApi } = await parent();
	const dataStories = await storyblokApi.get(`cdn/stories/`, {
		version: 'draft',
		starts_with: 'cases/'
	});

	const dataCategories = await storyblokApi.get(`cdn/datasource_entries`, {
		datasource: 'categories'
	});
	const categories = dataCategories.data.datasource_entries;
	const stories = dataStories.data.stories;
	console.log(categories);
	if (!stories) throw error(404);
	const parsedStories = z.array(StoryblokStory).safeParse(stories);

	const parsedCategories = z.array(StoryblokDataSource).safeParse(categories);

	if (!parsedStories.success)
		throw error(500, 'Could not parse Storyblok story ' + parsedStories.error);

	if (!parsedCategories.success)
		throw error(500, 'Could not parse Storyblok datasources ' + parsedCategories.error);

	parsedStories.data.forEach((story) => {
		if (story.content.component !== 'case') throw error(500, 'wrong content');
	});
	return {
		stories: parsedStories.data,
		categories: parsedCategories.data
	};
}) satisfies PageLoad;
