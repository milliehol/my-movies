import React, { Component } from 'react';
import {connect} from 'react-redux'
import GenresContainer from './containers/GenresContainer'

import './App.css';

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
