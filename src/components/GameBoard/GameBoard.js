import React from 'react';
import './GameBoard.css';
import Tile from '../Tile/Tile'; 
import StartBtn from '../StartBtn/StartBtn';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import WinnerModal from '../WinnerModal/WinnerModal';

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

    const xWins = winningMoves.some(move => 
      move.every(index => currentTiles[index].includes('X')))

    const oWins = winningMoves.some(move => 
      move.every(index => currentTiles[index].includes('O')))

    this.setState({
      winner: xWins ? "X" : oWins ? "O" : undefined,
      paused: xWins || oWins,
      xScore: this.state.xScore + (xWins ? 1 : 0),
      oScore: this.state.oScore + (oWins ? 1 : 0)
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
      tiles: Array(9).fill(''),
      winner: ''
    });
  }

  handleStart = () => {
    this.setState({
      started: true,
      paused: false
    });
  }

  render () {
    const { tiles, xScore, oScore, started, winner } = this.state;
    const finished = tiles.every(tile => tile)

    return (
      <div className="gameboard">
        <h1>Tic Tac Toe</h1>
        <div className="gameboard__tiles-section">
          <div className="gameboard__tiles-container">
            <div className="gameboard__tiles">
              {tiles.map((tile, index) => (
                <Tile 
                  key={index}
                  onClick={() => this.handleClick(index)}
                  symbol={tile} 
                />
              ))}
            </div>
          </div>
        </div>
        {started && 
          <StartBtn 
            onClick={() => this.handleRestart()}
            btnText="Restart"
          />
        }
        {!started &&
          <StartBtn onClick={() => this.handleStart()} />
        }
        <div className="gameboard__scoreboard-container">
          <ScoreBoard 
            symbol="X"
            score={xScore}
          />
          <ScoreBoard 
            symbol="O"
            score={oScore}
          />
        </div>
        {(finished || winner) && <WinnerModal winner={winner} onClick={this.handleRestart} />}
      </div>
    )
  }
}

export default GameBoard;