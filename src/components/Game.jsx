import React, { useCallback, useEffect, useRef, useState } from 'react';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';

const COLORS = ['#ff6b57', '#c5f04a', '#9d8cff', '#51d6c7', '#ffc857'];
const BOARD_BLOCK_HEIGHT = 34;
const BASE_BLOCK = {
  id: 'base',
  width: 74,
  left: 13,
  bottom: 0,
  color: '#f4f2e9',
};

function createActiveBlock(width, index) {
  return {
    id: `active-${index}`,
    width,
    left: 0,
    bottom: BOARD_BLOCK_HEIGHT,
    direction: 1,
    color: COLORS[index % COLORS.length],
  };
}

export default function Game() {
  const [stack, setStack] = useState([BASE_BLOCK]);
  const [activeBlock, setActiveBlock] = useState(createActiveBlock(74, 0));
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    if (typeof window === 'undefined') return 0;
    return Number(window.localStorage.getItem('empilha-recorde')) || 0;
  });
  const [status, setStatus] = useState('playing');
  const [round, setRound] = useState(0);
  const activeRef = useRef(activeBlock);
  const stackRef = useRef(stack);

  const level = Math.floor(score / 50) + 1;
  const speed = 0.13 + level * 0.025;

  useEffect(() => {
    activeRef.current = activeBlock;
  }, [activeBlock]);

  useEffect(() => {
    stackRef.current = stack;
  }, [stack]);

  useEffect(() => {
    if (status !== 'playing') return undefined;

    const timer = window.setInterval(() => {
      setActiveBlock((current) => {
        let nextLeft = current.left + current.direction * speed;
        let nextDirection = current.direction;

        if (nextLeft + current.width >= 100) {
          nextLeft = 100 - current.width;
          nextDirection = -1;
        }

        if (nextLeft <= 0) {
          nextLeft = 0;
          nextDirection = 1;
        }

        return { ...current, left: nextLeft, direction: nextDirection };
      });
    }, 16);

    return () => window.clearInterval(timer);
  }, [speed, status]);

  const dropBlock = useCallback(() => {
    if (status !== 'playing') return;

    const current = activeRef.current;
    const previous = stackRef.current[stackRef.current.length - 1];
    const overlapLeft = Math.max(current.left, previous.left);
    const overlapRight = Math.min(current.left + current.width, previous.left + previous.width);
    const overlapWidth = overlapRight - overlapLeft;

    if (overlapWidth <= 1) {
      setStatus('lost');
      return;
    }

    const nextScore = score + 10;
    const nextBlock = {
      id: `placed-${round}`,
      width: overlapWidth,
      left: overlapLeft,
      bottom: stackRef.current.length * BOARD_BLOCK_HEIGHT,
      color: current.color,
    };
    const nextStack = [...stackRef.current, nextBlock];

    setStack(nextStack);
    setScore(nextScore);
    setRound((currentRound) => currentRound + 1);

    if (nextScore > bestScore) {
      setBestScore(nextScore);
      window.localStorage.setItem('empilha-recorde', String(nextScore));
    }

    if (nextStack.length >= 11) {
      setStatus('won');
      return;
    }

    const nextActive = createActiveBlock(overlapWidth, round + 1);
    nextActive.left = round % 2 === 0 ? 0 : 100 - overlapWidth;
    nextActive.direction = round % 2 === 0 ? 1 : -1;
    setActiveBlock(nextActive);
    activeRef.current = nextActive;
    stackRef.current = nextStack;
  }, [bestScore, round, score, status]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Space' || event.code === 'ArrowDown') {
        event.preventDefault();
        dropBlock();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dropBlock]);

  function restartGame() {
    const nextActive = createActiveBlock(74, 0);
    setStack([BASE_BLOCK]);
    setActiveBlock(nextActive);
    setScore(0);
    setRound(0);
    setStatus('playing');
    activeRef.current = nextActive;
    stackRef.current = [BASE_BLOCK];
  }

  return (
    <section className="game-section" id="inicio">
      <div className="game-intro">
        <p className="eyebrow"><span /> Jogo de habilidade · React</p>
        <h1>Empilhe.<br /><em>Não deixe cair.</em></h1>
        <p className="game-description">
          Encaixe um bloco sobre o outro e construa a torre mais alta que conseguir.
        </p>
        <div className="game-tip"><span>ESPAÇO</span> ou <span>CLIQUE</span> para soltar</div>
      </div>

      <div className="game-panel">
        <ScoreBoard score={score} bestScore={bestScore} level={level} />
        <GameBoard stack={stack} activeBlock={activeBlock} />

        <div className="game-controls">
          {status === 'playing' ? (
            <button className="drop-button" type="button" onClick={dropBlock}>
              Soltar bloco <span>↓</span>
            </button>
          ) : (
            <div className="result-message" role="status">
              <strong>{status === 'won' ? 'Torre perfeita!' : 'Ops, saiu do eixo.'}</strong>
              <span>{status === 'won' ? 'Você completou o desafio.' : 'Tente mais uma vez.'}</span>
            </div>
          )}
          <button className="restart-button" type="button" onClick={restartGame}>
            {status === 'playing' ? 'Recomeçar' : 'Jogar novamente'}
          </button>
        </div>
      </div>
    </section>
  );
}
