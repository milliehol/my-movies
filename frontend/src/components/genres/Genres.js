import React, { Component, PropTypes } from 'react';
import GenreItem from './Genre';

class Genres extends Component {

  constructor(props) {
  		super(props);
      }

      render() {
          const genres = this.props.genres;

         return(

             <div className="listWrapper">
             </div>
                //  <ul className="genreList">
                  //{genres.map((genre) => {
                    //  return (
                      //    <GenreItem genre={genre} key={genre.id} id={genre.id}
                        //      deleteGenre={this.props.deleteGenre} />
                  //    )
                //  })}
                //  </ul>

            );
      }
  };

export default Genres;
