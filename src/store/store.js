

import { createStore, combineReducers } from 'redux';
import comments from './comments/reducer';

export const reducer = combineReducers({
    comments
});

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
