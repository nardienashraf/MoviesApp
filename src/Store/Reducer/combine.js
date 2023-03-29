import AllDataReducer from './allData';
import { combineReducers } from 'redux';
import FavoriteReducer from './favMovies';

export default combineReducers({
    favorite: FavoriteReducer,
    alldata: AllDataReducer
})