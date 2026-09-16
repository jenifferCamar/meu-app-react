import React from 'react';

const steps = [
  ['01', 'Observe', 'O bloco se move de um lado para o outro.'],
  ['02', 'Solte', 'Clique no botão ou aperte a tecla espaço.'],
  ['03', 'Equilibre', 'Acerte o próximo bloco para subir cada vez mais.'],
];

export default function HowToPlay() {
  return (
    <section className="how-to-play" id="como-jogar">
      <div className="how-heading">
        <p className="eyebrow">Como jogar</p>
        <h2>Um jogo simples<br /><em>de explicar.</em></h2>
      </div>

      <div className="steps-list">
        {steps.map(([number, title, text]) => (
          <article className="step" key={number}>
            <span className="step-number">{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
