

export default function genreReducer(state = {genres: []}, action)
{
    switch(action.type) {
        case FETCH_GENRES:
            return {genres: action.genres}

        case ADD_GENRE_SUCCESS:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    done: false
                }
            ];


        case DELETE_GENRE_SUCCESS:
            return state.filter(genre => genre.id !== action.index);

        default:
            return state;
    }
}
