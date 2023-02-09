import React from 'react';
import {Avatar} from "../../../images";
import {NotificationMarker} from "../../../common";
import './style.css'
import {useNavigate} from "react-router";

type MenuChannelPropsType = {
    name: string,
    category: string,
    viewers: number,
    image?: any
}


const MenuChannel = ({name, category, image, viewers}: MenuChannelPropsType) => {
    const navigate = useNavigate();

    return (
        <div className="channel-info" onClick={() => navigate(`/${name}`)}>
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