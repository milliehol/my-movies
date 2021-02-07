import React, { Component } from 'react';

class Movie extends Component {


  handleOnClick = () => {
    this.props.deleteMovie(this.props.movie.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.movie.title}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Movie;
