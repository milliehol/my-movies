import {combineReducers} from 'redux';
import movies from './movieReducer';
import genres from './genreReducer';


const rootReducer = combineReducers({
  // short hand property names
  genres,
  movies
})

export default rootReducer;
