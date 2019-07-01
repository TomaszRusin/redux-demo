
import { connect } from 'react-redux';
import Comment from './Comment';
import {editComment, downComment, upComment, removeComment } from '../store/comments/actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
    onThumbUp: () => dispatch(upComment(ownProps.id)),
    onThumbDown: () => dispatch(downComment(ownProps.id)),
    onRemove: () => dispatch(removeComment(ownProps.id)),
    onEdit: () => {
        const newText = prompt('enter new text', ownProps.text)
        if(newText){
            return dispatch(editComment(ownProps.id, newText))
        }
    }
});

export default connect(
    null,
    mapDispatchToProps
)(Comment);