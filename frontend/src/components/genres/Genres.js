import React, { Component } from 'react';
import Genre from './Genre';

class Genres extends Component {

  render() {
    const { genres, deleteGenre } = this.props;
    const genreList = genres.map(genre => {
      return (
        <Genre
            key={genre.id}
            genre={genre}
            deleteGenre={deleteGenre}
        />
      )
    });

    return(
      <ul>
        {genreList}
      </ul>
    );
  }
};

export default Genres;
