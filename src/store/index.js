import { createStore, combineReducers } from "redux";
import { counterReducer } from './counter';

const store = createStore(
    combineReducers({counter: counterReducer}), 
);

export default store;