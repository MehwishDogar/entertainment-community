import React, { Component } from 'react';
import './App.css';
import { MovieList } from './components/MovieList';
import { MediaPlayer } from './components/MediaPlayer';

class App extends Component {
    constructor (props) {
       super(props)
       this.state = {
          movieUrl: ''
       }

       this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, movie) {
      this.setState( {
        movieUrl: movie['video-url']
      });
    }

    render () {
      return (
        <div>
        <div className="app-header">
            <img src="https://png.pngtree.com/png-clipart/20190920/original/pngtree-movie-video-film-illustration-png-image_4643932.jpg" alt="" /> 
            <h2 className="heading">Movie Player</h2>
        </div>
        <div className='app'>
            <MediaPlayer movieUrl={this.state.movieUrl}/>
            <MovieList handleClick={this.handleClick}/>
        </div>
        <div className="app-footer"></div>
        </div>
      );
    }
}

export default App;
