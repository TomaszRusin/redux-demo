
import uuid from 'uuid'

export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT'
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT'

// ADD_COMMENT

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

// EDIT_COMMENT

export function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: id
    }
}

// REMOVE_COMMENT

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

// THUMB_DOWN_COMMENT

export function downComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id
    }
}

// THUMB_UP_COMMENT

export function upComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id
    }
}
