import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir para o início">
        EMPILHA<span>!</span>
      </a>

      <nav className="nav-bar" aria-label="Navegação principal">
        <a href="#como-jogar">Como jogar</a>
        <span className="header-status"><i /> jogo local</span>
      </nav>
    </header>
  );
}
