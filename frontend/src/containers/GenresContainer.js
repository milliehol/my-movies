import React, { Component } from 'react';
import GenresInput from '../components/genres/GenreInput'
import Genres from '../components/genres/Genres'
import { connect } from 'react-redux'
import { loadGenre, addGenre, updateGenre, deleteGenre } from '../actions/Genres'

class GenresContainer extends Component {


  componentDidMount() {
  this.loadGenre();
  this.addGenre();
  this.delteGenre()
}



  render() {
    return (
      <div>
        <GenresInput addGenre={this.addGenre}/>
        <Genres
          genres={this.loadGenre}
          deleteGenre={this.deleteGenre}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ genres: state.genres })

//const mapDispatchToProps = dispatch => ({
  //addGenre: name => dispatch({type: 'ADD_GENRE', name}),
  //deleteGenre: id => dispatch({type: 'DELETE_GENRE', id})


export default connect(mapStateToProps, {addGenre}, {loadGenre}, {deleteGenre})(GenresContainer)
