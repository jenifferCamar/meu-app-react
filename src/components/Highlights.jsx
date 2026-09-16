import React from 'react';

const highlights = [
  {
    number: '01',
    icon: '◒',
    title: 'Componentes vivos',
    text: 'Uma interface dividida em partes pequenas, reutilizáveis e fáceis de evoluir.',
    tag: 'React',
  },
  {
    number: '02',
    icon: '↗',
    title: 'Código que viaja',
    text: 'O GitHub registra cada passo e deixa o projeto pronto para colaborar e compartilhar.',
    tag: 'GitHub',
  },
  {
    number: '03',
    icon: '✦',
    title: 'Pronto para o ar',
    text: 'Com Vite e Vercel, a aplicação sai do computador e chega ao navegador em poucos passos.',
    tag: 'Vercel',
  },
];

export default function Highlights() {
  return (
    <section className="process-section" id="processo">
      <div className="section-heading">
        <div>
          <p className="eyebrow">O processo</p>
          <h2>Pequenos passos.<br /><em>Grande presença.</em></h2>
        </div>
        <p className="section-intro">Uma visão rápida das escolhas que fazem esta página funcionar.</p>
      </div>

      <div className="highlights">
        {highlights.map((highlight) => (
          <article className="highlight" key={highlight.number}>
            <div className="highlight-topline">
              <span className="number">{highlight.number}</span>
              <span className="highlight-icon" aria-hidden="true">{highlight.icon}</span>
            </div>
            <h3>{highlight.title}</h3>
            <p>{highlight.text}</p>
            <span className="highlight-tag">{highlight.tag}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
