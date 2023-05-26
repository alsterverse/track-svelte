import { z } from 'zod';
import { StoryblokAsset } from './asset';
import { StoryblokLink } from './link';

export const CaseComponent = {
	Case: 'case',
	CaseImage: 'caseImage',
	Paragraph: 'paragraph',
	Collaborator: 'collaborator'
} as const;

export const Contributor = z.object({
	name: z.string(),
	role: z.string(),
	teamAffiliation: z.string()
});

const Collaborator = z.object({
	component: z.literal(CaseComponent.Collaborator),
	name: z.string(),
	link: StoryblokLink
});
const StoryblokCaseImage = z.object({
	component: z.literal(CaseComponent.CaseImage),
	image: StoryblokAsset,
	imageCaption: z.string()
});

const StoryblokParagraph = z.object({
	component: z.literal(CaseComponent.Paragraph),
	textBody: z.string()
});

export const StoryblokCase = z.object({
	component: z.literal(CaseComponent.Case),
	title: z.string(),
	preamble: z.string(),
	date: z.string(),
	link: StoryblokLink,
	previewImg: StoryblokAsset,
	team: z.array(Contributor),
	collaborators: z.array(Collaborator),
	category: z.array(z.string()),
	body: z.array(z.discriminatedUnion('component', [StoryblokCaseImage, StoryblokParagraph]))
});

export type StoryblokCase = z.infer<typeof StoryblokCase>;
export type StoryblokParagraph = z.infer<typeof StoryblokParagraph>;
export type StoryblokCaseImage = z.infer<typeof StoryblokCaseImage>;
