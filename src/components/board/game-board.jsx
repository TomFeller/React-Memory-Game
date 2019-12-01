import React, {useState, useEffect} from 'react';
import {Square} from "../square/square";
import {GameBoardStyle} from './game-board-style';
import {COLORS} from '../colors';


const GameBoard = (props) => {
    const {numOfSquares, boardSize} = props;
    const [tempIndex, setTempIndex] = useState();
    const [successIndexes, setSuccessIndexes] = useState([]);
    const [wrongIndexes, setWrongIndexes] = useState([]);
    const [squares, setSquares] = useState([]);

    useEffect(() => {
        const colors = shuffle(COLORS.slice(0, numOfSquares / 2));
        let arr = [];
        for (let i = 0; i < colors.length; i++) {
            arr.push({index: i, color: colors[i], status: 0})
        }
        setSquares(arr);
    }, []);

    const handleSquareClick = (index) => {
        if (!tempIndex && tempIndex !== 0) {
            setTempIndex(index);
        } else {
            if (isMatch(tempIndex, index)) {
                setSuccessIndexes([...successIndexes, tempIndex, index]);
                setTempIndex();
            } else {
                setWrongIndexes([tempIndex, index]);
                setTimeout(() => {
                    setWrongIndexes([]);
                    setTempIndex();
                }, 1000);
            }
        }
     };
    const isMatch = (temp, current) => {
        return squares[temp].color === squares[current].color
    };
    const shuffle = (arr) => {
        const double = arr.concat(arr);
        for (let i = double.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [double[i], double[j]] = [double[j], double[i]];
        }
        return double;
    };
    const squareSize = `${boardSize / Math.sqrt(numOfSquares)}px`;
    const buildSquares = (squares) => {
        return squares.map((square, i) => {
            const color = tempIndex === i || wrongIndexes.some(wrong => wrong === i) || successIndexes.some(success => success === i) ? square.color : '#999';
            const success = successIndexes.some(index => index === i);
            const wrong = wrongIndexes.some(index => index === i);
            const active = tempIndex === i;
            return (
                <Square key={i}
                        index={i}
                        size={squareSize}
                        onClick={() => !wrong && !success && !active && wrongIndexes.length !== 2 && handleSquareClick(i)}
                        wrong={wrong}
                        success={success}
                        color={color}/>
            )
        })
    };
    const isFinish = () => {
        if (squares.length > 0 && successIndexes.length === squares.length) {
            alert("GREAT!")
        }
    };
    isFinish();

    return (
        <GameBoardStyle boardSize={boardSize} >
            {buildSquares(squares)}
        </GameBoardStyle>
    )
};

export {GameBoard};
