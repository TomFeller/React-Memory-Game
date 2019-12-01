import React, {useState} from 'react';
import {SquareStyle} from './square-style';
import {MdCheck, MdClose} from 'react-icons/md';

const Square = (props) => {
    const {size, content, index, onClick, theme, type} = props;
    const {wrong, success} = props;
    const borderColor = success ? 'green' : wrong ? 'red' : '#000';

    const Icon = success ? MdCheck : wrong ? MdClose : null;
    return (
        <SquareStyle className={'square'}
                     borderColor={borderColor}
                     width={size}
                     height={size}
                     theme={theme}
                     background={type === 'image' ? `url(${content})` : content}
                     onClick={onClick}>

            {Icon && <div className={'mark'}><Icon size={23}/></div>}

            {index + 1}
        </SquareStyle>
    )
};

export {Square};