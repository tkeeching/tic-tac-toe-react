import React from 'react';

function ScoreBoard(props) {
  const { symbol, score } = props;

  return (
    <div className="scoreboard">
      <p>Player {symbol}</p>
      <p>{score}</p>
    </div>
  )
}

export default ScoreBoard;