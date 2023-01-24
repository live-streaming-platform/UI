import React from 'react';
import MenuChannel from "../MenuChannel/MenuChannel";
import './style.css'

type MenuChannelListPropsType = {
    title: string
    channelList: Array<any>
}

const MenuChannelList = ({title, channelList}: MenuChannelListPropsType) => {
    return (
        <div className="channel-list">
            <p className={'channel-list__title'}>{title}</p>
            {channelList.map(channel => <MenuChannel key={channel.name} name={channel.name} category={channel.category}
                                                     viewers={channel.viewers} image={channel?.image}/>)}
        </div>
    );
};

export default MenuChannelList;