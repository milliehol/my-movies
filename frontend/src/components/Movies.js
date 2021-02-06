import React from 'react'
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'


class Movies extends React.Component {




  state = {

  }

   handleDelete = (movie) => {
      this.props.deleteMovie(movie.id, movie.genre_id)
      console.log(movie)
    }



  render() {
    return (
        <div>
        <h3>
          Movies
        </h3>

          {this.props.movies && this.props.movies.map(movie =>
            <li key={movie.id}>{movie.title} <button onClick={() => this.handleDelete(movie)}>Delete</button></li>
          )}
        </div>

      )
      console.log(movies)
    }

  }

  export default connect(null, {deleteMovie})(Movies)
