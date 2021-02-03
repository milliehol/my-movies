import { LOAD_GENRES_SUCCESS, ADD_GENRE_SUCCESS, DELETE_GENRE_SUCCESS } from '../actions/actionTypes'

function genreReducer(state = [], action)
{
    switch(action.type) {
        case LOAD_GENRES_SUCCESS:
            return action.genres;

        case ADD_GENRE_SUCCESS:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    done: false
                }
            ];


        case DELETE_GENRE_SUCCESS:
            return state.filter(genre => genre.id !== action.index);

        default:
            return state;
    }
}

export default genreReducer
