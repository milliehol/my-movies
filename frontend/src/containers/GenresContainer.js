import React, { Component } from 'react';
import GenresInput from '../components/genres/GenreInput'
import Genres from '../components/genres/Genres'
import { connect } from 'react-redux'
import { fetchGenres } from '../actions/Genres'
import {Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'

class GenresContainer extends Component {


  componentDidMount() {
this.props.fetchGenres()
}



render() {
    return (
        <div>
          <NavBar/>
          <Switch>

            <Route path='/genres' render={(routerProps) => <Genres {...routerProps} genres={this.props.genres}/>}/>
          </Switch>

        </div>
    )
}
}


const mapStateToProps = state => ({ genres: state.genres })




export default connect(mapStateToProps, {fetchGenres})(GenresContainer)
