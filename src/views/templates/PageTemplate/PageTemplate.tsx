import React, {useEffect, useState} from 'react';
import './style.css'
import {Logo} from "../../../components/logos";
import {MenuChannelList, NavigationActionMenu} from "../../../components/menus";
import {NavigationSearch} from "../../../components/inputs";
import PopUp from "../../../components/popups/PopUp/PopUp";
import {useDispatch, useSelector} from "react-redux";
import AuthForm from "../../../components/forms/AuthForm/AuthForm";
import {userSelectors} from "../../../redux/user/selectors";
import {userActions} from "../../../redux/user/actions";

type PageTemplatePropsType = {
    children?: any;
}


const PageTemplate = ({children = []}: PageTemplatePropsType) => {
    const userData = useSelector(userSelectors.currentUser);

    const channelList = [
        {
            name: 'name1',
            category: 'category',
            image: '',
            viewers: 255
        },
        {
            name: 'name2',
            category: 'category',
            image: '',
            viewers: 255
        },
        {
            name: 'name3',
            category: 'category',
            image: '',
            viewers: 255
        },
    ]

    const dispatch = useDispatch();

    const signInTransaction = useSelector(userSelectors.signInTransaction);
    const signInError = signInTransaction.error;

    useEffect(() => {
        if (signInTransaction.ok) {
            handlePopUpVisibility();
            dispatch(userActions.resetTransactions());
        } else{
            console.log(signInError)
        }
    }, [signInTransaction])

    const [isPopUpVisible, togglePopUp] = useState(false);

    const handlePopUpVisibility = () => {
        if(signInError){
            dispatch(userActions.resetTransactions());
        }
        togglePopUp(!isPopUpVisible);
    }

    return (
        <div className={'page-container'}>
            <PopUp isVisible={isPopUpVisible} closeOnClickOutside={false} handleClose={handlePopUpVisibility}>
                <AuthForm/>
            </PopUp>
            <div className={'left-menu'}>
                <div className={'menu-logo-wrapper'}>
                    <Logo text={"arcade"}/>
                </div>
                {userData ?
                    <MenuChannelList title={'Followed'} channelList={userData.followedChannels}/> : null}
                <MenuChannelList title={'TOP'} channelList={channelList}/>
            </div>
            <div className={'page-content'}>
                <div className={'page-content__navigation'}>
                    <NavigationSearch/>
                    <div className={'navigation__user-actions'}>
                        <NavigationActionMenu type={"notifications"}/>
                        <NavigationActionMenu type={"userdata"} authAction={() => handlePopUpVisibility()}/>
                    </div>
                </div>
                <div className={'page-content__main'}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PageTemplate;