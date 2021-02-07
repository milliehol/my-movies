import React, { Component, PropTypes } from 'react';
import {Route, Link} from 'react-router-dom'
import Genre from './Genre';
import GenreEdit from './GenreEdit'



const Genres = (props) => {

   return (
     <center><div>
     <h3>
       Pick a Genre
     </h3>

       {props.genres.map(genre =>
         <li key={genre.id}>
            <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
         </li> )}
     </div></center>

   )
 }

export default Genres;
