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



  componentDidMount() {
 this.props.fetchMovies(this.props.genre.id)
}


render() {
  console.log(this.props.genre.id)
  console.log(this.props.genre)
  console.log(this.props.movies)
  return (
    <div>

      <MovieInput genre={this.props.genre}/><br/>
      <Movies movies={this.props.genre.movies}
      genreId={this.props.genre.id}/>
  </div>

  )

 }
}


const mapStateToProps = state => {
return {
 movies: state.movies
  }
}

const mapDispatchToProps = dispatch => ({
 fetchGenres: movies => dispatch({type: 'FETCH_MOVIES', movies}),
  deleteMovie: id => dispatch({type: 'DELETE_MOVIE', id})
})





export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)
