import React from 'react'
import {connect} from 'react-redux'
import {addGenre} from '../actions/addGenre'
import Form from 'react-bootstrap/Form'

class GenreInput extends React.Component {

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
    this.props.addGenre(this.state)
    this.setState({
      name: '',
    })
  }

  render() {
    return (
      <center><div className="container">
        <form style={{padding: '10px'}}onSubmit={this.handleSubmit}>
          <label>Genre Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div></center>
    )
  }
}


export default connect(null, {addGenre})(GenreInput)
