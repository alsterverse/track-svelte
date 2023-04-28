import { z } from 'zod';

const StoryblokComponent = {
	Page: 'page',
	Teaser: 'teaser',
	Feature: 'feature',
	Grid: 'grid'
} as const;

const StoryblokFeature = z.object({
	component: z.literal(StoryblokComponent.Feature),
	name: z.string()
});

const StoryblokTeaser = z.object({
	component: z.literal(StoryblokComponent.Teaser),
	headline: z.string()
});

const StoryblokGrid = z.object({
	component: z.literal(StoryblokComponent.Grid),
	columns: z.array(z.discriminatedUnion('component', [StoryblokFeature, StoryblokTeaser]))
});

const StoryblokPage = z.object({
	component: z.literal(StoryblokComponent.Page),
	body: z.array(
		z.discriminatedUnion('component', [StoryblokGrid, StoryblokTeaser, StoryblokFeature])
	)
});

export const StoryblokStory = z.object({
	name: z.string(),
	published_at: z.string().nullable(),
	id: z.number(),
	uuid: z.string(),
	slug: z.string(),
	full_slug: z.string(),
	content: StoryblokPage
});

export type StoryblokStory = z.infer<typeof StoryblokStory>;
export type StoryblokFeature = z.infer<typeof StoryblokFeature>;
export type StoryblokTeaser = z.infer<typeof StoryblokTeaser>;
export type StoryblokGrid = z.infer<typeof StoryblokGrid>;
export type StoryblokPage = z.infer<typeof StoryblokPage>;
