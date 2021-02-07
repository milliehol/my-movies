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
  return (
    <div>
      <MovieInput movie={this.props.movie}/><br/>
      <Movies movies={this.props.movies}/>
  </div>

  )
 }
}


const mapStateToProps = state => {
return {
  movies: state.movies
   }
  }





export default connect(mapStateToProps, {fetchMovies})(MoviesContainer)
