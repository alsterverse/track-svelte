import { z } from 'zod';

export const StoryblokLink = z.object({
	id: z.string(),
	url: z.string(),
	cached_url: z.string()
});
