import React, { useState } from 'react';

const ColorContext = React.createContext({
    isClicked: false,
});

export const ColorContextProvider = props => {
    const [isColorChangeClicked, setIsColorChangeClicked] = useState(false);

    const colorChangeHandler = () => {
        setIsColorChangeClicked(prevValue => {
            if (prevValue) {
                return false;
            } else {
                return true;
            }
        });
    };

    return (
        <ColorContext.Provider 
            value={{
                clickHandler: colorChangeHandler, 
                isColorChanged: isColorChangeClicked
            }}
        >
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorContext;