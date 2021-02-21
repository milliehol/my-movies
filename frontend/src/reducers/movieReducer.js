




export default function movieReducer(state = {movies: []}, action)
{
    switch(action.type) {
        case 'FETCH_MOVIES':
      return {movies: action.payload}

        case 'CREATE_MOVIE':
            return [
                ...state,
                {
                    id: action.id,
                    genreId: action.movie.genre_id,
                    title: action.title,
                    done: false
                }
            ];

            case 'ADD_MOVIE':
            return {...state, movies: [...state.movies, action.payload]}

          //  case 'DELETE_COMMENT_REQUEST':
        // return Object.assign({}, prevState, {
        //   movies: prevState.movies
      //   });
    //   case 'DELETE_MOVIE':
    //     return Object.assign({}, prevState, {
    //       movies: action.payload
  //       });


        case 'DELETE_MOVIE':
                //return {...state, movies: [...state.movies, action.payload]}

           return {movies: state.movies.filter(movie => movie.id !== action.payload)}

           //return state.filter(movie => movie.id !== action.index);

        default:
            return state;
    }
}
