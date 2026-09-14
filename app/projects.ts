import content from './content.json';
export type Block = {
  type: string;
  text?: string;
  src?: string;
  alt?: string;
};
export type CollectionItem = {
  title: string;
  type: string;
  detail: string;
  image: string;
  alt: string;
  shape: string;
  color: string;
};
export type Project = {
  id: string;
  title: string;
  category: string;
  categories: string[];
  summary: string;
  cover: string;
  color: string;
  tags: string[];
  blocks: Block[];
};
const definitions = [
  {
    id: 'mysticleo',
    title: 'Mysticléo — uma personagem para Angry Birds',
    category: 'Concept design',
    categories: ['Personagens'],
    summary:
      'Pesquisa visual, ideação e vetorização para criar uma personagem que conversa com um universo já reconhecível.',
    cover: '/images/image8.webp',
    color: 'lilac',
  },
  {
    id: 'nupad',
    title: 'NUPAD — identidade visual',
    category: 'Identidade visual',
    categories: ['Identidade visual'],
    summary:
      'Uma marca desenvolvida em dupla para o Núcleo de Pesquisa em Administração da UFAM. Entre pesquisa, restrições e novas possibilidades.',
    cover: '/images/image20.webp',
    color: 'blue',
  },
  {
    id: 'quimica-em-foco',
    title: 'Química em Foco — identidade visual',
    category: 'Identidade visual',
    categories: ['Identidade visual'],
    summary:
      'Moléculas, foco e a lente de uma câmera: uma identidade para aproximar a química dos estudantes.',
    cover: '/images/image24.webp',
    color: 'sand',
  },
  {
    id: 'cinema',
    title: 'Movie Theater Snack Ordering',
    category: 'Wireframes · UX/UI',
    categories: ['UI/UX'],
    summary:
      'Um estudo de navegação, hierarquia e checkout para uma experiência mobile de pedidos de lanches no cinema.',
    cover: '/images/image26.webp',
    color: 'gray',
  },
  {
    id: 'whiskerworld',
    title: 'Whiskerworld — uma experiência de adoção',
    category: 'Web design · UI/UX',
    categories: ['UI/UX'],
    summary:
      'Uma interface leve e acolhedora para conectar cães e gatos a novos lares, do primeiro contato ao interesse pela adoção.',
    cover: '/images/image31.webp',
    color: 'green',
  },
  {
    id: 'whiskerworld-marca',
    title: 'Whiskerworld — identidade visual',
    category: 'Identidade visual',
    categories: ['Identidade visual'],
    summary:
      'Cães, gatos e a letra W se encontram em uma marca que traduz proximidade, afeto e acolhimento.',
    cover: '/images/image43.webp',
    color: 'forest',
  },
];
const sections: Record<string, { tags: string[]; blocks: Block[] }> =
  content.projects;
export const projects: Project[] = definitions.map((p) => ({
  ...p,
  ...sections[p.id],
}));
export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}
// Versão sem o conteúdo dos cases, para a galeria não carregar textos que não mostra.
export type ProjectCard = Omit<Project, 'blocks'>;
export const projectCards: ProjectCard[] = projects.map(
  ({ blocks, ...card }) => card,
);
export const collection: CollectionItem[] = content.collection;
export const about = content.about;
