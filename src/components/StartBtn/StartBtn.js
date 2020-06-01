import React from 'react';
import './StartBtn.css';

function StartBtn(props) {
  const { btnText, onClick } = props;

  return (
    <div className="startbtn">
      <button onClick={onClick}>
        {btnText || 'Start'}
      </button>
    </div>
  )
}

export default StartBtn;