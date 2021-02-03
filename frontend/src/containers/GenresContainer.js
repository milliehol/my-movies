import React, { Component } from 'react';
import GenresInput from '../components/genres/GenreInput'
import Genres from '../components/genres/Genres'
import { connect } from 'react-redux'
import { loadGenres, addGenre, deleteGenre } from '../actions/Genres'

class GenresContainer extends Component {


  componentDidMount() {
this.props.fetchGenres()
}



  render() {
    return (
      <div>
        <GenresInput addGenre={this.addGenre}/>
        </div>
      //  <Genres
        //  genres={this.loadGenres}
      //    deleteGenre={this.deleteGenre}
      //  />

    );
  }
}

const mapStateToProps = state => ({ genres: state.genres, genre: state.genre })




export default connect(mapStateToProps, {fetchAccounts})(GenresContainer)
