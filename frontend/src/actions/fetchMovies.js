import * as types from './actionTypes';
import moviesApi from '../api/moviesApi';

export function loadMoviesSuccess(movies) {
  return {type: 'FETCH_MOVIES', movies};
}


export function fetchMovies(genreId) {
  // make async call to api, handle promise,y dispatch action when promise is resolved
  return function(dispatch) {
    return moviesApi.getAllMovies(genreId).then(movies => {
      dispatch(loadMoviesSuccess(movies));
    }).catch(error => {
      throw(error);
    });
  };
}
