import type { CollectionEntry } from 'astro:content';

export function getLocalizedPosts(
  posts: CollectionEntry<'blog'>[],
  lang: 'de' | 'en'
) {
  const grouped = new Map<string, Record<string, CollectionEntry<'blog'>>>();

  for (const post of posts) {
    const groupKey = post.data.groupId ?? post.id;
    const group = grouped.get(groupKey) ?? {};
    group[post.data.lang] = post;
    grouped.set(groupKey, group);
  }

  const result: CollectionEntry<'blog'>[] = [];

  for (const group of grouped.values()) {
    if (group[lang]) {
      result.push(group[lang]);
    } else {
      const fallback = group[lang === 'de' ? 'en' : 'de'];
      if (fallback) result.push(fallback);
    }
  }

  return result;
}
