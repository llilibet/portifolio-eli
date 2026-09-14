import type { Metadata } from 'next';
import { DM_Sans, Cormorant_Garamond, Caveat } from 'next/font/google';
import { Navigation, Footer } from './shell';
import { siteUrl, siteName, siteTitle, siteDescription } from './site';
import './globals.css';
const sans = DM_Sans({ variable: '--font-body', subsets: ['latin'] });
const serif = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
});
const script = Caveat({ variable: '--font-script', subsets: ['latin'] });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body className={`${sans.variable} ${serif.variable} ${script.variable}`}>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <div className="site-shell">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
