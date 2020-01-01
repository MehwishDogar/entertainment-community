import React from "react";

function MovieBox(props) {
    const {movie, onClick} = props;
    return (
        <div className="movie-box" onClick={(e) => onClick(e, movie)} >
            <img src={movie["thumbnail-img"]} alt=""/>
            <div>
               <h4>
                   {movie.title}
               </h4>
               <p>
                   {movie.rating}
               </p>
               <p>
                   {movie["release-date"]}
               </p>
            </div>
        </div>
    );
}

export {
    MovieBox
};