import { combineReducers } from 'redux';

import { productsReducer } from "./productsReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
    products: productsReducer,
    filter: filterReducer
})
