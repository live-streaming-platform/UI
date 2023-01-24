import React from 'react';
import './style.css'
import {Logo} from "../../../components/logos";
import {MenuChannelList, NavigationActionMenu} from "../../../components/menus";
import {NavigationSearch} from "../../../components/inputs";

type PageTemplatePropsType = {
    children?: any;
}


const PageTemplate = ({children = []}: PageTemplatePropsType) => {
    const isAuthorized = false;

    const channelList = [
        {
            name: 'name',
            category: 'category',
            image: '',
            viewers: 255
        },
        {
            name: 'name',
            category: 'category',
            image: '',
            viewers: 255
        },
        {
            name: 'name',
            category: 'category',
            image: '',
            viewers: 255
        },
    ]


    return (
        <div className={'page-container'}>
            <div className={'left-menu'}>
                <div className={'menu-logo-wrapper'}>
                    <Logo text={"arcade"}/>
                </div>
                {isAuthorized ?
                    <div className="channel-list">
                        <p className={'channel-list__title'}>Followed</p>
                    </div> : null}
                <MenuChannelList title={'TOP'} channelList={channelList}/>
            </div>
            <div className={'page-content'}>
                <div className={'page-content__navigation'}>
                    <NavigationSearch/>
                    <div className={'navigation__user-actions'}>
                        <NavigationActionMenu type={"notifications"}/>
                        <NavigationActionMenu type={"userdata"}/>
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