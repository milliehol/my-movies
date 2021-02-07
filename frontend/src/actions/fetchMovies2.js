export function fetchMovies(genre_Id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/genres/${genre_Id}/movies/`)
    .then(resp => resp.json())
    .then(movies => dispatch({
      type: 'FETCH_MOVIES',
      payload: movies
    }))
  }
}
