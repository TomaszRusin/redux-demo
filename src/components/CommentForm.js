import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addComment} from '../store/comments/actions';

class CommentForm extends Component {
    state = {
        commentText: ''
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
    
        if(this.state.commentText){
            this.props.onCommentAdd(this.state.commentText)
            this.setState({commentText: ''})
        }
    }

    handleTextChange = (event) => {
        this.setState({ commentText: event.target.value})
    }

    render () {
        return (
        <form onSubmit={this.handleFormSubmit}>
            <input value={this.state.commentText} onChange={this.handleTextChange}/>
        </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onCommentAdd: (text) => dispatch(addComment(text))
})

export default connect(null, mapDispatchToProps)(CommentForm)