export const addMovie = (movie, genre_Id) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/genres/${genre_Id}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
    .then(response => response.json())
    .then(genre => {
        if (genre.error) {
          alert(genre.error)
        } else {
          dispatch({type: 'ADD_MOVIE', payload: genre})
        }
      }
    )
  }
}
