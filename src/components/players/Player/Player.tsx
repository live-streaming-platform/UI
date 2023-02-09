import React from "react";
import ReactPlayer, {ReactPlayerProps} from "react-player";
import "./style.css";

interface PlayerPropsType extends ReactPlayerProps {
    type: "show" | "view"
}

const Player = ({url, controls, type}: PlayerPropsType) => (
    <div className="player-wrapper">
        <ReactPlayer
            url={url}
            className={`react-player ${type}`}
            muted={true}
            width="100%"
            height="100%"
            controls={controls}
        />
    </div>
);

export default Player;
