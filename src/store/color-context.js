import React, { useState } from 'react';

const DarkModeContext = React.createContext({
    darkModeHandler: () => {},
    isDarkMode: true
});

export const DarkModeContextProvider = props => {

    const isBrowserDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [isDarkMode, setIsDarkMode] = useState(isBrowserDark);

    const colorChangeHandler = () => {
        setIsDarkMode(prevValue => {
            if (prevValue) {
                return false;
            } else {
                return true;
            }
        });
    };

    return (
        <DarkModeContext.Provider 
            value={{
                darkModeHandler: colorChangeHandler, 
                isDarkMode
            }}
        >
            {props.children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeContext;