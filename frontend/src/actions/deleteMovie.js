export const deleteMovie = (movieId, genre_Id) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/genres/${genre_Id}/movies/${movieId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(genre => dispatch({type: 'DELETE_MOVIE', payload: movieId}))
  }
}
