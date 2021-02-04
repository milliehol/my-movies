import React, { Component } from 'react';
import {connect} from 'react-redux'
import GenresContainer from './containers/GenresContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GenresContainer />
      </div>
    );
  }
}


export default App;
