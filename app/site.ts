import type { Metadata } from 'next';

// Endereço público do site. Troque esta linha quando o portfólio for publicado:
// ela monta os links de compartilhamento (WhatsApp, LinkedIn), o sitemap.xml e o robots.txt.
export const siteUrl = 'http://localhost:3000';
export const siteName = 'Elizandro André';
export const siteTitle = 'Elizandro André — Design para boas histórias';
export const siteDescription =
  'Portfólio de Elizandro André. Identidade visual, interfaces e personagens: projetos que unem criatividade, pessoas e ideias em movimento.';

// Título e texto que cada página mostra quando o link dela é compartilhado.
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const shared = { title: `${title} — ${siteName}`, description };
  return {
    title,
    description,
    openGraph: {
      ...shared,
      type: 'website',
      locale: 'pt_BR',
      siteName,
      url: `${siteUrl}${path}`,
    },
    twitter: { ...shared, card: 'summary_large_image' },
  };
}
