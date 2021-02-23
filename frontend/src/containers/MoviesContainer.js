import React, { Component } from 'react';
import MovieInput from '../components/MovieInput'
import Movies from '../components/Movies'
import Movie from '../components/Movie'
import { connect } from 'react-redux'
import {addMovie} from '../actions/addMovie'
import {deleteMovie} from '../actions/deleteMovie'
import {Route, Switch} from 'react-router-dom'


class MoviesContainer extends Component {



render() {

//  console.log(this.props.movie.title)
  return (
    <div>
      <Movies movies={this.props.movies}
      genreId={this.props.genre.id}
    //  deleteMovie={this.props.deleteMovie}
      /><br/>
      <MovieInput genre={this.props.genre}/><br/>


  </div>

  )

 }
}


//const mapStateToProps = state => {
//return {
// movies: state.movieReducer.movies
// }
//}

//const mapDispatchToProps = dispatch => ({
//  deleteMovie: () => {
//      dispatch(deleteMovie(this.props.movie.id, this.props.genre.id));
//    },
 //fetchMovies: movies => dispatch({type: 'FETCH_MOVIES', movies}),
//  deleteMovie: id => dispatch({type: 'DELETE_MOVIE', id})
//})





export default MoviesContainer
