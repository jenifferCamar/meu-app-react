import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">Atividade acadêmica · Desenvolvimento Web</p>
        <h1>
          Uma ideia simples, <em>publicada.</em>
        </h1>
        <p className="hero-text">
          Uma landing page criada com React e Vite para mostrar como um projeto
          pode sair do código e chegar à internet de forma clara e organizada.
        </p>
        <a className="primary-button" href="#contato">
          Conhecer o projeto <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="hero-art" aria-label="Ilustração abstrata do projeto" role="img">
        <div className="art-orbit art-orbit-one" />
        <div className="art-orbit art-orbit-two" />
        <div className="hero-mark">M</div>
        <span className="art-label">React / Vite</span>
      </div>
    </section>
  );
}
