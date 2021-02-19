import React, { Component, PropTypes } from 'react';
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'
import Genre from './Genre';
import GenreEdit from './GenreEdit'




class Movies extends Component  {




  handleDelete = (movie) => {
    const movieDelete = movie
    this.props.deleteMovie(movie.id, movie.genre_id)


    // Remove deleted item from state.
  //  this.setState({
//  movies: this.state.movies.filter(movie => movie.id !== movieDelete.id),
//    });

//reloads window after movie is removed
    window.location.reload(false);
  }

render() {

   return (



     <center><div>
     <h3>
       The Movies
     </h3>

       {this.props.movies.map(movie =>
        // <li key={movie.id}>
          //  <Link to={`genres/${movie.genre_id}/movies/${movie.id}`}>{movie.title}</Link>
        // </li>
         <li key={movie.id}>{movie.title} <button onClick={() => this.handleDelete(movie)}>Delete</button></li> )}
       <br/>
     </div>
     </center>

   )
 }
};


//const mapStateToProps = state => ({
//  movies: state.movieReducer.movies,

//});

export default connect(null, {deleteMovie})(Movies);
