import React, { Component } from 'react';


class Genre extends Component {

  constructor(props) {
  		super(props);
      }



      deleteGenre = (id) => {
          this.props.deleteGenre(id)
      }

      render() {
          const todo = this.props.genre;
          return(
              <li className="genre" key={genre.id} id={genre.id}>
                  <label className="genreLabel">{genre.name}</label>
                  <span className="deleteGenreBtn" onClick={(e) => this.deleteGenre(genre.id)}>
                  x
                  </span>
              </li>
          );
      }
  }

export default Genre;
