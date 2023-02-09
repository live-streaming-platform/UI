import React, {useRef} from 'react';
import {ReactComponent as CloseIcon} from "../../../assets/icons/CloseIcon.svg";
import './style.css'
import useOutsideAlerter from "../../../hooks/useClickOutsideCallback";

type PopUpProps = {
    children?: any,
    isVisible: boolean,
    handleClose: Function,
    closeOnClickOutside?: boolean
}

const PopUp = ({children = [], isVisible, handleClose, closeOnClickOutside = true}: PopUpProps) => {
    const popUpRef = useRef(null);

    useOutsideAlerter(() => closeOnClickOutside ? handleClose() : {}, popUpRef);

    return (
        <div className={`pop-up-wrapper ${isVisible ? 'visible' : ''}`}>
            <div ref={popUpRef} className={'pop-up'}>
                <CloseIcon onClick={() => handleClose()} className={'pop-up__close'}/>
                {children}
            </div>
        </div>
    )
};

export default PopUp;