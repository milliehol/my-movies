

//reducer accepts the state and an action


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
            //returns all movies in current state, then adds new movie
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

          //filters through array and deletes correct movie
          return {movies: state.movies.filter(movie => movie.id !== action.payload.id)}

        //   return state.filter(movie => movie.id !== action.payload.id);

        default:
            return state;
    }
}
