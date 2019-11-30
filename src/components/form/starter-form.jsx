import React, {useState} from 'react';

const StarterForm = (props) => {
    const levels = [{name: 'easy', squares: 4}, {name: 'medium', squares: 16}, {
        name: 'hard',
        squares: 25
    }, {name: 'very hard', squares: 64}];

    const [activeLevel, setActiveLevel] = useState(levels[0]);
    const {startGame} = props;

    return (
        <div className={'field'}>
            <h3>Choose level</h3>

            {levels.map((level, i) => {
                const isActive = activeLevel.name === level.name;

                return <div key={i}
                            style={{...levelStyle, ...isActive && levelStyleActive}}
                            onClick={() => setActiveLevel(level)}>
                    {level.name}
                </div>
            })}


            <button onClick={() => startGame(activeLevel)}>Start game</button>
        </div>
    )
};

export {StarterForm};

const levelStyle = {};
const levelStyleActive = {fontWeight: 'bold'}