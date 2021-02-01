import * as types from './actionTypes';
import moviesApi from '../api/moviesApi';

export function loadMoviesSuccess(movies) {
  return {type: types.LOAD_MOVIES, movies};
}

export function updateMovieSuccess(movie) {
  return {type: types.UPDATE_MOVIE, movie}
}

export function createMovieSuccess(movie) {
  return {type: types.CREATE_MOVIE, movie}
}

export function deleteMovieSuccess(movie) {
  return {type: types.DELETE_MOVIE, movie}
}

export function loadMovies() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return catApi.getAllMovies().then(movies => {
      dispatch(loadMoviesSuccess(movies));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateMovie(movie) {
  return function (dispatch) {
    return catApi.updateMovie(movie).then(responseMovie => {
      dispatch(updateMovieSuccess(responseMovie));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createMovie(movie) {
  return function (dispatch) {
    return movieApi.createMovie(movie).then(responseMovie => {
      dispatch(createMovieSuccess(responseMovie));
      return responseMovie;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteMovie(movie) {
  return function(dispatch) {
    return movieApi.deleteMovie(movie).then(() => {
      console.log(`Deleted ${movie.id}`)
      dispatch(deleteMovieSuccess(movie));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}
