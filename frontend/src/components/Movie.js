import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'

const Movie = (props) => {


  // const { genres, movies } = this.props;

  //console.log(this.props)
  let movie = props.movies.filter(movie => movie.id == props.match.params.id)[0]
  let genre = props.genres.filter(genre => genre.id == movie.genre_id)[0]


//  console.log(this.genre)
  return (

    <div>
    <h2>
      {movie ? movie.title : null}
    </h2>
      <h3>
        Genre: {genre ? genre.name : null}
      </h3>

       <br/>
    </div>
  )



};

export default Movie;
