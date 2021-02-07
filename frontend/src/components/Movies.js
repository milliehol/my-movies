import React from 'react'
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'
import {fetchMovies} from '../actions/fetchMovies2'


class Movies extends React.Component {


  //componentDidMount() {
 //this.props.fetchMovies(this.props.genre_id)
//}




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

          {this.props.movies.map(movie =>
            <li key={movie.id}>{movie.title} <button onClick={() => this.handleDelete(movie)}>Delete</button></li>
          )}
        </div>

      )
    
    }




  }

  export default connect(null, {deleteMovie})(Movies)
