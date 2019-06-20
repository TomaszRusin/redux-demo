

import { createStore, combineReducers } from 'redux';
import {addComment, editComment, removeComment, downComment, upComment} from './comments/actions'
import comments from './comments/reducer';

export const reducer = combineReducers({
    comments
});

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(addComment('testowy'));
const state = store.getState();
const commentId = state.comments[0].id
store.dispatch(editComment(commentId, 'edytowany'));
store.dispatch(downComment(commentId));
store.dispatch(downComment(commentId));
store.dispatch(upComment(commentId));
// store.dispatch(removeComment(commentId));
