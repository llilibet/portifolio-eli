import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
export default function Home() {
  return (
    <main id="conteudo" className="home page-enter">
      <div className="hero-copy">
        <span className="eyebrow">
          <i /> DESIGN QUE CONECTA
        </span>
        <h1 aria-label="Design para boas histórias.">
          <span className="hero-title-line hero-title-start">Design</span>
          <span className="hero-title-line hero-title-offset">para boas</span>
          <em className="hero-title-line">histórias.</em>
        </h1>
        <p className="lead">
          Projetos que unem criatividade,
          <br className="desktop-break" /> pessoas e ideias em movimento.
        </p>
        <div className="tags">
          <span>design</span>
          <span>identidade visual</span>
          <span>ui/ux</span>
          <span>personagens</span>
        </div>
        <Link href="/trabalhos" className="button">
          Ver meus trabalhos <ArrowRight size={20} />
        </Link>
        <Link className="intro-link" href="/sobre">
          Prazer, sou Elizandro André <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className="hero-art">
        <img
          src="/images/cabine.webp"
          alt="Renderização 3D de uma cabine telefônica vermelha sobre um fundo bege"
          width="1200"
          height="1200"
          fetchPriority="high"
        />
      </div>
    </main>
  );
}
