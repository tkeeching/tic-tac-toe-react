import React from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import StartBtn from './components/StartBtn/StartBtn';

function App() {
  return (
    <div className="App">
      <GameBoard />
      <StartBtn />
    </div>
  );
}

export default App;
