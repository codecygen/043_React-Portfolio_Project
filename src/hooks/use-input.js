import { useState } from 'react';
import classes from '../components/sections/Contact.module.css';

const useInput = inputType => {
    const [enteredValue, setEnteredValue] = useState('');

    const [isTouched, setIsTouched] = useState(false);

    const isValueValid = enteredValue.trim() !== '';

    const hasError = !isValueValid && isTouched;

    const inputClasses = hasError ? classes['input-error'] : classes.input;

    const errorMessage = hasError ? <p className={classes['error-text']}>{inputType} must not be empty!</p> : <p></p>;

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
