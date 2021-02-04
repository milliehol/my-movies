

export default function genreReducer(state = {genres: []}, action)
{
    switch(action.type) {
        case 'FETCH_GENRES':
            return {genres: action.genres}

            case 'ADD_GENRE':
           return {...state, genres: [...state.genres, action.name]}

           case 'EDIT_GENRE':
          return [
            ...state.filter(genre => genre.id !== action.genre.id),
            Object.assign({}, action.genre)
          ]



        default:
            return state;
    }
}
