import React, { Component, PropTypes } from 'react';
import {Redirect} from 'react-router-dom'
import GenreEdit from './GenreEdit'
import MoviesContainer from '../containers/MoviesContainer'


//need to pass in props
  const Genre = (props) => {


    // const { genres, movies } = this.props;

    //console.log(this.props)

    let genre = props.genres.filter(genre => genre.id == props.match.params.id)[0]
    let movies = props.movies

  //  console.log(this.genre)
    return (

      <div>
        <h2>
          {genre ? genre.name : null}
        </h2>
        <MoviesContainer genre={genre}
      movies={movies}
      /><br/><br/>
        <h4>Edit Genre Name</h4>

         <GenreEdit genre={genre}/>
         <br/>
      </div>
    )



  };

export default Genre;
