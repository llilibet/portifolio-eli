import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { type Project } from './projects';
import { imageSize } from './image-size';

export default async function CaseContent({ project }: { project: Project }) {
  const sizes = await Promise.all(
    project.blocks.map((block) =>
      block.type === 'image' ? imageSize(block.src!) : null,
    ),
  );
  return (
    <>
      <div className="case-heading">
        <span className="eyebrow">{project.category}</span>
        <h1 className="case-title">{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
        <div className="tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="case-body">
        {project.blocks.map((block, i) => {
          if (block.type === 'image')
            return (
              <figure className="case-figure" key={i}>
                <a
                  href={block.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ampliar imagem: ${block.alt}`}
                >
                  <Image
                    src={block.src!}
                    alt={block.alt!}
                    width={sizes[i]!.width}
                    height={sizes[i]!.height}
                    sizes="(max-width: 760px) 88vw, 800px"
                  />
                  <span>
                    Ampliar <ArrowUpRight size={15} />
                  </span>
                </a>
              </figure>
            );
          if (block.type === 'heading') return <h3 key={i}>{block.text}</h3>;
          return <p key={i}>{block.text}</p>;
        })}
      </div>
    </>
  );
}
