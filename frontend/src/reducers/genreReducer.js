

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
      let genres = state.genres.map(genre => {
        if (genre.id === action.name.id) {
          return action.name
        } else {
          return genre
        }
      })
      return {...state, genres: genres}
    case 'DELETE_MOVIE':
      let newMovie = state.genres.map(genre => {
        if (genre.id === action.name.id) {
          return action.name
        } else {
          return genre
        }
      })
      return {...state, movies: newMovie}



        default:
            return state;
    }
}
