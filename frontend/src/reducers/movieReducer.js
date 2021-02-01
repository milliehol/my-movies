import { LOAD_MOVIES, ADD_MOVIE, DELETE_MOVIE } from '../actions/actionTypes'

function movieReducer(state = [], action)
{
    switch(action.type) {
        case LOAD_MOVIES:
            return action.movies;

        case CREATE_MOVIE:
            return [
                ...state,
                {
                    id: action.id,
                    genreId: action.movie.genreId,
                    title: action.title,
                    done: false
                }
            ];


        case DELETE_MOVIE:
            return state.filter(movie => movie.id !== action.index);

        default:
            return state;
    }
}

export default movieReducer
