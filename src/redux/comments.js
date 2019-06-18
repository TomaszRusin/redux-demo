
import {ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actions'

const comments = (state = {comments: []}, action) => {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }
                , ...state]
            })
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        case EDIT_COMMENT:
            state.comments.filter(comment => {
                if(comment.id == action.id){
                    
                }
            })
            return Object.assign({}, state, {
                comments: [
                    state.comments.filter(comment => {
                        if(comment.id == action.id){
                            {
                                text: action.text
                                votes: 0
                            }
                        }
                    })
                , ...state]
            });
        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    state.comments.filter(comment => {
                        if(comment.id == action.id){
                            {
                                votes: votes + 1
                            }
                        }
                    })
                , ...state]
            });
        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    state.comments.filter(comment => {
                        if(comment.id == action.id){
                            {
                                votes: votes - 1
                            }
                        }
                    })
                , ...state]
            });
        default:
            return state;
    }
}

export default comments