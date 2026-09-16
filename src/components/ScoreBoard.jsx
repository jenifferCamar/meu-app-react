import React from 'react';

export default function ScoreBoard({ score, bestScore, level }) {
  return (
    <div className="score-board" aria-label="Placar">
      <div className="score-item score-main">
        <span>Pontuação</span>
        <strong>{String(score).padStart(3, '0')}</strong>
      </div>
      <div className="score-item">
        <span>Recorde</span>
        <strong>{String(bestScore).padStart(3, '0')}</strong>
      </div>
      <div className="score-item">
        <span>Nível</span>
        <strong>{String(level).padStart(2, '0')}</strong>
      </div>
    </div>
  );
}
