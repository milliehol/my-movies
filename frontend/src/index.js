import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
  <Provider store={store}>
  <Router>
   <App />
   </Router>
 </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
