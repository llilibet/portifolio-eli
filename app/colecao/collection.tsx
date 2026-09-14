'use client';
import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { Modal } from '../modal';
import { type CollectionItem } from '../projects';
export default function Collection({ items }: { items: CollectionItem[] }) {
  const [filter, setFilter] = useState('Todos');
  const [selected, setSelected] = useState<CollectionItem | null>(null);
  const filters = ['Todos', ...new Set(items.map((item) => item.type))];
  return (
    <main id="conteudo" className="collection-page page-enter">
      <div className="collection-heading">
        <div>
          <span className="eyebrow">
            <i /> UM ESPAÇO PARA EXPERIMENTAR
          </span>
          <h1>
            Coleção
            <br />
            de <em>criação.</em>
          </h1>
          <p className="lead">
            Ideias soltas, estudos e descobertas pelo caminho.
          </p>
        </div>
        <div className="handwritten">
          pequenos projetos,
          <br />
          grandes explorações
          <span />
        </div>
      </div>
      <div className="gallery-toolbar">
        <p className="collection-intro">
          Recortes dos processos que deram vida aos meus trabalhos.
        </p>
        <div className="filters" aria-label="Filtrar coleção">
          {filters.map((f) => (
            <button
              aria-pressed={f === filter}
              key={f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <section className="collection-grid" aria-label="Estudos e experimentos">
        {items
          .filter((i) => filter === 'Todos' || i.type === filter)
          .map((item) => (
            <button
              onClick={() => setSelected(item)}
              key={item.title}
              className="collection-item"
            >
              <div className={`study-image ${item.color}`}>
                <img loading="lazy" src={item.image} alt={item.alt} />
                <span className="cover-arrow">
                  <ArrowUpRight size={23} />
                </span>
              </div>
              <h2>{item.title}</h2>
              <span className="eyebrow">{item.type}</span>
            </button>
          ))}
      </section>
      <div className="collection-bottom">
        <span className="handwritten">a curiosidade continua...</span>
        <span className="eyebrow">EM CONSTANTE CRIAÇÃO</span>
      </div>
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        className="study-dialog"
        labelledBy="titulo-do-estudo"
      >
        {selected && (
          <>
            <button
              type="button"
              className="close-project"
              aria-label="Fechar estudo"
              onClick={() => setSelected(null)}
            >
              Fechar <X size={18} />
            </button>
            <div className={`study-full ${selected.color}`}>
              <img src={selected.image} alt={selected.alt} />
            </div>
            <h2 className="study-title" id="titulo-do-estudo">
              {selected.title}
            </h2>
            <p className="study-description">{selected.detail}</p>
            <a
              className="intro-link"
              href={selected.image}
              target="_blank"
              rel="noreferrer"
            >
              Abrir imagem original <ArrowUpRight size={16} />
            </a>
          </>
        )}
      </Modal>
    </main>
  );
}
