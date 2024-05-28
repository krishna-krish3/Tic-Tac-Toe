export default function Moves({ history, onJumpClick }) {
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => onJumpClick(move)}>{description}</button>
      </li>
    );
  });
  return <ul>{moves}</ul>;
}
