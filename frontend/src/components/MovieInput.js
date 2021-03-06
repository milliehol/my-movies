import React from 'react'
import {connect} from 'react-redux'
import {addMovie} from '../actions/addMovie'
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

class MovieInput extends React.Component {

  state = {
    title: '',
  //  id: this.props.movie ? this.props.movie.id : null,
  }

  handleChange = (event) => {
    this.setState({
       [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log(this.props.genre.id)
    event.preventDefault()
    this.props.addMovie(this.state, this.props.genre.id)
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <div>
        <form className="Form" onSubmit={this.handleSubmit}>
          <label>Add Movie:</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )

  }
}


export default connect(null, {addMovie})(MovieInput)
