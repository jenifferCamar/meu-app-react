import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy">
        <div className="hero-kicker">
          <span className="pulse-dot" />
          Projeto acadêmico · 2026
        </div>

        <h1>
          Do código para o <em>mundo.</em>
        </h1>

        <p className="hero-text">
          Uma experiência digital simples, expressiva e construída para mostrar
          o poder de uma boa ideia com React.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#processo">
            Explorar projeto <span aria-hidden="true">↓</span>
          </a>
          <span className="hero-note">React + Vite · front-end</span>
        </div>
      </div>

      <div className="hero-visual" aria-label="Painel visual do projeto" role="img">
        <div className="visual-grid" />
        <div className="visual-card">
          <div className="visual-card-top">
            <span>modo-web</span>
            <span className="online-status"><i /> online</span>
          </div>
          <div className="visual-card-title">
            interface que
            <strong>respira.</strong>
          </div>
          <div className="visual-lines" aria-hidden="true">
            <span /><span /><span />
          </div>
          <div className="visual-card-bottom">
            <span>01 / 03</span>
            <span>scroll para explorar</span>
          </div>
        </div>
        <span className="visual-sticker">feito para a web</span>
        <span className="visual-orb visual-orb-one" />
        <span className="visual-orb visual-orb-two" />
      </div>
    </section>
  );
}
