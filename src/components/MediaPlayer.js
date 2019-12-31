import React,{ Component } from "react";
import { MovieBox } from "./MovieBox";
import movies from "../movie-list.json";
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