import React, { Component } from 'react';
import GenresInput from '../components/genres/GenreInput'
import Genres from '../components/genres/Genres'
import { connect } from 'react-redux'
import { loadGenres, addGenre, deleteGenre } from '../actions/Genres'

class GenresContainer extends Component {


  componentDidMount() {
  this.loadGenres();
  this.addGenre();
  this.deleteGenre()
}



  render() {
    return (
      <div>
        <GenresInput addGenre={this.addGenre}/>
        <Genres
          genres={this.loadGenres}
          deleteGenre={this.deleteGenre}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ genres: state.genres })

const mapDispatchToProps = dispatch => ({
  loadGenres: name => dispatch({type: 'LOAD_GENRES_SUCCESS', name}),
  addGenre: name => dispatch({type: 'ADD_GENRE_SUCCESS', name}),
  deleteGenre: id => dispatch({type: 'DELETE_GENRE_SUCCESS', id})
})


export default connect(mapStateToProps, mapDispatchToProps)(GenresContainer)
