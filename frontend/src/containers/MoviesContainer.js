import React, { Component } from 'react';
import MovieInput from '../components/MovieInput'
import Movies from '../components/Movies'
import Movie from '../components/Movie'
import { connect } from 'react-redux'
import {addMovie} from '../actions/addMovie'
import {deleteMovie} from '../actions/deleteMovie'
import {fetchMovies} from '../actions/fetchMovies2'
import {Route, Switch} from 'react-router-dom'


class MoviesContainer extends Component {

  constructor(props) {
      super(props);
      this.state = {
      };
    }


  //componentDidMount() {
// this.props.fetchMovies(console.log("mounted"))
//}


render() {
  console.log(this.props.genre.name)
  console.log(this.props.genre.name)
//  console.log(this.props.movie.title)
  return (
    <div>

      <MovieInput genre={this.props.genre}/><br/>
      <Movies movies={this.props.movies}
      genreId={this.props.genre.id}
      deleteMovie={this.props.deleteMovie}/>
  </div>

  )

 }
}


//const mapStateToProps = state => {
//return {
 //movies: state.movies
//  }
//}

const mapDispatchToProps = dispatch => ({

 //fetchMovies: movies => dispatch({type: 'FETCH_MOVIES', movies}),
  deleteMovie: id => dispatch({type: 'DELETE_MOVIE', id})
})





export default connect(null, mapDispatchToProps)(MoviesContainer)
