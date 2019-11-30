import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {StarterForm} from "./components/form/starter-form";
import {GameBoard} from "./components/board/game-board";

function App() {
  const [gameLevel, setGameLevel] = useState(false);
  const boardSize = 1000;
  return (
    <div className="app">
        {!gameLevel ?
            <StarterForm startGame={(level) => setGameLevel(level)}/> :
            <GameBoard numOfSquares={gameLevel.squares} boardSize={boardSize}/>
        }
    </div>
  );
}

export default App;
