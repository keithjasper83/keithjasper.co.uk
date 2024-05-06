'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const initialBoard = Array(9).fill(null);

const TicTacToe = () => {
  const [board, setBoard] = useState<string[]>(initialBoard);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    setXIsNext(true);
    setBoard(initialBoard);
    setWinner(null);
  };

  const handleClick = (index: number) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }
  };

  const renderSquare = (index: number) => {
    return (
      <div
        className="square bg-orange-400 text-xl w-20 h-20 border border-black flex items-center justify-center  text-red-950"
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </div>
    );
  };

  const calculateWinner = (board: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.every((square) => square)) {
      return 'Tie'; // All squares filled without a winner
    }

    return null;
  };

  const status = winner
    ? winner === 'Tie'
      ? "It's a Tie!"
      : `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="game  center-row flex-col mt-10">
      <Head>
        <title>TicTacToe</title>
      </Head>
      <div className="board">
        {Array(3)
          .fill(null)
          .map((_, rowIndex) => (
            <div key={rowIndex} className="board-row flex">
              {Array(3)
                .fill(null)
                .map((_, colIndex) => (
                  <div key={rowIndex * 3 + colIndex}>
                    {renderSquare(rowIndex * 3 + colIndex)}
                  </div>
                ))}
            </div>
          ))}
      </div>
      <div className="status mt-10">{status}</div>
      <div className="mt-10">
        <button
          type="reset"
          onClick={resetGame}
          className="rounded-xl p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
