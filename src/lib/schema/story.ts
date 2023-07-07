import { z } from 'zod';
import { StoryblokCase as Case } from './case';
import { StoryblokHeader } from './header';

export const StoryblokComponent = {
	Page: 'page',
	Teaser: 'teaser',
	Feature: 'feature',
	Grid: 'grid',
	Layout: 'layout'
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

const StoryblokLayout = z.object({
	component: z.literal(StoryblokComponent.Layout),
	header: z.array(z.discriminatedUnion('component', [StoryblokHeader]))
});

export const StoryblokStory = z.object({
	name: z.string(),
	published_at: z.string().nullable(),
	created_at: z.string(),
	id: z.number(),
	uuid: z.string(),
	slug: z.string(),
	full_slug: z.string(),
	content: z.discriminatedUnion('component', [StoryblokPage, StoryblokLayout, Case])
});

export type StoryblokStory = z.infer<typeof StoryblokStory>;
export type StoryblokFeature = z.infer<typeof StoryblokFeature>;
export type StoryblokTeaser = z.infer<typeof StoryblokTeaser>;
export type StoryblokGrid = z.infer<typeof StoryblokGrid>;
export type StoryblokPage = z.infer<typeof StoryblokPage>;
export type StoryblokLayout = z.infer<typeof StoryblokLayout>;
export type StoryblokCase = z.infer<typeof Case>;
