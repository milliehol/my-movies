import React, { Component } from 'react';

class Movie extends Component {


  handleOnClick = () => {
    this.props.deleteMovie(this.props.genre.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.genre.name}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Movie;
