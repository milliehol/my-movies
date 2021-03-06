



export default function genreReducer(state = {genres: []}, action)
{
    switch(action.type) {
        case 'FETCH_GENRES':
            return {genres: action.payload}

            case 'ADD_GENRE':
           return {...state, genres: [...state.genres, action.payload]}

           case 'EDIT_GENRE':
      let newGenre = state.genres.map(genre => {
        if (genre.id === action.payload.id) {
          return action.payload
        } else {
          return genre
        }
      })
      return {...state, genres: newGenre}

    // case 'DELETE_MOVIE':
//  let movieDelete = state.genres.map(genre => {
//   if (genre.id === action.payload.id) {
//      return action.payload
//    } else {
//  })
//  return {...state, genres: movieDelete}
case 'NEW_MOVIE':
  let addMovie = state.genres.map(genre => {
    if (genre.id === action.payload.id) {
      return action.payload
    } else {
      return genre
    }
  })
  return {...state, genres: addMovie}







      //return {...state, movies: movieReducer(state.movies, action.payload)}



    //  case 'ADD_MOVIE':

    //     const movie = { title: action.movie.title, genreId: action.movie.genre_Id, id: cuidFn() };
    //     return { ...state,
    //       movies: [...state.movies, movie]
    //     }

      //case 'DELETE_MOVIE':
      //   const movies= state.movies.filter(movie => movie.id !== action.id);
      //   return {...state, movies }



        default:
            return state;
    }
}
