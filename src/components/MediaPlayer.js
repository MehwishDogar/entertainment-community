import React from "react";
import "video-react/dist/video-react.css";
import { Player } from 'video-react';

function MediaPlayer(props) {
    return (
        <div className="media-player">
            <Player
                playsInline
                src={props.movieUrl}
            />
         </div>
    );

} 

export {
    MediaPlayer
};