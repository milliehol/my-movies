import React from 'react'
import {Route, Link} from 'react-router-dom'
import Movie from './Movie';
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'
import {fetchMovies} from '../actions/fetchMovies2'


class Movies extends React.Component {


  handleDelete = (movie) => {
  //  event.preventDefault()
    this.props.deleteMovie(movie.id, movie.genre_id)
  }

  render() {

    const { movies, genreId } = this.props;
  //  console.log(this.props.genre.movies)

   const associatedMovies = this.props.movies.filter(movie => movie.genre_id === genreId);

   const movieList = associatedMovies.map(movie =>
    //  <li key={movie.id}>   {movie.title}</li>
    <li key={movie.id}>{movie.title} <button onClick={() => this.handleDelete(movie)}>Delete</button></li>
      )


      return (
        <center>  <div>

              {movieList}

          </div> </center>
        );
      }

};

export default connect(null, {deleteMovie})(Movies)
