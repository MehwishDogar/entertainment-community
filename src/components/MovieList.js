import React,{Component} from "react";
import movies from "../movie-list.json";
import {MovieBox} from "./MovieBox";
import { MediaPlayer } from "./MediaPlayer.js";
import {FilterButton} from "./FilterButton.js";
import { statements } from "@babel/template";

class MovieList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            movies: movies,
            filteredMovies: null
        };

        this.filterMovies = this.filterMovies.bind(this);
        this.resetMovies= this.resetMovies.bind(this);
    }

    filterMovies(e) {
        if(e.target.value === 'paid'){
            this.setState({
                filteredMovies: this.state.movies.filter(movie => movie.price > 0)
            })
        } else {
            this.setState({
                filteredMovies: this.state.movies.filter(movie => movie.price <= 0)
            })
        }
       
    }

    resetMovies(e) {
        this.setState({
            filteredMovies: null
        })
    }

    render() {
        let movies = this.state.filteredMovies || this.state.movies;
        return(
            //TODO: need to iterate over movies array to render movie box component
            <div className="movie-list">
                <FilterButton
                        filterMovies={this.filterMovies}
                        resetMovies={this.resetMovies}
                />
            {
               movies.map(function(movie){
                    return <MovieBox 
                                  movie = {movie}
                                  onClick={this.props.handleClick}
                    />
                }.bind(this))
            }
            </div>
        ); 
    }
}

export {
    MovieList
}