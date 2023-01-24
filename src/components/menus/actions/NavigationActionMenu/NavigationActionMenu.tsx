import React, {useRef, useState} from 'react';
import './styles.css'
import {NotificationMarker} from "../../../common";
import {ReactComponent as MessageIcon} from "../../../../assets/icons/MessageIcon.svg";
import useOutsideAlerter from "../../../../hooks/useClickOutsideCallback";

type NavigationActionMenuPropsType = {
    type: "notifications" | "userdata"
}

const NavigationActionMenu = ({type}: NavigationActionMenuPropsType) => {
    const itemWrapperRef = useRef(null);
    const [userData, setUserData] = useState({username: "username", authorised: false})
    const [itemActive, setItemActive] = useState(false);

    useOutsideAlerter(() => setItemActive(false), itemWrapperRef);

    const handleItemClick = () => {
        setItemActive(!itemActive);
    }

    return (
        <div ref={itemWrapperRef} className={`action-item-wrapper ${itemActive ? "active" : null}`}>
            <div className={'action-item'} onClick={handleItemClick}>
                {type === 'notifications' ?
                    <>
                        <MessageIcon/>
                        <div className={'action-item__notifications-marker'}>
                            <NotificationMarker/>
                        </div>
                    </>
                    : userData.authorised ? userData.username.charAt(0).toUpperCase() : 'U'
                }
            </div>
            <div className={'action-item__content'}>
                <div className="test">
                    Cringe
                </div>
            </div>
        </div>
    );
};

export default NavigationActionMenu;