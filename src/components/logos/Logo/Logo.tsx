import React from 'react';
import './style.css'

type LogoPropsType = {
    text: string
}

const Logo = ({text}: LogoPropsType) => {
    return (
        <p className={'logo'}>
            {text}
        </p>
    );
};

export default Logo;