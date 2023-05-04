import { z } from 'zod';
import { StoryblokCase as Case } from './case';
import { StoryblokAsset } from './asset';

const StoryblokComponent = {
	Page: 'page',
	Case: 'case',
	Teaser: 'teaser',
	Feature: 'feature',
	Grid: 'grid',
	CaseImage: 'caseImage'
} as const;

const StoryblokCaseImage = z.object({
	component: z.literal(StoryblokComponent.CaseImage),
	image: StoryblokAsset,
	imageCaption: z.string()
});

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

export const StoryblokCase = z.object({
	component: z.literal('case'),
	body: z.array(z.discriminatedUnion('component', [StoryblokCaseImage]))
});

export const StoryblokStory = z.object({
	name: z.string(),
	published_at: z.string().nullable(),
	id: z.number(),
	uuid: z.string(),
	slug: z.string(),
	full_slug: z.string(),
	content: StoryblokPage || StoryblokCase
});

export type StoryblokStory = z.infer<typeof StoryblokStory>;
export type StoryblokFeature = z.infer<typeof StoryblokFeature>;
export type StoryblokTeaser = z.infer<typeof StoryblokTeaser>;
export type StoryblokGrid = z.infer<typeof StoryblokGrid>;
export type StoryblokPage = z.infer<typeof StoryblokPage>;
export type StoryblokCase = z.infer<typeof StoryblokCase>;
export type StoryblokCaseImage = z.infer<typeof StoryblokCaseImage>;
