import React, { Component } from 'react';
import GenresInput from '../components/GenreInput'
import Genres from '../components/Genres'
import Movies from '../components/Movies2'
import Genre from '../components/Genre'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/fetchMovies2'
import { fetchGenres } from '../actions/fetchGenres2'
import {Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'


class GenresContainer extends Component {

//  constructor(props) {
//      super(props);
//      this.state = {
//      };
//    }


  componentDidMount() {
this.props.fetchGenres(console.log(this.props))
//this.props.fetchMovies(console.log(this.props.movies))

}





render() {
    return (
        <div className="container">

        <h2 className="header">
          My Movies
        </h2>
          <NavBar/>
          <Switch>
            <Route path='/genres/new' component={GenresInput}/>
            <Route path='/genres/:id' render={(routerProps) => <Genre {...routerProps} genres={this.props.genres} />}/>
            <Route path='/genres' render={(routerProps) => <Genres {...routerProps} genres={this.props.genres}/>}/>
            <Route path='/movies' render={(routerProps) => <Movies {...routerProps} movies={this.props.movies}/>}/>
          </Switch>

        </div>
    )
}
}


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




export default connect(mapStateToProps, mapDispatchToProps)(GenresContainer)
