const initialState = {
    MovieList: []
}
export default function AllDataReducer(state = initialState, action) {
    switch (action.type) {
        case 'ALL_DATA':
            return { ...state, MovieList: action.payload }
        default:
            return state

    }
}