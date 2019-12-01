import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {StarterForm} from "./components/form/starter-form";
import {GameBoard} from "./components/board/game-board";
import {COLORS} from "./components/data/colors";
import {ANIMALS} from "./components/data/animals";
import {FLAGS} from "./components/data/flags";

function App() {
    const [gameInfo, setGameInfo] = useState(false);
    const squareSize = gameInfo.level ? gameInfo.level.squareSize : '';

    const restart = () => {

            setGameInfo(false);

    };
    return (
        <div className="app">
            {!gameInfo.level ?
                <StarterForm startGame={(level, theme) => setGameInfo({level: level, theme: theme})}/> :
                <GameBoard numOfSquares={gameInfo.level.squares}
                           restart={restart}
                           squareSize={squareSize}
                           theme={gameInfo.theme}
                           cards={gameInfo.theme === 'colors' ? COLORS :
                               gameInfo.theme === 'animals' ? ANIMALS :
                                   gameInfo.theme === 'flags' ? FLAGS : []}/>
            }
        </div>
    );
}

export default App;
