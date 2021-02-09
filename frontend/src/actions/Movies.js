import * as types from './actionTypes';
import moviesApi from '../api/moviesApi';

export function loadMoviesSuccess(movies) {
  return {type: types.FETCH_MOVIES, payload: movies};
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

export function fetchMovies() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return moviesApi.getAllMovies(console.log("working")).then(movies => {
      dispatch(loadMoviesSuccess(console.log("it worked"), movies));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateMovie(movie) {
  return function (dispatch) {
    return moviesApi.updateMovie(movie).then(responseMovie => {
      dispatch(updateMovieSuccess(console.log("it worked"), responseMovie));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createMovie(movie) {
  return function (dispatch) {
    return moviesApi.createMovie(movie).then(responseMovie => {
      dispatch(createMovieSuccess(responseMovie));
      return responseMovie;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteMovie(movie) {
  return function(dispatch) {
    return moviesApi.deleteMovie(movie).then(() => {
      console.log(`Deleted ${movie.id}`)
      dispatch(deleteMovieSuccess(movie));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}
