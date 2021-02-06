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
               <MovieInput genre={this.props.genre}/><br/>
               <Movies movies={this.props.genre && this.props.genre.movies}/>
           </div>
    );
  }
}



export default MoviesContainer
