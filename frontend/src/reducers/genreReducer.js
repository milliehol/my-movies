import { LOAD_GENRES, CREATE_GENRE, DELETE_GENRE } from '../actions/actionTypes'

function genreReducer(state = [], action)
{
    switch(action.type) {
        case LOAD_GENRES:
            return action.genres;

        case CREATE_GENRE:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    done: false
                }
            ];


        case DELETE_GENRE:
            return state.filter(genre => genre.id !== action.index);

        default:
            return state;
    }
}

export default genreReducer
