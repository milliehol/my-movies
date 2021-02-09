import React, { Component, PropTypes } from 'react';
import {Route, Link} from 'react-router-dom'
import Genre from './Genre';
import GenreEdit from './GenreEdit'




const Movies = (props) => {

   return (
     <center><div>
     <h3>
       Pick a Genre
     </h3>

       {props.movies.map(movie =>
         <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
         </li> )}
     </div></center>

   )
 }

export default Movies;
