import React from 'react';
import './style.css'

type ActionMenuButtonType = {
    type?: "sm" | "lg",
    icon?: any,
    text?: string,
    children?: any,
    onClick?: Function
}

const ActionMenuButton = ({type = "sm", icon, text, children, onClick = () => {}}: ActionMenuButtonType) => {
    return (
        <div className={'action-menu__item'} onClick={() => onClick() }>
            {children}
        </div>
    );
};

export default ActionMenuButton;