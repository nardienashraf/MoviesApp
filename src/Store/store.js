import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import combineReducers from './Reducer/combine';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store= createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)) );

export default store;