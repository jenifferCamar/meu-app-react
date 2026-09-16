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

function createActiveBlock(width, index, bottom) {
  return {
    id: `active-${index}`,
    width,
    left: 0,
    bottom,
    direction: 1,
    color: COLORS[index % COLORS.length],
  };
}

export default function Game() {
  const [stack, setStack] = useState([BASE_BLOCK]);
  const [activeBlock, setActiveBlock] = useState(createActiveBlock(74, 0, BOARD_BLOCK_HEIGHT));
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    if (typeof window === 'undefined') return 0;
    return Number(window.localStorage.getItem('empilha-recorde')) || 0;
  });
  const [status, setStatus] = useState('ready');
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
    if (status === 'ready') {
      setStatus('playing');
      return;
    }

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
      isLatest: true,
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

    const nextActive = createActiveBlock(
      overlapWidth,
      round + 1,
      nextStack.length * BOARD_BLOCK_HEIGHT,
    );
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
    const nextActive = createActiveBlock(74, 0, BOARD_BLOCK_HEIGHT);
    setStack([BASE_BLOCK]);
    setActiveBlock(nextActive);
    setScore(0);
    setRound(0);
    setStatus('playing');
    activeRef.current = nextActive;
    stackRef.current = [BASE_BLOCK];
  }

  function startGame() {
    setStatus('playing');
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
        <div className="panel-topline">
          <div>
            <span className="panel-label">Partida atual</span>
            <strong>Torre de blocos</strong>
          </div>
          <div className="progress-area">
            <span>{Math.min(stack.length - 1, 10)} / 10</span>
            <div className="progress-bar" aria-label={`${Math.min(stack.length - 1, 10)} de 10 blocos empilhados`}>
              <i style={{ width: `${Math.min((stack.length - 1) * 10, 100)}%` }} />
            </div>
          </div>
        </div>
        <ScoreBoard score={score} bestScore={bestScore} level={level} />
        <GameBoard stack={stack} activeBlock={activeBlock} onDrop={dropBlock} status={status} />

        <div className="game-controls">
          {status === 'ready' ? (
            <button className="drop-button" type="button" onClick={startGame}>
              Começar partida <span>→</span>
            </button>
          ) : status === 'playing' ? (
            <button className="drop-button" type="button" onClick={dropBlock}>
              Soltar bloco <span>↓</span>
            </button>
          ) : (
            <div className="result-message" role="status">
              <strong>{status === 'won' ? 'Torre perfeita!' : 'Game over'}</strong>
              <span>{status === 'won' ? 'Você completou o desafio.' : 'O bloco não encaixou.'}</span>
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
