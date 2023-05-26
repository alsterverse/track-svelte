import { z } from 'zod';

export const StoryblokAsset = z.object({
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
export type StoryblokAsset = z.infer<typeof StoryblokAsset>;
