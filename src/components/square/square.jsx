import React, {useState} from 'react';
import {SquareStyle } from './square-style';

const Square = (props) => {
    const [active, setActive] = useState(props.isActive);
    return (
        <SquareStyle className={'square'}
                     width={props.size}
                     background={active ? props.color : "#999"}
                     onClick={(e) => setActive(true, props.onSquareClick(props.color))}>
            {props.index}
        </SquareStyle>
    )
};

export {Square};