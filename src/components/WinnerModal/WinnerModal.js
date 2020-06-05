import React from 'react';
import './WinnerModal.css';

const WinnerModal = ({ winner, onClick }) => (
  <div className="winner-modal" onClick={onClick}>
    <div className="winner-modal__box">
      {winner ? `Player ${winner} wins`: "It's a draw!"}
    </div>
  </div>
)

export default WinnerModal;