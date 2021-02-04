import React, { Component } from 'react';
import MovieInput from '../components/movies/MovieInput'
import Movies from '../components/movies/Movies'


class MoviesContainer extends Component {
  render() {
    return (
      <div>
          <MovieInput genre={this.props.movie}/><br/>
          <Movies movies={this.props.genre && this.props.genre.movies}/>
      </div>

    );
  }
}

//const mapStateToProps = ({movies}) => {
//  return {movies}
//}

//const mapDispatchToProps = dispatch => ({
//  addMovie: movie => dispatch({type: 'ADD_MOVIE', title}),
//  deleteMovie: id => dispatch({type: 'DELETE_MOVIE', id})
//})

export default MoviesContainer
