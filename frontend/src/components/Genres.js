import React, { Component, PropTypes } from 'react';
import {Route, Link} from 'react-router-dom'
import Genre from './Genre';
import GenreEdit from './GenreEdit'


//functional, not class component, receives entire props object
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
         <br/>
     </div></center>

   )
 }

export default Genres;
