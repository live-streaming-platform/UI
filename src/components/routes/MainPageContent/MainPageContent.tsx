import React from 'react';
import './style.css'
import Player from "../../players/Player/Player";

const MainPageContent = () => {
    return (
        <div className={'main-page-content'}>
            <div className="main-page-section">
                <div className={'main-page-content__header'}>
                    Top Matches
                </div>
                <div className={'main-page-content__channels'}>
                    <div className="domain-channel">
                         <Player type={'show'} url={'http://localhost:8088/dash/kek.mpd'}/>
                    </div>
                    <div className={"secondary-channels"}>
                        <div className={'secondary-channel'}>
                             <Player type={'show'} url={'http://localhost:8088/dash/kek.mpd'}/>
                        </div>
                        <div className={'secondary-channel'}>
                             <Player type={'show'} url={'http://localhost:8088/dash/kek.mpd'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-page-section">
                <div className={'main-page-content__header'}>
                    Activities
                </div>
                <div className={'common-channels'}>
                    <div className="common-channel">
                        <Player type={'show'} url={'http://localhost:8088/dash/kek.mpd'}/>
                    </div>
                    <div className="common-channel">
                         <Player type={'show'} url={'http://localhost:8088/dash/kek.mpd'}/>
                    </div>
                    <div className="common-channel">
                         <Player type={'show'} url={'http://localhost:8088/dash/kek.mpd'}/>
                    </div>
                    <div className="common-channel">
                         <Player type={'show'} url={'http://localhost:8088/dash/kek.mpd'}/>
                    </div>
                    <div className="common-channel">
                         <Player type={'show'} url={'http://localhost:8088/dash/kek.mpd'}/>
                    </div>
                    <div className="common-channel">
                         <Player type={'show'} url={'http://localhost:8088/dash/kek.mpd'}/>
                    </div>
                    <div className="common-channel">
                         <Player type={'show'} url={'http://localhost:8088/dash/kek.mpd'}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MainPageContent;