import React, { Component } from 'react';


class GenreInput extends Component {


  constructor(props) {
  		super(props);
      }

      addGenre = (e) => {
          if (e.key === 'Enter' && !(this.getName.value === '')) {
              this.props.addGenre(this.getName.value)
              this.getName.value = '';
          }
      }

      render() {
          return(
              <div>
                  <div className="header">
                      <h1>Genre List</h1>
                  </div>
                  <div className="inputContainer">
                      <input className="genreInput" type="text" placeholder="Add a Genre" maxLength="50"
                      onKeyPress={this.addGenre} ref={(input)=>this.getName = input} />
                  </div>
              </div>
          );
      }
  }

export default GenreInput;
