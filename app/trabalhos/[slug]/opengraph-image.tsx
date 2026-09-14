import { ImageResponse } from 'next/og';
import { notFound } from 'next/navigation';
import { projects, getProject } from '../../projects';
import { siteName } from '../../site';

export const alt = 'Projeto do portfólio de Elizandro André';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#fffaf4',
          color: '#321b11',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 9,
              background: '#c84424',
              borderRadius: 2,
            }}
          />
          <div style={{ fontSize: 26, letterSpacing: 6, color: '#725a4d' }}>
            {siteName.toUpperCase()}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 28, letterSpacing: 4, color: '#c84424' }}>
            {project.category.toUpperCase()}
          </div>
          <div style={{ fontSize: 68, lineHeight: 1.05, letterSpacing: -2 }}>
            {project.title}
          </div>
          <div style={{ fontSize: 30, color: '#725a4d', lineHeight: 1.4 }}>
            {project.summary}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 24 }}>
          {project.tags.slice(0, 3).map((tag) => (
            <div
              key={tag}
              style={{
                background: '#fae8d9',
                padding: '12px 26px',
                borderRadius: 99,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
