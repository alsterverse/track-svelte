import { z } from 'zod';

export const StoryblokLink = z.object({
	id: z.number(),
	url: z.string(),
	linktype: z.string(),
	fieldtype: z.string(),
	cached_url: z.string()
});
