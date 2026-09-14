import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects, getProject } from '../../projects';
import { pageMetadata } from '../../site';
import CaseContent from '../../case-content';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata(project.title, project.summary, `/trabalhos/${slug}`);
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <main id="conteudo" className="case-page page-enter">
      <div className="case-top">
        <span className="eyebrow">PROCESSO CRIATIVO</span>
        <Link href="/trabalhos" className="close-project">
          <ArrowLeft size={18} /> Trabalhos
        </Link>
      </div>
      <CaseContent project={project} />
      <div className="case-end">
        <p>Ideias que ganham forma.</p>
        <Link className="button" href="/trabalhos">
          Voltar aos trabalhos <ArrowRight size={17} />
        </Link>
      </div>
    </main>
  );
}
