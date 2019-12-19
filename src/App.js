import React, {Component} from 'react';
import './App.css';
import {MovieList} from './components/MovieList';
import {MediaPlayer} from './components/MediaPlayer';

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
        movieUrl: movie['large-img']
      });
    }

    render () {
      return (
        <div className='app'>
         <MediaPlayer movieUrl={this.state.movieUrl} />
         <MovieList handleClick={this.handleClick}/>
        </div>
      );
    }
}

// function App() {
//   return (
//     <div>
//     <MediaPlayer />
//     <MovieList />
//     </div>
//   );
// }

export default App;
