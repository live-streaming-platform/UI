import React from 'react';
import './style.css'
import {useNavigate} from "react-router";

type LogoPropsType = {
    text: string
}

const Logo = ({text}: LogoPropsType) => {
    const navigate = useNavigate();

    return (
        <p onClick={() => navigate('/')} className={'logo'}>
            {text}
        </p>
    );
};

export default Logo;