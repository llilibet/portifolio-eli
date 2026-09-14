import Collection from './collection';
import { collection } from '../projects';
import { pageMetadata } from '../site';
export const metadata = pageMetadata(
  'Coleção de criação',
  'Ideias soltas, estudos e descobertas pelo caminho: recortes dos processos que deram vida aos trabalhos.',
  '/colecao',
);
export default function CollectionPage() {
  return <Collection items={collection} />;
}
