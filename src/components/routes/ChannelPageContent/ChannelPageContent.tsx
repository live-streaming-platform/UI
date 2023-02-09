import React from 'react';
import './style.css'
import {useParams} from "react-router";
import Player from "../../players/Player/Player";
import {Avatar} from "../../images";

const ChannelPageContent = () => {

    const {username} = useParams();


    return (
        <div className={'channel-player-content'}>
            <div className={'channel-player-wrapper'}>
                <div className="channel-player-area">
                    <div className="channel-player">
                        <Player type={"view"} url={'http://localhost:8088/dash/kek.mpd'}/>
                    </div>
                    <div className={'channel-player-chat'}>

                    </div>
                </div>

                <div className={'channel-player__info'}>
                    <div className="player__user-info-wrapper">
                        <Avatar type={'lg'}/>
                        <div className={'channel-player__info__user'}>
                            <p className="channel-player__info__user__username">name</p>
                            <p className="channel-player__info__user__description">desc</p>
                            <p className="channel-player__info__user__tag">game</p>
                        </div>
                    </div>
                    <div className="channel-player__actions">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChannelPageContent;