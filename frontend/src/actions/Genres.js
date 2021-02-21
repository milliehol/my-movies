import * as types from './actionTypes';
import genresApi from '../api/genresApi';

export function loadGenresSuccess(genres) {
  return {type: types.LOAD_GENRES_SUCCESS, genres};
}

export function updateGenreSuccess(genre) {
  return {type: types.UPDATE_GENRE_SUCCESS, genre}
}

export function createGenreSuccess(genre) {
  return {type: types.ADD_GENRE_SUCCESS, genre}
}

export function deleteGenreSuccess(genre) {
  return {type: types.DELETE_GENRE_SUCCESS, genre}
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


export function updateGenre(genre) {
  return function (dispatch) {
    return genresApi.updateGenre(genre).then(responseGenre => {
      dispatch(updateGenreSuccess(responseGenre));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addGenre(genre) {
  return function (dispatch) {
    return genresApi.createGenre(genre).then(responseGenre => {
      dispatch(createGenreSuccess(responseGenre));
      return responseGenre;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteGenre(genre) {
  return function(dispatch) {
    return genresApi.deleteGenre(genre).then(() => {
      console.log(`Deleted ${genre.id}`)
      dispatch(deleteGenreSuccess(genre));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}
