import React, {useState, useEffect} from 'react';
import {Square} from "../square/square";
import {GameBoardStyle, RestartButton} from './game-board-style';
import {COLORS} from '../data/colors';
import {ANIMALS} from "../data/animals";
import {MdRefresh} from 'react-icons/md';
import {FLAGS} from "../data/flags";

const GameBoard = (props) => {
    const {numOfSquares, theme, squareSize, restart} = props;
    const [tempIndex, setTempIndex] = useState();
    const [successIndexes, setSuccessIndexes] = useState([]);
    const [wrongIndexes, setWrongIndexes] = useState([]);
    const [squares, setSquares] = useState([]);

    useEffect(() => {
        const CARDS = theme === 'colors' ? COLORS : theme === 'animals' ? ANIMALS : theme === 'flags' ? FLAGS : [];
        const cards = shuffle(CARDS.slice(0, numOfSquares / 2));
        let arr = [];
        for (let i = 0; i < cards.length; i++) {
            arr.push({index: i, content: cards[i], status: 0})
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
                }, 700);
            }
        }
     };
    const isMatch = (temp, current) => {
        return squares[temp].content === squares[current].content
    };
    const shuffle = (arr) => {
        const double = arr.concat(arr);
        for (let i = double.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [double[i], double[j]] = [double[j], double[i]];
        }
        return double;
    };
    const buildSquares = (squares) => {
        return squares.map((square, i) => {
            const content = tempIndex === i || wrongIndexes.some(wrong => wrong === i) || successIndexes.some(success => success === i) ? square.content : '#999';
            const success = successIndexes.some(index => index === i);
            const wrong = wrongIndexes.some(index => index === i);
            const active = tempIndex === i;
            console.log('theme', theme)
            return (
                <Square key={i}
                        index={i}
                        size={squareSize}
                        theme={theme}
                        onClick={() => !wrong && !success && !active && wrongIndexes.length !== 2 && handleSquareClick(i)}
                        wrong={wrong}
                        success={success}
                        type={theme === 'colors' ? 'color' : 'image'}
                        content={content}/>
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
        <GameBoardStyle>
            <RestartButton onClick={restart}>
                <MdRefresh size={25}/>
            </RestartButton>
            {buildSquares(squares)}
        </GameBoardStyle>
    )
};

export {GameBoard};
