'use client';
import React, { useState, useEffect } from 'react';
import { FormButton } from '../../components/ui/form'; // Import the FormButton component
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
      <button
        className={`square w-20 h-20 border border-gray-700 flex items-center justify-center text-2xl font-bold focus:outline-none transition-colors
          ${board[index] === 'X' ? 'bg-orange-500 text-white' : 
            board[index] === 'O' ? 'bg-blue-500 text-white' : 
            'bg-gray-700 hover:bg-gray-600'}`}
        onClick={() => handleClick(index)}
        disabled={!!winner || !!board[index]}
        aria-label={`Square ${index + 1}`}
      >
        {board[index]}
      </button>
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
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <Head>
        <title>TicTacToe | Keith Jasper</title>
      </Head>
      
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Tic Tac Toe</h1>
        
        <div className="status mb-6 text-center text-xl font-medium text-white">
          {status}
        </div>
        
        <div className="board mb-8 max-w-xs mx-auto">
          {Array(3)
            .fill(null)
            .map((_, rowIndex) => (
              <div key={rowIndex} className="board-row flex">
                {Array(3)
                  .fill(null)
                  .map((_, colIndex) => (
                    <div key={rowIndex * 3 + colIndex} className="m-1">
                      {renderSquare(rowIndex * 3 + colIndex)}
                    </div>
                  ))}
              </div>
            ))}
        </div>
        
        <div className="flex justify-center">
          <FormButton
            type="button"
            onClick={resetGame}
          >
            Reset Game
          </FormButton>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
