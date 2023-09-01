import { z } from 'zod';
import { StoryblokAsset } from './asset';
import { StoryblokLink } from './link';

export const HeaderComponent = {
	Header: 'header',
	SiteNavItem: 'siteNavItem'
} as const;

const NavItem = z.object({
	component: z.literal(HeaderComponent.SiteNavItem),
	title: z.string(),
	link: StoryblokLink
});

export const StoryblokHeader = z.object({
	component: z.literal(HeaderComponent.Header),
	logo: StoryblokAsset,
	siteNav: z.array(NavItem)
});

export type StoryblokHeader = z.infer<typeof StoryblokHeader>;
