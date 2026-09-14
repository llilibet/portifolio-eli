import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { about } from '../projects';
import { pageMetadata } from '../site';
export const metadata = pageMetadata(
  'Sobre mim',
  'Curiosidade é o que me move. Designer formado pela UFAM, mestrando em Design de Sistemas de Informação na UFPR.',
  '/sobre',
);
export default function About() {
  return (
    <main id="conteudo" className="about-page page-enter">
      <div className="about-intro">
        <span className="eyebrow">
          <i /> PRAZER, ELIZANDRO
        </span>
        <h1>
          Sobre
          <br />
          <em>mim.</em>
        </h1>
        <p className="lead">
          Curiosidade é<br />o que me move.
        </p>
        <div className="about-text">
          {about.slice(0, 2).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Link className="button" href="/trabalhos">
          Conheça meus trabalhos <ArrowRight size={18} />
        </Link>
      </div>
      <figure className="portrait">
        <img
          src="/images/elizandro.webp"
          alt="Elizandro André sorrindo em uma fotografia iluminada pelo sol"
          width="1400"
          height="933"
        />
        <figcaption>
          ELIZANDRO ANDRÉ<span>DESIGNER & CURIOSO</span>
        </figcaption>
      </figure>
      <div className="about-side">
        <div className="handwritten">
          mais pessoas,
          <br />
          mais ideias,
          <br />
          mais vida.
          <span />
        </div>
        <div className="about-text">
          {about.slice(2).map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
