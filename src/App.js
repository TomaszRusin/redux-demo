import React from 'react';
import './App.css';
import CommentForm from './components/CommentForm'
import CommentsList from './components/CommentsListContainer'

const App = () => (
  <div className="App">
    <CommentForm />
    <div>
      <CommentsList />  
    </div>  
  </div> 
)
export default App;