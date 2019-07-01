
import React from 'react';

const Comment = ({text, votes, onThumbUp, onThumbDown, onEdit, onRemove}) => (
   <li>
      <p onClick={onEdit}>{text}</p>
      {votes}
      <button onClick={onThumbUp}>+</button>
      <button onClick={onThumbDown}>-</button>
      <button onClick={onRemove}>x</button>
   </li>
)

export default Comment;