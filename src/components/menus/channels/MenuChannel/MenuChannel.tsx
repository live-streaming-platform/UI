import React from 'react';
import {Avatar} from "../../../images";
import {NotificationMarker} from "../../../common";
import './style.css'

type MenuChannelPropsType = {
    name: string,
    category: string,
    viewers: number,
    image?: any
}


const MenuChannel = ({name, category, image, viewers}: MenuChannelPropsType) => {
    return (
        <div className="channel-info">
            <div className="channel-info__data">
                <Avatar image={image}/>
                <div className="channel-info__description">
                    <p>{name}</p>
                    <p>{category}</p>
                </div>
            </div>
            <div className="channel-info__viewers">
                <NotificationMarker/>
                {viewers}
            </div>
        </div>
    );
};

export default MenuChannel;