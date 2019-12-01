import React from'react';
import {MenuWrapper, MenuItem} from './form-style';

const ChooseLevel = (props) => {
    const {onClick, levels, activeLevel} = props;


    return (
        <div>
            <h3>Choose level</h3>
            <MenuWrapper>
            {levels.map((level, i) => {
                const isActive = activeLevel && activeLevel.name === level.name;
                return <MenuItem key={i}
                                 active={isActive}
                                 backgroundColor={level.color}
                            onClick={() => onClick(i)}>
                    {level.name}
                </MenuItem>
            })}
            </MenuWrapper>
        </div>
    )
};


export {ChooseLevel};