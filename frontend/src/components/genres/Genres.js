import React, { Component } from 'react';
import Genre from './Genre';

class Genres extends Component {

  constructor(props) {
  		super(props);
      }

      render() {
          const genres = this.props.genres;
          return(
              <div className="listWrapper">
                  <ul className="genreList">
                  {genres.map((genre) => {
                      return (
                          <Genre genre={genre} key={genre.id} id={genre.id}
                              deleteGenre={this.props.deleteGenre} />
                      )
                  })}
                  </ul>
              </div>
          );
      }
  };

export default Genres;
