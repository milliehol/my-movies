import React, { Component, PropTypes } from 'react';
import {Redirect} from 'react-router-dom'
import GenreEdit from './GenreEdit'
import MoviesContainer from '../containers/MoviesContainer'



  class Genre extends React.Component {

  render(){
     const { genres, movies } = this.props;

    //console.log(this.props)

    let genre = this.props.genres.filter(genre => genre.id == this.props.match.params.id)[0]

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

  }

  };

export default Genre;
