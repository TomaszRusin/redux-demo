
import { connect } from 'react-redux';
import Comment from './Comment';
import { addComment, editComment, downComment, upComment, removeComment } from '../store/comments/actions';

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => ({
    upComment: (id) => dispatch(upComment(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);