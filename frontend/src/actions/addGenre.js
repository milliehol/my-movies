export const addGenre = (data) => {
//dispatch is used inside addGenre function = thunk, allows you to place state in a loading state and update store with returned data
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/genres', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(genre => dispatch({type: 'ADD_GENRE', payload: genre}))
  }

}
