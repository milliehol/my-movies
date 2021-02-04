import React from 'react'
import {connect} from 'react-redux'
import {editGenre} from '../actions/editGenre'

class GenreEdit extends React.Component {

  state = {
    name: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let genre = {...this.state, id: this.props.genre.id}
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
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>

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
