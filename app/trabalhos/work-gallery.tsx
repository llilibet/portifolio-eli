'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { type ProjectCard } from '../projects';
const filters = ['Todos', 'Identidade visual', 'UI/UX', 'Personagens'];
export default function WorkGallery({ projects }: { projects: ProjectCard[] }) {
  const [filter, setFilter] = useState('Todos');
  const filtered = projects.filter(
    (p) => filter === 'Todos' || p.categories.includes(filter),
  );
  return (
    <main id="conteudo" className="works-page page-enter">
      <section className="works-heading">
        <div>
          <span className="eyebrow">
            <i /> IDEIAS EM FORMAS REAIS
          </span>
          <h1>
            Trabalhos<span>.</span>
          </h1>
          <p className="lead">
            Projetos em que pesquisa, experimentação
            <br className="desktop-break" /> e design se encontram.
          </p>
          <p className="heading-description">
            Identidades, interfaces e personagens desenvolvidos
            <br className="desktop-break" /> ao longo da minha formação.
          </p>
        </div>
        <div className="works-art">
          <img src="/images/hero.webp" alt="" width="1120" height="1400" />
          <div className="handwritten">
            o processo
            <br />
            também conta
            <br />
            histórias
            <span />
          </div>
        </div>
      </section>
      <div className="gallery-toolbar">
        <div className="filters" aria-label="Filtrar trabalhos por área">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>
        <span className="project-count" aria-live="polite">
          {String(filtered.length).padStart(2, '0')} PROJETOS
        </span>
      </div>
      <section className="projects-grid" aria-label="Projetos do portfólio">
        {filtered.map((p) => (
          <Link
            className={`project-card ${p.id === 'mysticleo' && filter === 'Todos' ? 'featured' : ''}`}
            key={p.id}
            href={`/trabalhos/${p.id}`}
            aria-label={`Conhecer ${p.title}`}
          >
            <div className={`project-cover ${p.color}`}>
              <img src={p.cover} alt={p.title} loading="lazy" />
              <span className="cover-arrow">
                <ArrowUpRight size={23} />
              </span>
            </div>
            <div className="project-info">
              <span className="eyebrow">
                {p.id === 'mysticleo' ? 'EM DESTAQUE' : p.category}
              </span>
              <h2>
                {p.title} <ArrowRight size={23} />
              </h2>
              <p>{p.summary}</p>
              <div className="tags">
                {p.tags.slice(0, 3).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>
      <Link className="collection-banner" href="/colecao">
        <span>
          Alguns experimentos vivem na
          <br />
          <strong>
            Coleção de criação <ArrowRight size={27} />
          </strong>
        </span>
        <span className="eyebrow">
          MAIS IDEIAS, MAIS PROCESSOS,
          <br />
          MAIS HISTÓRIAS.
        </span>
      </Link>
    </main>
  );
}
