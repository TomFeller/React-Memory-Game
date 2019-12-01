import React, {useState} from 'react';
import {ChooseLevel} from "./choose-level";
import {ChooseTheme} from "./choose-theme";

const StarterForm = (props) => {
    const levels = [
        {name: `easy (2*2)`, color: '#ffe6b8', squares: 4, squareSize: 50},
        {name: 'medium (4*4)', color: '#bdbdf9', squares: 16, squareSize: 25},
        {name: 'hard (6*6)', color: '#ffc3ff', squares: 36, squareSize: 16.6667},
        {name: 'very hard (8*8)', color: '#a7ffa7', squares: 64, squareSize: 12.5},
        {name: 'extreme (10*10)', color: '#ff2f2f', squares: 100, squareSize: 10}];

    const themes = ['colors', 'animals', 'flags'];

    const [level, setLevel] = useState();
    const {startGame} = props;

    const [theme, setTheme] = useState();

    return (
        <div className={'welcome'}>
            <ChooseLevel levels={levels}
                         activeLevel={level}
                         onClick={(index) => setLevel(levels[index])}/>

            {level &&
            <ChooseTheme themes={themes}
                         activeTheme={theme}
                         onClick={(t) => setTheme(t)}/>}

            <button disabled={!level || !theme}
                    onClick={() => startGame(level, theme)}>
                Start game
            </button>
        </div>
    )
};

export {StarterForm};

