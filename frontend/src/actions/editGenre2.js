export const editGenre = (data) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/genres/${data.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(account => dispatch({type: 'EDIT_GENRE', name: genre}))
  }

}
