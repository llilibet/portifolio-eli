import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
export default function Home() {
  return (
    <main id="conteudo" className="home page-enter">
      <div className="hero-copy">
        <p className="home-intro">
          <span aria-hidden="true" /> Design, curiosidade e experimentação
        </p>
        <h1>
          <span>Olá, eu sou</span>
          <span>Elizandro</span>
          <em>André.</em>
        </h1>
        <p className="home-bio">
          Designer, nascido e criado no Amazonas. Crio identidades visuais,
          interfaces e personagens — e gosto de experimentar um pouco de tudo.
        </p>
        <div className="home-actions">
          <Link href="/trabalhos" className="button home-work-link">
            Conheça meus trabalhos <ArrowRight size={18} />
          </Link>
        </div>
      </div>
        <Link href="/colecao" className="home-feature" aria-label="Ver Cabine telefônica e outros estudos na coleção">
          <figure>
            <div className="home-feature-image">
              <img
                src="/images/cabine.webp"
                alt="Cabine telefônica vermelha modelada em 3D por Elizandro André"
                width="1200"
                height="1200"
                fetchPriority="high"
              />
              <span className="home-feature-note" aria-hidden="true">
                ideias que<br />ganham forma
              </span>
            </div>
            <figcaption>
              <div>
                <p className="home-feature-label">Projeto em destaque · Modelagem 3D</p>
                <h2>Cabine telefônica</h2>
              </div>
              <span className="home-feature-arrow" aria-hidden="true"><ArrowRight size={24} /></span>
            </figcaption>
          </figure>
        </Link>
    </main>
  );
}
