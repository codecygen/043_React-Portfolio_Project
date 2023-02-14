import { useState, useContext } from 'react';
import classes from '../components/ui/ContactCard.module.css';

import DarkModeContext from '../store/color-context';

const useInput = inputType => {
    const darkCtx = useContext(DarkModeContext);
    const errorTextColor = darkCtx.isDarkMode ? `${classes['error-text-dark']}` : `${classes['error-text-light']}`;

    const [enteredValue, setEnteredValue] = useState('');

    const [isTouched, setIsTouched] = useState(false);

    const isValueValid = enteredValue.trim() !== '';

    const hasError = !isValueValid && isTouched;

    const inputClasses = hasError ? classes['input-error'] : classes.input;

    const errorMessage = hasError ? <p className={errorTextColor}>{inputType} must not be empty!</p> : <p></p>;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    const onBlurHandler = event => {
        setIsTouched(true);
    };

    return {
        value: enteredValue,
        valueChangeHandler,
        onBlurHandler,
        isValueValid,
        inputClasses,
        errorMessage,
    };
};

export default useInput;
