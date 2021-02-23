import React, { Component } from 'react';
import GenresInput from '../components/GenreInput'
import Genres from '../components/Genres'
import Movie from '../components/Movie'
import Movies from '../components/Movies2'
import Genre from '../components/Genre'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/fetchMovies'
import { fetchGenres } from '../actions/fetchGenres'
import {Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'


class GenresContainer extends Component {

//container passes props to components for data manipulation


  componentDidMount() {
this.props.fetchGenres(console.log(this.props))
this.props.fetchMovies(console.log(this.props.movies))

}





render() {
    return (
        <div className="container">

        <h2 className="header">
          My Movies
        </h2>
          <NavBar/>
          {/* A <Switch> looks through its children <Route>s and
               renders the first one that matches the current URL. */}
          <Switch>
           <Route path='/genres/new' component={GenresInput}/>
           <Route path='/genres/:id' render={(routerProps) => <Genre {...routerProps} genres={this.props.genres} movies={this.props.movies} />}/>
            <Route path='/genres' render={(routerProps) => <Genres {...routerProps} genres={this.props.genres}/>}/>
            <Route path='/movies/:id' render={(routerProps) => <Movie {...routerProps} movies={this.props.movies} genres={this.props.genres}/>}/>
            <Route path='/movies/' render={(routerProps) => <Movies {...routerProps} movies={this.props.movies}/>}/>
          </Switch>

        </div>
    )
}
}

//takes in the state from redux store
const mapStateToProps = state => {
  return {
    genres: state.genreReducer.genres,

   movies: state.movieReducer.movies

  }
}

const mapDispatchToProps = dispatch => ({
  fetchGenres: () => {
      dispatch(fetchGenres());
    },
    fetchMovies: () => {
       dispatch(fetchMovies());
     },
});



//renders to app component
export default connect(mapStateToProps, mapDispatchToProps)(GenresContainer)
