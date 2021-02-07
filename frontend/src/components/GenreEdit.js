import React from 'react'
import {connect} from 'react-redux'
import {editGenre} from '../actions/editGenre'
import { Label, Form } from 'react-bootstrap'

class GenreEdit extends React.Component {

  state = {
    name: '',
    id: this.props.genre ? this.props.genre.id : null,
  }

  handleChange = (event) => {
    this.setState({

      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

   let genre = {...this.state, id: this.state.id}

    this.props.editGenre(genre)
    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Genre Name: </label>
          <input type='text' placeholder={this.state.name} value={this.state.name} name="name" onChange={this.handleChange}/><br/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

GenreEdit.defaultProps = {
  genres: {}
}


export default connect(null, {editGenre})(GenreEdit)
