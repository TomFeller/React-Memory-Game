import React, {useState} from 'react';
import {SquareStyle} from './square-style';

const Square = (props) => {
    const {size, color, index, onClick} = props;
    const {wrong, success} = props;

    const borderColor = success ? 'green' : wrong ? 'red' : '#000';
    return (
        <SquareStyle className={'square'}
                     borderColor={borderColor}
                     width={size}
                     background={color}
                     onClick={onClick}>
            {index}
        </SquareStyle>
    )
};

export {Square};