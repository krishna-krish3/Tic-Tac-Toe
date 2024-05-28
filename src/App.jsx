import Square from "./Square";
import { useState } from "react";
import calculateWinner from "./CalculateWinner";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquaresValue] = useState(Array(9).fill(null));

  function handleUserClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquaresValue(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? "winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div className="board-container">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleUserClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleUserClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleUserClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleUserClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleUserClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleUserClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleUserClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleUserClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleUserClick(8)} />
      </div>
    </div>
  );
}
