import React from 'react';

export default function GameBoard({ stack, activeBlock, onDrop }) {
  return (
    <div
      className="game-board"
      aria-label="Área do jogo. Clique para soltar o bloco."
      role="button"
      tabIndex="0"
      onClick={onDrop}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onDrop();
        }
      }}
    >
      <div className="board-stars" aria-hidden="true">
        <span className="star star-one">✦</span>
        <span className="star star-two">·</span>
        <span className="star star-three">✦</span>
      </div>

      {stack.map((block) => (
        <div
          className="block placed-block"
          key={block.id}
          style={{
            width: `${block.width}%`,
            left: `${block.left}%`,
            bottom: `${block.bottom}px`,
            background: block.color,
          }}
        />
      ))}

      {activeBlock && (
        <div
          className="block active-block"
          style={{
            width: `${activeBlock.width}%`,
            left: `${activeBlock.left}%`,
            bottom: `${activeBlock.bottom}px`,
            background: activeBlock.color,
          }}
        />
      )}

      <div className="board-floor" aria-hidden="true" />
      <span className="board-hint">clique para soltar</span>
    </div>
  );
}
