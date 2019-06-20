
import React from 'react';
import Comment from './CommentContainer'

const Comment = ({text, votes, id, upComment}) =>
 <li>
    {text} <span>votes: {votes}</span> <button onClick={() => upComment(id)}>Thumb up</button>
 </li>;

export default Comment;