import React, { Component } from 'react';
import GenresContainer from '../../containers/GenresContainer'


class Genre extends Component {

  handleOnClick() {
    this.props.deleteGenre(this.props.genre.id);
  }

  render() {
    const { genre } = this.props;

    return (
      <div>
        <li>
          {genre.name}
          <button onClick={() => this.handleOnClick()}> X </button>
          <GenresContainer genre={genre}/>
        </li>
      </div>
    );
  }
};

export default Genre;
