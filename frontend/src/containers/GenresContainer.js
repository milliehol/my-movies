import React, { Component } from 'react';
import GenresInput from '../components/GenreInput'
import Genres from '../components/Genres'
import Genre from '../components/Genre'
import { connect } from 'react-redux'
import { fetchGenres } from '../actions/fetchGenres2'
import {Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'

class GenresContainer extends Component {


  componentDidMount() {
 this.props.fetchGenres()
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
            <Route path='/genres/:id' render={(routerProps) => <Genre {...routerProps} genres={this.props.genres}/>}/>
            <Route path='/genres' render={(routerProps) => <Genres {...routerProps} genres={this.props.genres}/>}/>
          </Switch>

        </div>
    )
}
}


const mapStateToProps = state => {
  return {
    genres: state.genres
  }
}




export default connect(mapStateToProps, {fetchGenres})(GenresContainer)
