import {combineReducers} from 'redux';
import genreReducer from './genreReducer';
import movieReducer from './movieReducer';



const rootReducer = combineReducers({
  // short hand property names
  genreReducer,
  movieReducer
});

export default rootReducer;
