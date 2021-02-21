import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import genreReducer from './reducers/genreReducer'
import movieReducer from './reducers/movieReducer'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  // short hand property names
  genreReducer,
  movieReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  //store is passed as a prop to the provider.  It gives the components access to the store.
  <Provider store={store}>
  <Router>
   <App />
   </Router>
 </Provider>,
  document.getElementById('root')
);
