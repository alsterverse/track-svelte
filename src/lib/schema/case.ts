import { z } from 'zod';
import { StoryblokAsset } from './asset';
import { StoryblokLink } from './link';

export const Contributor = z.object({
	name: z.string(),
	role: z.string(),
	teamAffiliation: z.string()
});

export const StoryblokCase = z.object({
	component: z.literal('case'),
	title: z.string(),
	preamble: z.string(),
	logo: StoryblokAsset,
	link: StoryblokLink,
	team: z.array(Contributor),
	body: z.any()
});

export type StoryblokCase = z.infer<typeof StoryblokCase>;
