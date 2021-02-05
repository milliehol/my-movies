import React, { Component } from 'react';
import MovieInput from '../components/MovieInput'
import Movies from '../components/Movies'
import { connect } from 'react-redux'
import {addMovie} from '../actions/addMovie'
import {deleteMovie} from '../actions/deleteMovie'


class MoviesContainer extends Component {
  render() {
    return (
      <div>
          <MovieInput  addMovie={this.props.addMovie}
          genreID={this.props.genre.id}/><br/>
          <Movies movies={this.props.movies}
          genreID={this.props.genre.id}
           deleteMovie={this.props.deleteMovie}/>
      </div>

    );
  }
}

const mapStateToProps = ({movies}) => {
  return {movies}
  console.log(movies)
}

const mapDispatchToProps = dispatch => ({
 addMovie: movie => dispatch({type: 'ADD_MOVIE', movie}),
  deleteMovie: id => dispatch({type: 'DELETE_MOVIE', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)
