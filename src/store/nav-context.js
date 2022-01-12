import React, { useState } from 'react';

const NavContext = React.createContext({
    darkModeHandler: () => {},
    isDarkMode: true
});

export const NavContextProvider = props => {

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
        <NavContext.Provider 
            value={{
                darkModeHandler: colorChangeHandler, 
                isDarkMode: isColorDark
            }}
        >
            {props.children}
        </NavContext.Provider>
    );
};

export default NavContext;