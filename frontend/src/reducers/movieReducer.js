

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
                    genreId: action.movie.genre_Id,
                    title: action.title,
                    done: false
                }
            ];


        case 'DELETE_MOVIE':
            return state.filter(movie => movie.id !== action.index);

        default:
            return state;
    }
}
