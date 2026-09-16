export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Voltar ao início">
        MODO<span>WEB</span>
      </a>

      <nav className="nav-bar" aria-label="Navegação principal">
        <a className="nav-link" href="#processo">Como funciona</a>
        <a
          className="nav-link nav-link-highlight"
          href="https://github.com/jenifferCamar/meu-app-angular"
          target="_blank"
          rel="noreferrer"
        >
          Ver no GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
