import { cache } from 'react';
import { join } from 'node:path';
import sharp from 'sharp';

// Lê a largura e a altura reais do arquivo durante a geração do site, para que
// nenhuma medida precise ser anotada à mão em app/content.json.
export const imageSize = cache(async (src: string) => {
  try {
    const { width, height } = await sharp(
      join(process.cwd(), 'public', src),
    ).metadata();
    return { width, height };
  } catch {
    throw new Error(
      `Não encontrei a imagem "${src}". Confira se o arquivo existe em public${src.replace(/\//g, '\\')} e se o nome citado em app/content.json está igual, inclusive a extensão .webp.`,
    );
  }
});
