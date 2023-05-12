import { z } from 'zod';
import { StoryblokAsset } from './asset';
import { StoryblokLink } from './link';

export const CaseComponent = {
	Case: 'case',
	CaseImage: 'caseImage'
} as const;

export const Contributor = z.object({
	name: z.string(),
	role: z.string(),
	teamAffiliation: z.string()
});

const StoryblokCaseImage = z.object({
	component: z.literal(CaseComponent.CaseImage),
	image: StoryblokAsset,
	imageCaption: z.string()
});

export const StoryblokCase = z.object({
	component: z.literal(CaseComponent.Case),
	title: z.string(),
	preamble: z.string(),
	logo: StoryblokAsset,
	link: StoryblokLink,
	team: z.array(Contributor),
	category: z.array(z.string()),
	body: z.array(z.discriminatedUnion('component', [StoryblokCaseImage]))
});

export type StoryblokCase = z.infer<typeof StoryblokCase>;
export type StoryblokCaseImage = z.infer<typeof StoryblokCaseImage>;
