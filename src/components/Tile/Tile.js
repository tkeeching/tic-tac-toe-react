import React from 'react';
import './Tile.css';

class Tile extends React.Component {
  render () {
    const { symbol, onClick } = this.props;

    return (
      <div className="tile" onClick={onClick}>
        {symbol || ''}
      </div>
    )
  }
}

export default Tile;