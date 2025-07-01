import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { categoryMap } from './categoryMap';

const categoryEnum = z.enum(
  Object.keys(categoryMap) as [keyof typeof categoryMap, ...Array<keyof typeof categoryMap>]
);

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		category: categoryEnum.optional(), // <- hier validiert
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		lang: z.enum(['de', 'en']),
		groupId: z.string().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		image: image().optional(),
	}),
});

export const collections = { blog, projects };
