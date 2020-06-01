import React from 'react';
import './GameBoard.css';
import Tile from '../Tile/Tile'; 
import StartBtn from '../StartBtn/StartBtn';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

class GameBoard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tiles: Array(9).fill(''),
      currentPlayer: 'X',
      started: false,
      paused: false,
      winner: '',
      xScore: 0,
      oScore: 0
    }
  }

  checkWinner = (currentTiles) => {
    const winningMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    winningMoves.forEach(move => {
      if (move.every(index => currentTiles[index].includes('X'))) {
        this.setState({
          winner: 'X',
          paused: true,
          xScore: this.state.xScore + 1
        })
      const winner = 'X';
      console.log('game paused');
      console.log(winner + ' wins');
      }

      if (move.every(index => currentTiles[index].includes('O'))) {
        this.setState({
          winner: 'O',
          paused: true,
          oScore: this.state.oScore + 1
        })
      const winner = 'O';
      console.log('game paused');
      console.log(winner + ' wins');
      }
    })
  }

  togglePlayer = () => {
    this.setState({
      currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X'
    })
  }

  handleClick = index => {
    if (this.state.tiles[index] || !this.state.started || this.state.paused) return
    
    const currentTiles = [...this.state.tiles];
    currentTiles[index] = this.state.currentPlayer;
    
    this.setState({
      tiles: currentTiles
    })
    
    this.togglePlayer();
    this.checkWinner(currentTiles);
  }

  handleRestart = () => {
    this.setState({
      started: false,
      paused: true,
      tiles: Array(9).fill('')
    });
  }

  handleStart = () => {
    this.setState({
      started: true,
      paused: false
    });
  }

  render () {
    const { tiles, xScore, oScore, started } = this.state;

    return (
      <div className="gameboard">
        <h1>Tic</h1>
        <h1>Tac</h1>
        <h1>Toe</h1>
        {tiles.map((tile, index) => (
          <Tile 
            key={index}
            onClick={() => this.handleClick(index)}
            symbol={tile} 
          />
        ))}
        {started && 
          <StartBtn 
            onClick={() => this.handleRestart()}
            btnText="Restart"
          />
        }
        {!started &&
          <StartBtn onClick={() => this.handleStart()} />
        }
        <ScoreBoard 
          symbol="X"
          score={xScore}
        />
        <ScoreBoard 
          symbol="O"
          score={oScore}
        />
      </div>
    )
  }
}

export default GameBoard;