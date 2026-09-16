import React from 'react';
import Header from './components/Header';
import Game from './components/Game';
import HowToPlay from './components/HowToPlay';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Game />
        <HowToPlay />
      </main>
      <Footer />
    </div>
  );
}
