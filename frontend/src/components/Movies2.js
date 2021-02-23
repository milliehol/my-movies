import React, { Component, PropTypes } from 'react';
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'
import Genre from './Genre';





const Movies = (props) => {




//  handleDelete = (movie) => {
  //  this.props.deleteMovie(movie.id, movie.genre_id)
    //relaods after movie deleted
  // window.location.reload(false);
//  }
    let movies = props.movies

   return (



     <center><div>
     <h3>
       The Movies
     </h3>

       {movies.map(movie =>
         <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
         </li>
        // <li key={movie.id}>{movie.title} <button onClick={() => this.handleDelete(movie)}>Delete</button></li>
      )}
       <br/>

     </div>
     </center>

   )

};


//const mapStateToProps = state => ({
//  movies: state.movieReducer.movies,

//});

export default Movies;
