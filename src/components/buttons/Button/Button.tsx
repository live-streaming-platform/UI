import React from 'react';
import './style.css'

type ButtonPropsType = {
    onClick?: any,
    text: string,
    type?: string
}

const Button = ({onClick, text, type}: ButtonPropsType) => {
    return (
        <button className={'app-button'} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;