import React from "react";
import "video-react/dist/video-react.css";
//import { Player } from 'video-react';

function MediaPlayer(props) {
    return (
        <div className="media-player">
            <iframe width="910" height="560"
            src= {props.movieUrl}
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
         </div>
    );

} 

export {
    MediaPlayer
};