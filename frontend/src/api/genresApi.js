class genresApi {

  //static requestHeaders() {
  //  return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
//  }

  static getAllGenres() {
    const headers = this.requestHeaders();
    const request = new Request(`http://localhost:3000/genres`, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateGenre(genre) {
    //const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`http://localhost:3000/genres/${genre.id}`, {
      method: 'PUT',
      //headers: headers,
      body: JSON.stringify({genre: genre})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static addGenre(genre) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`http://localhost:3000/genres`, {
      method: 'POST',
     headers: headers,
      body: JSON.stringify({genre: genre})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteGenre(genre) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`http://localhost:3000/genres/${genre.id}`, {
      method: 'DELETE',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default genresApi;
