import React from 'react';

export default function ContactForm({ onSubmit, message }) {
  return (
    <section className="contact" id="contato">
      <div className="contact-copy">
        <p className="eyebrow">Uma demonstração prática</p>
        <h2>Pronto para colocar uma ideia no ar?</h2>
        <p>
          Preencha o formulário para testar a interação. Como este projeto não
          possui backend, a resposta aparece apenas nesta página.
        </p>
      </div>

      <form className="contact-form" onSubmit={onSubmit}>
        <label htmlFor="name">
          Seu nome
          <input id="name" name="name" required placeholder="Como podemos chamar você?" />
        </label>
        <label htmlFor="message">
          Sua mensagem
          <textarea
            id="message"
            name="message"
            required
            placeholder="Conte um pouco sobre a ideia..."
            rows="4"
          />
        </label>
        <button type="submit">
          Enviar mensagem <span aria-hidden="true">↗</span>
        </button>
        {message && <p className="form-message" role="status">{message}</p>}
      </form>
    </section>
  );
}
