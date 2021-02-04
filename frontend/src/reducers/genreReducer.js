

export default function genreReducer(state = {genres: []}, action)
{
    switch(action.type) {
        case 'FETCH_GENRES':
            return {genres: action.genres}

            case 'ADD_GENRE':
           return {...state, genres: [...state.genres, action.name]}



        default:
            return state;
    }
}
