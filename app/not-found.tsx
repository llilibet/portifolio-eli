import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="conteudo" className="not-found">
      <span className="eyebrow">404</span>
      <h1>
        Outro
        <br />
        <em>caminho.</em>
      </h1>
      <p>Esta página não foi encontrada.</p>
      <Link href="/" className="button">
        Voltar para a Home
      </Link>
    </main>
  );
}
