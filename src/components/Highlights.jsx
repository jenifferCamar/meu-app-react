import React from 'react';

const highlights = [
  {
    number: '01',
    title: 'Componentes',
    text: 'Cada parte da interface foi separada em componentes React fáceis de entender.',
  },
  {
    number: '02',
    title: 'Versionamento',
    text: 'O projeto pode ser acompanhado no GitHub com um histórico claro de alterações.',
  },
  {
    number: '03',
    title: 'Publicação',
    text: 'A Vercel transforma o repositório em uma página pública pronta para acessar.',
  },
];

export default function Highlights() {
  return (
    <section className="highlights" id="processo" aria-label="Etapas do projeto">
      {highlights.map((highlight) => (
        <article className="highlight" key={highlight.number}>
          <span className="number">{highlight.number}</span>
          <div>
            <h2>{highlight.title}</h2>
            <p>{highlight.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
