import React, { useState } from 'react';

const NavContext = React.createContext({
    darkModeHandler: () => {},
    isDarkMode: true
});

export const NavContextProvider = props => {

    const [isDarkMode, setIsDarkMode] = useState(true);

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
        <NavContext.Provider 
            value={{
                darkModeHandler: colorChangeHandler, 
                isDarkMode
            }}
        >
            {props.children}
        </NavContext.Provider>
    );
};

export default NavContext;