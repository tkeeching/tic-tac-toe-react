import React from 'react';
import './GameBoard.css';
import Tile from '../Tile/Tile'; 

class GameBoard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tiles: Array(9).fill(''),
      currentPlayer: 'X',
    }
  }

  togglePlayer = () => {
    this.setState({
      currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X'
    })
  }

  handleClick = index => {
    if (this.state.tiles[index]) return
    
    const newTiles = [...this.state.tiles];
    newTiles[index] = this.state.currentPlayer;
    
    this.setState({
      tiles: newTiles
    })

    this.togglePlayer();
  }

  render () {
    const { tiles } = this.state;

    return (
      <div className="gameboard">
        {tiles.map((tile, index) => (
          <Tile 
            key={index}
            onClick={() => this.handleClick(index)} 
            symbol={tile} 
          />
        ))}
      </div>
    )
  }
}

export default GameBoard;