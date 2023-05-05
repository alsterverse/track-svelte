import { z } from 'zod';

const StoryblokComponent = {
	CasePage: 'case',
	CaseImage: 'caseImage',
	Contributor: 'contributor'
} as const;

const Teams = z.enum([
	'teamWebEcosystems',
	'teamMobileExperiences',
	'teamCommerce',
	'teamDigitalProducts',
	'teamLabsSandbox',
	'alster'
]);

const StoryblokBlock = z.object({
	_uid: z.string(),
	name: z.string(),
	_editable: z.string()
});

const CaseImage = StoryblokBlock.extend({
	component: z.literal(StoryblokComponent.CaseImage)
});

const Contributor = StoryblokBlock.extend({
	component: z.literal(StoryblokComponent.Contributor),
	name: z.string(),
	role: z.string(),
	teamAffiliation: Teams
});

const Asset = z.object({
	id: z.number(),
	alt: z.string(),
	name: z.string(),
	focus: z.string(),
	title: z.string(),
	filename: z.string(),
	copyright: z.string(),
	fieldtype: z.string(),
	is_external_url: z.boolean()
});

const Link = z.object({
	id: z.string(),
	url: z.string(),
	linktype: z.string(),
	fieldtype: z.string(),
	cached_url: z.string()
});

const Categories = z.enum([
	'webEcosystems',
	'mobileExperiences',
	'commerce',
	'digitalProducts',
	'labsSandbox',
	'frontend',
	'backend',
	'design'
]);

const CasePage = z.object({
	name: z.string(),
	published_at: z.null(),
	id: z.number(),
	uuid: z.string(),
	content: z.object({
		body: z.array(StoryblokBlock),
		link: Link,
		logo: Asset,
		team: z.array(StoryblokBlock),
		title: z.string(),
		category: z.array(Categories),
		preamble: z.string(),
		component: z.string()
	}),
	slug: z.string(),
	full_slug: z.string()
});

export type StoryblokBlock = z.infer<typeof StoryblokBlock>;
export type CasePage = z.infer<typeof CasePage>;
export type CaseImage = z.infer<typeof CaseImage>;
export type Contributor = z.infer<typeof Contributor>;
export type Asset = z.infer<typeof Asset>;
export type Link = z.infer<typeof Link>;
export type Categories = z.infer<typeof Categories>;
export type Teams = z.infer<typeof Teams>;
