
// ADD_COMMENT

export const ADD_COMMENT = 'ADD_COMMENT'
import uuid from 'uuid'

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

export const boundAddComment = text => dispatch(addComment(text));

// EDIT_COMMENT

export const EDIT_COMMENT = 'EDIT_COMMENT'

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    }
}

export const boundEditComment = text => dispatch(editComment(text));

// REMOVE_COMMENT

export const REMOVE_COMMENT = 'REMOVE_COMMENT'

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

export const boundRemoveComment = text => dispatch(removeComment(text));

// THUMB_DOWN_COMMENT

export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT'

function downComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id,
        votes: votes - 1
    }
}

export const boundDownComment = text => dispatch(downComment(text));

// THUMB_UP_COMMENT

export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT'

function upComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id,
        votes: votes + 1
    }
}

export const boundUpComment = text => dispatch(upComment(text));
