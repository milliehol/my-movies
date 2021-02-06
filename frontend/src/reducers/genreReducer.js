import cuid from 'cuid';
export const cuidFn = cuid;

export default function genreReducer(state = {genres: [], movies: [],}, action)
{
    switch(action.type) {
        case 'FETCH_GENRES':
            return {genres: action.genres}

            case 'ADD_GENRE':
           return {...state, genres: [...state.genres, action.name]}

           case 'EDIT_GENRE':
      let newGenre = state.genres.map(genre => {
        if (genre.id === action.genre.id) {
          return action.genre
        } else {
          return genre
        }
      })
      return {...state, genres: newGenre}

      case 'DELETE_MOVIE':
  let movieDelete = state.genres.map(genre => {
    if (genre.id === genre.payload.id) {
      return action.payload
    } else {
      return genre
    }
  })
  return {...state, genres: movieDelete}
case 'EDIT_MOVIE':
  let editMovie = state.genres.map(genre => {
    if (genre.id === action.payload.id) {
      return genre.payload
    } else {
      return genre
    }
  })
  return {...state, genres: editMovie}



  //    case 'FETCH_MOVIES':
    //   return {movies: action.movies}


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
