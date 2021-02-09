import React from 'react'
import {Route, Link} from 'react-router-dom'
import Movie from './Movie';
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'
import {fetchMovies} from '../actions/fetchMovies2'


class Movies extends React.Component {

  render() {

    const { movies, genreId, deleteMovie } = this.props;
  //  console.log(this.props.genre.movies)
   const associatedMovies = this.props.movies.filter(movie => movie.genre_id === genreId);

   const movieList = associatedMovies.map((movie, index) => {
     return <Movie key={index} movie={movie} deleteMovie={deleteMovie}   />
    })


      return (
          <div>
            <ul>
              {movieList}
            </ul>
          </div>
        );
      }

};

export default Movies;
