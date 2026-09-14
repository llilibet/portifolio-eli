import WorkGallery from './work-gallery';
import { projectCards } from '../projects';
import { pageMetadata } from '../site';
export const metadata = pageMetadata(
  'Trabalhos',
  'Identidades, interfaces e personagens desenvolvidos ao longo da formação de Elizandro André.',
  '/trabalhos',
);
export default function Works() {
  return <WorkGallery projects={projectCards} />;
}
