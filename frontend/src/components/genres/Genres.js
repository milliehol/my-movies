import React, { Component, PropTypes } from 'react';
import {Route, Link} from 'react-router-dom'
import Genre from './Genre';



  const Genres = (props) => {

    return (
      <div>
        {props.genres.map(genre =>
          <li key={genre.id}>
          {genre.name}
          </li> )}
      </div>

    )
  }

export default Genres;
