'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Camera } from 'lucide-react';
export const instagram = 'https://www.instagram.com/ahhh_eli/';
export const linkedin =
  'https://www.linkedin.com/in/elizandro-carneiro-991a08344/';
export function Navigation() {
  const path = usePathname();
  return (
    <header className="site-header">
      <Link
        href="/"
        className="brand"
        aria-label="Elizandro André, página inicial"
      >
        <span className="brand-mark" />
        <span>
          ELIZANDRO
          <br />
          <b>ANDRÉ</b>
        </span>
      </Link>
      <nav aria-label="Navegação principal">
        {[
          ['/', 'Home'],
          ['/sobre', 'Sobre mim'],
          ['/trabalhos', 'Trabalhos'],
          ['/colecao', 'Coleção de criação'],
        ].map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={path === href ? 'page' : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
      <a
        className="button contact"
        href={instagram}
        target="_blank"
        rel="noreferrer"
      >
        Vamos conversar <ArrowUpRight size={18} />
      </a>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-name">
        ELIZANDRO ANDRÉ © {new Date().getFullYear()}
      </span>
      <div className="social-links">
        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram de Elizandro André"
        >
          <Camera size={20} />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn de Elizandro André"
        >
          <b style={{ fontSize: 20, letterSpacing: -1 }}>in</b>
        </a>
      </div>
    </footer>
  );
}
