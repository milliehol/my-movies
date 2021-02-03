import React, { Component, PropTypes } from 'react';



class GenreInput extends Component {


  constructor(props) {
  		super(props);
      }

      addGenre = (e) => {
          if (e.key === 'Enter' && !(this.getTitle.value === '')) {
              this.props.addGenre(this.getTitle.value)
              this.getTitle.value = '';
          }
      }

      render() {
          return(
              <center><div>
                  <div className="header">
                      <h1>Genre List</h1>
                  </div>
                  <div className="inputContainer">
                      <input className="genreInput" type="text" placeholder="Add a Genre" maxLength="50"
                      onKeyPress={this.addGenre} ref={(input)=>this.getTitle = input} />
                  </div>
              </div></center>
          );
      }
  }

export default GenreInput;
