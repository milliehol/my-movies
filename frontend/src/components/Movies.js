import React from 'react'
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'
import Movie from './Movie';

class Movies extends React.Component {




  state = {}

   handleDelete = (movie) => {
      this.props.deleteMovie(movie.id, movie.genre_id)
    }



  render() {
    return (
        <div>
          {this.props.movies && this.props.movies.map(movie =>
            <li key={movie.id}>{transaction.title} <button onClick={() => this.handleDelete(movie)}>Delete</button></li>
          )}
        </div>
      )
    }
  }

  export default connect(null, {deleteMovie})(Movies)
