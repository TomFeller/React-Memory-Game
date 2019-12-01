import React from 'react';
import {MenuWrapper, MenuItem} from './form-style';

const ChooseTheme = (props) => {
    const {onClick, themes, activeTheme} = props;

    return (
        <div>
            <h3>Choose Theme</h3>
            <MenuWrapper>
                {themes.map((theme, i) => {
                    const isActive = activeTheme && activeTheme === theme;
                    return <MenuItem key={i}
                                     active={isActive}
                                     onClick={() => onClick(theme)}>
                        {theme}
                    </MenuItem>
                })}
            </MenuWrapper>
        </div>
    )
};


export {ChooseTheme};