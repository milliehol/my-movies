

export default function genreReducer(state = {genres: []}, action)
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

      case 'ADD_MOVIE':
      let movies = state.movies.map(movie => {
        if (genre.id === action.name.id) {
          return action.name
        } else {
          return genre
        }
      })
      return {...state, genres: genres}
    case 'DELETE_MOVIE':
      let newMovie = state.accounts.map(account => {
        if (account.id === action.payload.id) {
          return action.paylo
        } else {
          return movie
        }
      })
      return {...state, movies: newMovie}



        default:
            return state;
    }
}
