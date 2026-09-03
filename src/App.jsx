import { useState } from 'react';

const highlights = [
  ['01', 'React', 'Interface componentizada e pronta para evoluir.'],
  ['02', 'GitHub', 'Código versionado com histórico e colaboração.'],
  ['03', 'Vercel', 'Deploy contínuo a cada novo push.'],
];

export default function App() {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setMessage(`Obrigado, ${form.get('name')}! Sua mensagem foi recebida.`);
    event.currentTarget.reset();
  }

  return (
    <main className="page-shell">
      <nav className="nav-bar" aria-label="Navegação principal">
        <a className="brand" href="#inicio">MODO<span>WEB</span></a>
        <a className="nav-link" href="https://github.com/jenifferCamar/meu-app-angular" target="_blank" rel="noreferrer">
          Ver no GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Atividade 01 · Desenvolvimento Web</p>
          <h1>Uma ideia simples, <em>publicada.</em></h1>
          <p className="hero-text">Uma aplicação React criada no VS Code, versionada no GitHub e preparada para crescer com a velocidade da Vercel.</p>
          <a className="primary-button" href="#contato">Começar uma conversa <span aria-hidden="true">↘</span></a>
        </div>
        <div className="hero-mark" aria-hidden="true"><span>R</span></div>
      </section>

      <section className="highlights" aria-label="Tecnologias utilizadas">
        {highlights.map(([number, title, text]) => (
          <article className="highlight" key={title}>
            <span className="number">{number}</span>
            <div><h2>{title}</h2><p>{text}</p></div>
          </article>
        ))}
      </section>

      <section className="contact" id="contato">
        <div><p className="eyebrow">Vamos construir</p><h2>Tem um projeto em mente?</h2></div>
        <form onSubmit={handleSubmit}>
          <label>Seu nome<input name="name" required placeholder="Como podemos chamar você?" /></label>
          <label>Sua mensagem<textarea name="message" required placeholder="Conte um pouco sobre a ideia..." rows="3" /></label>
          <button type="submit">Enviar mensagem <span aria-hidden="true">↗</span></button>
          {message && <p className="form-message" role="status">{message}</p>}
        </form>
      </section>

      <footer><span>© 2026 Modo Web</span><span>Feito com React · Publicado na Vercel</span></footer>
    </main>
  );
}
