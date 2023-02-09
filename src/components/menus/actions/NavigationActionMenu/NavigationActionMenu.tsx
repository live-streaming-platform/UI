import React, {useRef, useState} from 'react';
import './styles.css'
import {NotificationMarker} from "../../../common";
import {ReactComponent as MessageIcon} from "../../../../assets/icons/MessageIcon.svg";
import {ReactComponent as LoginIcon} from "../../../../assets/icons/SignInIcon.svg";
import {ReactComponent as LogOutIcon} from "../../../../assets/icons/SignOutIcon.svg";
import useOutsideAlerter from "../../../../hooks/useClickOutsideCallback";
import ActionMenuButton from "../../../buttons/ActionMenuButton/ActionMenuButton";
import {useDispatch, useSelector} from "react-redux";
import {userSelectors} from "../../../../redux/user/selectors";
import {userActions} from "../../../../redux/user/actions";

type NavigationActionMenuPropsType = {
    type: "notifications" | "userdata"
    children?: any
    authAction?: Function
}

const NavigationActionMenu = ({type, authAction = () => {}, children}: NavigationActionMenuPropsType) => {
    const itemWrapperRef = useRef(null);
    const [itemActive, setItemActive] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector(userSelectors.currentUser)

    useOutsideAlerter(() => setItemActive(false), itemWrapperRef);

    const handleItemClick = () => {
        if (userData) {
            setItemActive(!itemActive)
        } else {
            authAction()
        }
    }

    return userData ? (
        <div ref={itemWrapperRef} className={`action-item-wrapper  ${itemActive ? `active` : ""} ${type}`}>
            <div className={'action-item'} onClick={handleItemClick}>
                {type === 'notifications' ?
                    <>
                        <MessageIcon/>
                        <div className={'action-item__notifications-marker'}>
                            <NotificationMarker/>
                        </div>
                    </>
                    : userData.username.charAt(0).toUpperCase()
                }
            </div>
            <div className={`action-item__content ${itemActive ? "active" : ""}`}>
                {type === 'notifications' ?
                    <>
                        {/*notifications*/}
                    </>
                    :
                    <ActionMenuButton onClick={() => dispatch(userActions.logOut())}>
                        <LogOutIcon/>
                    </ActionMenuButton>}
            </div>
        </div>
    ) : type === "userdata" ? (
        <div ref={itemWrapperRef}
             className={`action-item-wrapper  ${itemActive ? `active` : ""} ${type}`}>
            <div className={'action-item'} onClick={handleItemClick}>
                <LoginIcon/>
            </div>
        </div>
    ) : null;
};

export default NavigationActionMenu;