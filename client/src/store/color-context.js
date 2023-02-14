import React, { useState, useEffect } from 'react';

const DarkModeContext = React.createContext({
    darkModeHandler: () => { },
    isDarkMode: true
});

export const DarkModeContextProvider = props => {

    const isBrowserDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [isDarkMode, setIsDarkMode] = useState(isBrowserDark);

    useEffect(() => {

        const isUserSelectionDark = sessionStorage.getItem('isUserSelectionDark');

        if (!isUserSelectionDark) {
            // Do nothing
        } else if (isUserSelectionDark === '0') {
            setIsDarkMode(false);
        } else if (isUserSelectionDark === '1') {
            setIsDarkMode(true);
        }
    }, []);

    const colorChangeHandler = () => {
        setIsDarkMode(prevValue => {
            if (prevValue) {
                sessionStorage.setItem('isUserSelectionDark', '0');
                return false;
            } else {
                sessionStorage.setItem('isUserSelectionDark', '1');
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