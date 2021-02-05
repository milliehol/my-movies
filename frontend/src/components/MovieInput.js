import React from 'react'
import {connect} from 'react-redux'
import {addMovie} from '../actions/addMovie'

class MovieInput extends React.Component {

  state = {
    title: '',
  }

  handleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addMovie({title: this.state.title, genre_Id: this.props.genre_Id })
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Movie Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )

  }
}


export default MovieInput;
