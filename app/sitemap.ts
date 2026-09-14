import type { MetadataRoute } from 'next';
import { projects } from './projects';
import { siteUrl } from './site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1 },
    { path: '/trabalhos', priority: 0.9 },
    { path: '/sobre', priority: 0.8 },
    { path: '/colecao', priority: 0.7 },
  ];
  return [
    ...pages.map(({ path, priority }) => ({
      url: `${siteUrl}${path}`,
      priority,
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/trabalhos/${project.id}`,
      priority: 0.6,
    })),
  ];
}
