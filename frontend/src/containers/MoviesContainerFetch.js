import React, { Component } from 'react';
import MovieInput from '../components/MovieInput'
import Movies from '../components/Movies'
import Movie from '../components/Movie'
import { connect } from 'react-redux'
import {addMovie} from '../actions/addMovie'
import {deleteMovie} from '../actions/deleteMovie'
import {fetchMovies} from '../actions/fetchMovies2'
import {Route, Switch} from 'react-router-dom'


class MoviesContainerFetch extends Component {




  componentDidMount() {
 this.props.fetchMovies(console.log(this.props))
}


render() {

  return (
    <div>

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
  fetchMovies: (movies) => {
    dispatch(fetchMovies(movies));
  },
 //fetchMovies: movies => dispatch({type: 'FETCH_MOVIES', movies}),
  deleteMovie: id => dispatch({type: 'DELETE_MOVIE', id})
})





export default connect(mapStateToProps, {fetchMovies})(MoviesContainerFetch)
