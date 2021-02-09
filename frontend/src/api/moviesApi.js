class moviesApi {

  static requestHeaders() {
   return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
 }

  static getAllMovies() {
    const headers = this.requestHeaders();
    const request = new Request(`http://localhost:3000/api/v1/genres/3/movies`, {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateMovie(movie) {
    //const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`http://localhost:3000/movies/${movie.id}`, {
      method: 'PUT',
      //headers: headers,
      body: JSON.stringify({movie: movie})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createMovie(movie) {
  //  const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`http://localhost:3000/movies`, {
      method: 'POST',
    //  headers: headers,
      body: JSON.stringify({movie: movie})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteMovie(movie) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`http://localhost:3000/movies/${movie.id}`, {
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

export default moviesApi;
