import React, {ChangeEvent, useState} from 'react';
import './style.css';

type InputPropsType = {
    type: "text" | "email" | "password" | "checkbox"
    placeholder?: string
    handleChange?: Function
    initialState?: string
    errorStatus?: boolean
}


const Input = ({type, placeholder, errorStatus, handleChange, initialState = ""}: InputPropsType) => {
    const [text, setText] = useState(initialState);
    const [error, setError] = useState(errorStatus);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (error) {
            setError(false);
        }
        setText(event.target.value);
        if (handleChange) {
            handleChange(event.target.value)
        }
    }


    return (
        <input
            className={`app-input ${error ? 'error' : ""}`}
            onChange={handleInputChange}
            placeholder={placeholder}
            type={type}
            value={text}
        />
    );
};

export default Input;