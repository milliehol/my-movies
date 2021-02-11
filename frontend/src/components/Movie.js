import React, { Component } from 'react';
import {connect} from 'react-redux'
import {deleteMovie} from '../actions/deleteMovie'

class Movie extends Component {


  handleOnClick = () => {
    this.props.deleteMovie(this.props.movie.id, this.props.genre.id)
  }

  render() {
    return (
      <center><div>
        <li>
          {this.props.movie.title}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div></center>
    );
  }

};

export default connect(null, {deleteMovie})(Movie);
