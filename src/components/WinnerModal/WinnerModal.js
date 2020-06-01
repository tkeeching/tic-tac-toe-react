import React from 'react';
import './WinnerModal.css';

const WinnerModal = ({ winner }) => (
  <div className="winner-modal">
    <div className="winner-modal__box">
      Winner winner chicken dinner
      <br />
      {winner ? `Winner is ${winner}`: "It's a draw!"}
    </div>
  </div>
)

export default WinnerModal;