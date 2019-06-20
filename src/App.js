import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addComment, editComment, downComment, upComment, removeComment } from './store/comments/actions';

class App extends Component {
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

  handleEdit = (comment) => {
    const newText = prompt('enter new text', comment.text)
    if(newText){
      comment.votes = 0
      this.props.onCommentEdit(comment.id, newText)
    }else {
      return
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleFormSubmit}>
          <input value={this.state.commentText} onChange={this.handleTextChange}/>
        </form>
        <div>
        {this.props.comments.map((comment) => (
          <div key={comment.id}>
            <p onClick={() => this.handleEdit(comment)}>{comment.text}</p>
            {comment.votes}
            <button onClick={() => this.props.onCommentUp(comment.id)}>+</button>
            <button onClick={() => this.props.onCommentDown(comment.id)}>-</button>
            <button onClick={() => this.props.onCommentRemove(comment.id)}>×</button>
          </div>
        ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
      comments: state.comments
  })

const mapDispatchToProps = dispatch => ({
  onCommentUp: (id) => dispatch(upComment(id)),
  onCommentDown: (id) => dispatch(downComment(id)),
  onCommentAdd: (text) => dispatch(addComment(text)),
  onCommentRemove: (id) => dispatch(removeComment(id)),
  onCommentEdit: (id, text) => dispatch(editComment(id, text))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);