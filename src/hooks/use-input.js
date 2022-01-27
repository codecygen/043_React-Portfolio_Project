import { useState } from 'react';

const useInput = () => {
    const [enteredValue, setEnteredValue] = useState('');

    const [isTouched, setIsTouched] = useState(false);

    const hasError = isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        console.log('Form submitted!');
        event.preventDefault();
    };

    const onBlurHandler = event => {
        console.log('Not focused anymore!');
        setIsTouched(true);
    };

    return {
        value: enteredValue,
        valueChangeHandler,
        formSubmitHandler,
        onBlurHandler,
        hasError,
    };
};

export default useInput;
