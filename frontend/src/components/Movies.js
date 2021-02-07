import React from 'react'
import {Route, Link} from 'react-router-dom'
import Movie from './Movie';
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'
import {fetchMovies} from '../actions/fetchMovies2'


class Movies extends React.Component {

  render() {

    const { movies, genreId } = this.props;
    console.log(this.props.movies)
  //  const associatedMovies = movies.filter(movie => movie.genreId === genreId);

  //  const movieList = this.props.genre.movies.map((movie, index) => {
  //    return <Movie key={index} movie={movie}  />
  //  })

    return (


     <div>
       <ul>
        {this.props.movies.map(movie =>
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
         </li> )}

        </ul>
      </div>
    );
  }

};

export default Movies;
