import React, { useState } from 'react';

const ColorContext = React.createContext({
    darkModeHandler: () => {},
    isDarkMode: true
});

export const ColorContextProvider = props => {
    const [isColorDark, setIsColorDark] = useState(true);

    const colorChangeHandler = () => {
        setIsColorDark(prevValue => {
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
                darkModeHandler: colorChangeHandler, 
                isDarkMode: isColorDark
            }}
        >
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorContext;