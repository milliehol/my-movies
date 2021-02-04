import React, { Component, PropTypes } from 'react';
import {Route, Link} from 'react-router-dom'
import Genre from './Genre';



  const Genres = (props) => {

    return (
      <center><div>
      <h2>
        All of the Genres
      </h2>

        {props.genres.map(genre =>
          <li key={genre.id}>
          {genre.name}
          </li> )}
      </div></center>

    )
  }

export default Genres;
