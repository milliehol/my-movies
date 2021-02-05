import React from 'react'
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'
import Movie from './Movie';

class Movies extends React.Component {


  render() {

     const { movies, genre_Id, deleteMovie } = this.props;
     const associatedMovies = movies.filter(movie => movie.genre_Id === genre_Id);

     const movieList = associatedMovies.map((movie, index) => {
       return <Movie key={index} movie={movie} deleteMovie={deleteMovie} />
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
