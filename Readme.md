# Portfólio de Elizandro André

Versão enxuta, com Home, Sobre mim, Trabalhos e Coleção de criação.

## Rodar no VS Code

Abra esta pasta no VS Code. Com Node.js 22.13.0 ou superior instalado, execute no terminal:

```sh
npm ci
npm run dev
```

Abra o endereço mostrado no terminal, normalmente `http://localhost:3000`. As mudanças aparecem ao salvar. Para parar, pressione `Ctrl+C`. Na próxima vez, basta `npm run dev`.

No PowerShell, se `npm.ps1` estiver bloqueado, use `npm.cmd ci` e `npm.cmd run dev`.

## O que existe na pasta

- `app/`: as quatro páginas, seus textos, estilos e interações.
- `public/`: sua foto, as imagens dos projetos e a cabine decorativa.
- `package.json` e `package-lock.json`: comandos e versões exatas das bibliotecas.
- `next.config.ts`, `postcss.config.mjs` e `tsconfig.json`: configurações necessárias de execução e TypeScript.
- `.gitignore`: evita incluir arquivos gerados no controle de versão.

`node_modules`, `.next` e `dist` são pastas geradas pelas ferramentas. Não fazem parte desta entrega. `node_modules` aparece após a instalação e é necessária para rodar o site; você não precisa editar nada dentro dela.

## Onde editar

| O que mudar | Arquivo |
| --- | --- |
| Home | `app/page.tsx` |
| Sobre mim | `app/sobre/page.tsx` |
| Trabalhos e filtros | `app/trabalhos/work-gallery.tsx` |
| Página de um trabalho | `app/trabalhos/[slug]/page.tsx` |
| Conteúdo do trabalho | `app/case-content.tsx` |
| Janela da Coleção | `app/modal.tsx` |
| Coleção de criação | `app/colecao/collection.tsx` |
| Navegação e redes sociais | `app/shell.tsx` |
| Cores, layout e responsividade | `app/globals.css` |
| Fontes, título e descrição | `app/layout.tsx` |
| Endereço do site e textos de compartilhamento | `app/site.ts` |
| Resumos, capas e categorias | `app/projects.ts` |
| Biografia, Coleção e textos completos | `app/content.json` |

Em `app/content.json`, cada trabalho fica dentro de `projects`, identificado pelo mesmo `id` usado em `app/projects.ts`. O trabalho tem uma lista `tags` e uma lista `blocks`, e cada bloco diz o que ele é:

```json
{ "type": "heading", "text": "Criando dentro de restrições" }
{ "type": "text", "text": "Um parágrafo do texto do projeto." }
{ "type": "image", "src": "/images/image12.webp", "alt": "Esboços a lápis de ideias de marca" }
```

Use `heading` para os títulos de seção e `text` para os parágrafos. O `alt` da imagem descreve o que ela mostra, para quem usa leitor de tela e para os buscadores. Você pode reescrever qualquer texto livremente: o site respeita o `type` que você declarou, sem tentar adivinhar pelo tamanho da frase.

Os itens da Coleção de criação ficam na lista `collection` do mesmo arquivo. Cada item tem `title`, `type` (que alimenta os filtros), `detail`, `image`, `alt`, `color` e `shape` (vazio, `tall` ou `wide`, que define o tamanho do quadro na grade).

Cada trabalho tem seu próprio endereço, formado pelo `id` definido em `app/projects.ts`. O projeto do NUPAD, por exemplo, fica em `/trabalhos/nupad`. Esses endereços podem ser compartilhados diretamente e são encontrados por buscadores.

A imagem da cabine na Home acompanha sua proporção original em qualquer largura de tela. Sua altura cresce junto com a largura, evitando cortes.

## Imagens

As imagens ficam em `public/images/` no formato WebP, que pesa bem menos que PNG ou JPEG sem perda visível de qualidade. Para trocar ou acrescentar uma imagem, basta salvar o arquivo nessa pasta e citar o caminho no `app/content.json`: as medidas são lidas do próprio arquivo quando o site é gerado, então não há nenhum número para anotar à mão. Nas páginas de trabalho o site ainda gera versões menores automaticamente, para que um celular não baixe a imagem em tamanho de desktop.

## Quando o site for publicado

Abra `app/site.ts` e troque o endereço na primeira linha pelo endereço real do site. Isso ajusta de uma vez os links de compartilhamento (WhatsApp, LinkedIn, Twitter), o `sitemap.xml` e o `robots.txt`, que são gerados automaticamente.

Ao compartilhar um link, aparece um cartão com fundo claro, o nome e a frase da página. Na Home ele vem de `app/opengraph-image.tsx` e, em cada trabalho, de `app/trabalhos/[slug]/opengraph-image.tsx` — os dois desenham o cartão com as cores do site, sem precisar de um arquivo de imagem pronto.

## Preparar a versão de produção

```sh
npm run build
npm run start
```

O projeto usa TypeScript, React, CSS e Next.js. Do Tailwind vem apenas o reset que padroniza os estilos do navegador; todo o visual é escrito à mão em `app/globals.css`. Roda localmente com Node.js, sem configuração de hospedagem, login, banco de dados ou chave de API. É necessário acesso à internet para instalar as bibliotecas e obter as fontes na primeira utilização.
