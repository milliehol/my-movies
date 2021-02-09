export function fetchMovies() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/movies')
    .then(resp => resp.json())
    .then(movies => dispatch({
      type: 'FETCH_MOVIES',
      payload: movies
    }))
  }
}
