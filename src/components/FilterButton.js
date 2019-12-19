import React from "react";

function FilterButton (props) {
    return (
        <div className="filter-button">
            <label for="free-movies">Free Movies </label>
            <input type="radio" id="free-movies" name="free-paid" value="free" onClick={props.filterMovies}/>
            <label for="paid-movies">Paid Movies</label>
            <input type="radio" id="paid-movies" name="free-paid" value="paid" onClick={props.filterMovies}/>
            <button onClick={props.resetMovies}>Reset</button>
        </div>
    )
}


export {
    FilterButton
}