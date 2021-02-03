import React, { Component } from 'react';
import GenresInput from '../components/genres/GenreInput'
import Genres from '../components/genres/Genres'
import { connect } from 'react-redux'
import { loadGenre, addGenre, updateGenre, deleteGenre } from '../actions/Genres'

class GenresContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  };

  componentDidMount() {
  this.props.addGenre()
}

handleOnClick() {
  this.props.deleteGenre(this.props.genre.id);
}

handleOnChange(event) {
  this.setState({
    name: event.target.value,
  });
}

handleOnSubmit(event) {
  event.preventDefault();
  this.props.addGenre(this.state.name)
  this.setState({
    name: ''
  });
}


  render() {
    return (
      <div>
        <GenresInput addGenre={this.props.addGenre}/>
        <Genres
          genres={this.props.genres}
          deleteGenre={this.props.deleteGenre}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ genres: state.genres })

//const mapDispatchToProps = dispatch => ({
  //addGenre: name => dispatch({type: 'ADD_GENRE', name}),
  //deleteGenre: id => dispatch({type: 'DELETE_GENRE', id})


export default connect(mapStateToProps, {addGenre})(GenresContainer)
