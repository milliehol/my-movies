import React, { Component } from 'react';
import MovieInput from '../components/MovieInput'
import Movies from '../components/Movies'
import { connect } from 'react-redux'
import {addMovie} from '../actions/addMovie'
import {deleteMovie} from '../actions/deleteMovie'
import {fetchMovies} from '../actions/fetchMovies'


class MoviesContainer extends Component {
  render() {
    return (
      <div>
      <Movies movies={this.props.genre.movies}/>
               <MovieInput genre={this.props.genre}/><br/>

           </div>
    );
  }
}



export default MoviesContainer
