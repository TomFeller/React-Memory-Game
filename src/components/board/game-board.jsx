import React, {useState, useEffect} from 'react';
import {Square} from "../square/square";
import {GameBoardStyle} from './game-board-style';
import {COLORS} from '../colors';


const GameBoard = (props) => {
    const {numOfSquares, boardSize} = props;
    const [currentColor, setCurrentColor] = useState();
    const [colors, setColors] = useState([]);
    const handleSquareClick = (color) => {
        if (currentColor === color) {
            setCurrentColor(color);
        } else {
            setCurrentColor();
        }
    };
    const shuffle = (arr) => {
        const double = arr.concat(arr);
        for (let i = double.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [double[i], double[j]] = [double[j], double[i]];
        }
        return double;
    };

    const buildSquares = () => {
        let grid = [];
        for (let i = 0; i < numOfSquares; i++) {
            grid.push(<Square key={i}
                              index={i}
                              onSquareClick={handleSquareClick}
                              size={`${boardSize / Math.sqrt(numOfSquares)}px`}
                              color={colors[i]}/>)
        }
        return grid;
    };

    useEffect(() => {
        const colors = shuffle(COLORS.slice(0, numOfSquares / 2));
        setColors(colors);
    }, []);
    return (
        <GameBoardStyle boardSize={boardSize} >
            {buildSquares()}
        </GameBoardStyle>
    )
};

export {GameBoard};
