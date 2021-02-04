import * as types from './actionTypes';
import genresApi from '../api/genresApi';

export function loadGenresSuccess(genres) {
  return {type: 'FETCH_GENRES', genres};
}


export function fetchGenres() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return genresApi.getAllGenres().then(genres => {
      dispatch(loadGenresSuccess(genres));
    }).catch(error => {
      throw(error);
    });
  };
}
