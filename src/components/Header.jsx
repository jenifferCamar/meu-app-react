import React from 'react';

export default function Header({ isDark, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Voltar ao início">
        MODO<span>WEB</span>
      </a>

      <nav className="nav-bar" aria-label="Navegação principal">
        <a className="nav-link" href="#processo">O processo</a>
        <a className="nav-link" href="#contato">Contato</a>
        <button
          className="theme-button"
          type="button"
          onClick={onToggleTheme}
          aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          <span aria-hidden="true">{isDark ? '☼' : '☾'}</span>
        </button>
        <a
          className="nav-link nav-link-highlight"
          href="https://github.com/jenifferCamar/meu-app-angular"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
