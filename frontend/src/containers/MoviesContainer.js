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
          <MovieInput
          addMovie={this.props.addMovie}
          genreId={this.props.genre.id}/><br/>
          <Movies  movies={this.props.fetchMovies}
          genreId={this.props.genre.id}
           deleteMovie={this.props.deleteMovie}/>
      </div>

    );
  }
}

const mapStateToProps = ({movies}) => {
  return {movies}
}

const mapDispatchToProps = dispatch => ({
  fetchMovies: movies => dispatch({type: 'FETCH_MOVIES', movies}),
 addMovie: movie => dispatch({type: 'ADD_MOVIE', movie}),
  deleteMovie: id => dispatch({type: 'DELETE_MOVIE', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)
