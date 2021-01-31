import React, { Component } from 'react';
import MovieInput from '../components/movies/MovieInput'
import Movies from '../components/movies/Movies'
import { connect } from 'react-redux'

class MoviesContainer extends Component {
  render() {
    return (
      <div>
        <MovieInput
          addMovie={this.props.addMovie}
          genreId={this.props.genre.id}
        />
        <Movies
          movies={this.props.movies}
          genreId={this.props.genre.id}
          deleteMovie={this.props.deleteMovie}
        />
      </div>
    );
  }
}

const mapStateToProps = ({movies}) => {
  return {movies}
}

const mapDispatchToProps = dispatch => ({
  addMovie: movie => dispatch({type: 'ADD_MOVIE', title}),
  deleteMovie: id => dispatch({type: 'DELETE_MOVIE', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)
