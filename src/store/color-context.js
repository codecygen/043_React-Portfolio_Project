import React, { useState } from 'react';

const DarkModeContext = React.createContext({
    darkModeHandler: () => {},
    isDarkMode: true
});

export const DarkModeContextProvider = props => {

    const isFalse = localStorage.getItem('isFalse') ? false : true;

    const [isDarkMode, setIsDarkMode] = useState(isFalse);

    const colorChangeHandler = () => {
        setIsDarkMode(prevValue => {
            if (prevValue) {
                localStorage.setItem('isFalse', false);
                return false;
            } else {
                localStorage.removeItem('isFalse');
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