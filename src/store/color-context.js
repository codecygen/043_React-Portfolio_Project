import React, { useState } from 'react';

const DarkModeContext = React.createContext({
    darkModeHandler: () => {},
    isDarkMode: true
});

export const DarkModeContextProvider = props => {

    const isSet = localStorage.getItem('isSet');

    const [isDarkMode, setIsDarkMode] = useState(isSet);

    const colorChangeHandler = () => {
        setIsDarkMode(prevValue => {
            if (prevValue) {
                localStorage.setItem('isSet', false);
                return false;
            } else {
                localStorage.removeItem('isSet');
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