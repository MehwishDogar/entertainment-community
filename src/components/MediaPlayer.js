import React,{Component} from "react";
import {MovieBox} from "./MovieBox";
import movies from "../movie-list.json";

function MediaPlayer(props) {
    return (
        <div className="media-player">
              <img src={props.movieUrl} alt=""/>
        </div>
    );
} 





export {
    MediaPlayer
}