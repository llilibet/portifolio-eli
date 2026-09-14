import { ImageResponse } from 'next/og';
import { siteName } from './site';

export const alt = 'Elizandro André — Design para boas histórias';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ fontSize: 82, lineHeight: 1.05, letterSpacing: -2 }}>
            Design para boas histórias.
          </div>
          <div style={{ fontSize: 34, color: '#725a4d' }}>
            Projetos que unem criatividade, pessoas e ideias em movimento.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 26 }}>
          {['identidade visual', 'ui/ux', 'personagens'].map((tag) => (
            <div
              key={tag}
              style={{
                background: '#fae8d9',
                color: '#321b11',
                padding: '14px 28px',
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
