import React from 'react';

export default function ContactForm({ onSubmit, message }) {
  return (
    <section className="contact" id="contato">
      <div className="contact-copy">
        <p className="eyebrow">Uma demonstração prática</p>
        <h2>Tem uma ideia?<br /><em>Comece por aqui.</em></h2>
        <p>
          Teste a interação preenchendo o formulário. A resposta aparece na
          tela porque este é um projeto front-end, sem backend.
        </p>
      </div>

      <form className="contact-form" onSubmit={onSubmit}>
        <label htmlFor="name">
          Seu nome
          <input id="name" name="name" required placeholder="Como podemos chamar você?" />
        </label>
        <label htmlFor="message">
          Sua mensagem
          <textarea id="message" name="message" required placeholder="Conte um pouco sobre a ideia..." rows="4" />
        </label>
        <button type="submit">
          Enviar mensagem <span aria-hidden="true">↗</span>
        </button>
        {message && <p className="form-message" role="status">{message}</p>}
      </form>
    </section>
  );
}
