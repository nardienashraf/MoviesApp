const initialState = {
    FavoriteMovie: []
}

export default function FavoriteReducer(state = initialState, action) {
    switch (action.type) {
        case 'FAVORITE':
            // console.log(action.payload);
            return { ...state, FavoriteMovie: state.FavoriteMovie.concat(action.payload) }
        case 'DELETE_ITEM':
            return {
                ...state, FavoriteMovie: state.FavoriteMovie.filter((item) => item.id !== action.payload.id)
            }
        default:
            return state

    }
}