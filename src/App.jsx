import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [message, setMessage] = useState('');
  const [isDark, setIsDark] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name');

    setMessage(`Obrigada, ${name}! Sua mensagem foi recebida.`);
    event.currentTarget.reset();
  }

  return (
    <div className={`page-shell${isDark ? ' is-dark' : ''}`}>
      <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      <main>
        <Hero />
        <Highlights />
        <ContactForm onSubmit={handleSubmit} message={message} />
      </main>
      <Footer />
    </div>
  );
}
