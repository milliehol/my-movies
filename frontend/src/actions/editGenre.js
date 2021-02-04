import * as types from './actionTypes';
import genresApi from '../api/genresApi';

export function updateGenresSuccess(genre) {
  return {type: 'EDIT_GENRE', genre};
}


export function editGenre(genre) {
  return function (dispatch) {
    return genresApi.updateGenre(genre).then(responseGenre => {
      dispatch(updateGenresSuccess(responseGenre));
    }).catch(error => {
      throw(error);
    });
  };
}
